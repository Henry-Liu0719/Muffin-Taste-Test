/**
 * Google Apps Script 用於處理瑪芬口味測驗結果
 * 將測驗結果保存到 Google 試算表
 */

// 設定試算表 ID（需要替換為您的實際試算表 ID）
const SPREADSHEET_ID = '12rnuXi2WWHS_9hB5npg-BtZc2e-Txb-QWkH9N0N-YmY';

// 設定工作表名稱
const SHEET_NAME = '測驗結果';

/**
 * 處理 POST 請求，保存測驗結果
 */
function doPost(e) {
  try {
    // 解析請求數據
    const data = JSON.parse(e.postData.contents);
    
    // 獲取試算表和工作表
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // 如果工作表不存在，創建一個新的
    if (!sheet) {
      createNewSheet(spreadsheet);
    }
    
    // 準備要保存的數據
    const rowData = [
      data.timestamp || new Date().toLocaleString('zh-TW'),
      data.resultType || '',
      data.roleQuote || '',
      data.traits || '',
      data.advantages || '',
      data.blindSpots || '',
      data.incomeSuggestions || '',
      JSON.stringify(data.scores || {}),
      new Date() // 系統時間戳
    ];
    
    // 將數據添加到工作表
    sheet.appendRow(rowData);
    
    // 自動寄送郵件到指定信箱
    sendEmailNotification(data);
    
    // 返回成功響應
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: '測驗結果已保存並寄送郵件' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('保存測驗結果時發生錯誤:', error);
    
    // 返回錯誤響應
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: '保存失敗: ' + error.message 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 創建新的工作表
 */
function createNewSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet(SHEET_NAME);
  
  // 設定標題行
  const headers = [
    '測驗時間',
    '結果類型',
    '角色台詞',
    '特質',
    '優勢',
    '盲點提醒',
    '創收建議',
    '分數詳情',
    '系統記錄時間'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // 設定標題行樣式
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  
  // 自動調整欄寬
  sheet.autoResizeColumns(1, headers.length);
  
  // 凍結標題行
  sheet.setFrozenRows(1);
  
  // 設定數據驗證（可選）
  setupDataValidation(sheet);
}

/**
 * 設定數據驗證
 */
function setupDataValidation(sheet) {
  // 為結果類型欄位設定下拉選單
  const resultTypes = [
    '爆漿檸檬瑪芬 - 創造者 Creator',
    '草莓星星瑪芬 - 明星 Star',
    '棉花糖蜂蜜瑪芬 - 支柱 Supporter',
    '藍莓果醬瑪芬 - 推廣者 Deal Maker',
    '抹茶紅豆瑪芬 - 經理 Trader',
    '黑糖核桃粒瑪芬 - 細節者 Accumulator',
    '迷你黑芝麻瑪芬 - 主計師 Lord',
    '苦甜巧克力瑪芬 - 機械師 Mechanic'
  ];
  
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(resultTypes, true)
    .setAllowInvalid(false)
    .setHelpText('請選擇測驗結果類型')
    .build();
    
  sheet.getRange(2, 2, sheet.getMaxRows() - 1, 1).setDataValidation(rule);
}

/**
 * 處理 GET 請求（用於測試）
 */
function doGet(e) {
  return ContentService
    .createTextOutput('瑪芬口味測驗結果處理服務正在運行')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * 手動測試函數（可在 Apps Script 編輯器中執行）
 */
function testFunction() {
  const testData = {
    timestamp: '2024-01-01 12:00:00',
    resultType: '爆漿檸檬瑪芬 - 創造者 Creator',
    roleQuote: '我有100個新點子等你聽！',
    traits: '靈感多、行動快、創意旺盛',
    advantages: '開創新點子、啟動計畫',
    blindSpots: '常常虎頭蛇尾，需搭配執行者',
    incomeSuggestions: '快速啟動型事業，如新產品/課程設計',
    scores: { 'Dynamo': 5, 'Blaze': 2, 'Tempo': 2, 'Steel': 1 }
  };
  
  // 模擬 POST 請求
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('測試結果:', result.getContent());
  
  // 測試郵件功能
  console.log('測試郵件寄送功能...');
  sendEmailNotification(testData);
  console.log('郵件測試完成');
}

/**
 * 清理舊數據（可選，用於維護）
 */
function cleanupOldData() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (!sheet) return;
  
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return; // 只有標題行
  
  // 刪除 30 天前的數據
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 30);
  
  const dataRange = sheet.getRange(2, 9, lastRow - 1, 1); // 系統記錄時間欄位
  const dates = dataRange.getValues();
  
  let rowsToDelete = [];
  dates.forEach((date, index) => {
    if (date[0] < cutoffDate) {
      rowsToDelete.push(index + 2); // +2 因為從第 2 行開始，且 index 從 0 開始
    }
  });
  
  // 從後往前刪除行（避免索引變化）
  for (let i = rowsToDelete.length - 1; i >= 0; i--) {
    sheet.deleteRow(rowsToDelete[i]);
  }
  
  console.log('已清理 ' + rowsToDelete.length + ' 行舊數據');
}

/**
 * 自動寄送測驗結果通知郵件
 */
function sendEmailNotification(data) {
  try {
    // 設定收件人信箱
    const recipientEmail = 'hungminliu@gmail.com';
    
    // 準備郵件主旨
    const subject = '🎯 新的瑪芬口味測驗結果 - ' + (data.resultType || '未知類型');
    
    // 準備郵件內容
    const emailBody = `
🎉 有新的瑪芬口味測驗結果！

📊 測驗完成時間：${data.timestamp || new Date().toLocaleString('zh-TW')}

🎯 測驗結果：${data.resultType || '未知類型'}

💬 角色台詞：${data.roleQuote || '無'}

📋 特質描述：
${data.traits || '無'}

✨ 優勢分析：
${data.advantages || '無'}

⚠️ 盲點提醒：
${data.blindSpots || '無'}

💰 創收建議：
${data.incomeSuggestions || '無'}

📈 詳細分數：
${JSON.stringify(data.scores || {}, null, 2)}

---
此郵件由瑪芬口味測驗系統自動發送
測驗結果已同時保存到 Google 試算表
    `.trim();
    
    // 寄送郵件
    GmailApp.sendEmail(recipientEmail, subject, emailBody);
    
    console.log('測驗結果通知郵件已寄送到:', recipientEmail);
    
  } catch (error) {
    console.error('寄送郵件時發生錯誤:', error);
    // 郵件寄送失敗不會影響測驗結果的保存
  }
}
