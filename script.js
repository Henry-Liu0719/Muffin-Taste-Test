const questions = [
    {
        question: '當妳準備開始一個新的任務時，妳通常會怎麼做？',
        options: [
            { text: 'A. 靈感一來就立刻動手開始。', type: 'Dynamo' },
            { text: 'B. 想先和身邊的人聊聊，聽聽建議再出發。', type: 'Blaze' },
            { text: 'C. 會先觀察一下狀況，等到感覺對了再行動。', type: 'Tempo' },
            { text: 'D. 習慣先把流程列清楚，再按步驟進行。', type: 'Steel' }
        ]
    },
    {
        question: '別人最常讚美妳是個什麼樣的人？',
        options: [
            { text: 'A. 妳的點子都好特別、很有創意。', type: 'Dynamo' },
            { text: 'B. 跟妳聊天真的好舒服，感覺被支持。', type: 'Blaze' },
            { text: 'C. 妳總是很沉穩，有自己的步調。', type: 'Tempo' },
            { text: 'D. 妳做事超有條理，讓人好安心。', type: 'Steel' }
        ]
    },
    {
        question: '妳最自在的工作空間是？',
        options: [
            { text: 'A. 可以讓妳自由發揮創意的地方。', type: 'Dynamo' },
            { text: 'B. 能夠和人互動、熱鬧的環境。', type: 'Blaze' },
            { text: 'C. 能夠專注不被打擾的角落。', type: 'Tempo' },
            { text: 'D. 工具用品都擺放得很整齊的地方。', type: 'Steel' }
        ]
    },
    {
        question: '妳覺得最適合妳的創收方式是？',
        options: [
            { text: 'A. 開發自己獨創的產品或服務。', type: 'Dynamo' },
            { text: 'B. 用妳的影響力、個人魅力來吸引客戶。', type: 'Blaze' },
            { text: 'C. 靠日常的信任累積，慢慢建立客群。', type: 'Tempo' },
            { text: 'D. 有穩定系統支持，用數據來判斷策略。', type: 'Steel' }
        ]
    },
    {
        question: '當妳遇到困難時，妳通常會？',
        options: [
            { text: 'A. 馬上開始想各種新的解法。', type: 'Dynamo' },
            { text: 'B. 找人說說話、聽聽別人的想法。', type: 'Blaze' },
            { text: 'C. 先保持冷靜，仔細觀察後續變化。', type: 'Tempo' },
            { text: 'D. 開始找資料、分析可能的原因。', type: 'Steel' }
        ]
    },
    {
        question: '在一個團隊裡，妳通常是哪個角色？',
        options: [
            { text: 'A. 發起計畫、提供創意的核心。', type: 'Dynamo' },
            { text: 'B. 負責讓氣氛和諧，協助團隊成員。', type: 'Blaze' },
            { text: 'C. 很會協調資源、確保專案順利推進。', type: 'Tempo' },
            { text: 'D. 系統控，進行數據分析、安排個別任務。', type: 'Steel' }
        ]
    },
    {
        question: '妳的做事節奏通常是？',
        options: [
            { text: 'A. 想到什麼就會立刻去做。', type: 'Dynamo' },
            { text: 'B. 有人陪一起做，會更有動力。', type: 'Blaze' },
            { text: 'C. 會依照當下的時機來調整進度。', type: 'Tempo' },
            { text: 'D. 習慣分析好優先順序後再開始。', type: 'Steel' }
        ]
    },
    {
        question: '妳覺得自己最有價值的地方是？',
        options: [
            { text: 'A. 靈感超多，常常能想出創新突破。', type: 'Dynamo' },
            { text: 'B. 很會分享、打動人心，有同理心又溫暖。', type: 'Blaze' },
            { text: 'C. 做事冷靜、有敏銳的觀察力。', type: 'Tempo' },
            { text: 'D. 想法清晰，做事有效率。', type: 'Steel' }
        ]
    },
    {
        question: '妳最享受哪一種任務？',
        options: [
            { text: 'A. 從無到有，自己發想一個新點子。', type: 'Dynamo' },
            { text: 'B. 拍影片、講故事或是開直播分享。', type: 'Blaze' },
            { text: 'C. 維繫關係、做好後續照顧。', type: 'Tempo' },
            { text: 'D. 把流程優化、系統改進更有效率。', type: 'Steel' }
        ]
    },
    {
        question: '妳覺得讓妳行動卡住的原因，通常是？',
        options: [
            { text: 'A. 想法太多，不知道該從哪裡開始。', type: 'Dynamo' },
            { text: 'B. 身邊沒有人支持或聽妳說話。', type: 'Blaze' },
            { text: 'C. 環境還不對，還沒感覺到「時候到了」。', type: 'Tempo' },
            { text: 'D. 覺得資料不足、變數太多不敢動。', type: 'Steel' }
        ]
    }
];

const results = {
    'Creator': {
        type: '爆漿檸檬瑪芬 - 創造者 Creator',
        quote: '我有100個新點子等你聽！',
        traits: '靈感多、行動快、創意旺盛。妳總是充滿新奇的想法，能夠快速啟動計畫，並且勇於嘗試。妳是團隊中的點子王，總能帶來突破性的思維。',
        advantages: '開創新點子、啟動計畫。妳擅長從零開始，將抽象的靈感轉化為具體的行動方案。妳的創新能力是妳最大的優勢，能夠在競爭激烈的環境中脫穎而出。',
        blindSpots: '常常虎頭蛇尾，需搭配執行者。雖然妳擅長發想，但有時會因為過多的靈感而難以專注於單一項目，導致計畫無法徹底執行。妳需要找到一位能夠協助妳落實想法的夥伴。',
        incomeSuggestions: '快速啟動型事業，如新產品/課程設計。妳的創新思維非常適合開發獨特的產品或服務，並透過快速迭代來驗證市場反應。',
        avatar: 'photos/Creator檸檬瑪芬.png'
    },
    'Star': {
        type: '草莓星星瑪芬 - 明星 Star',
        quote: '這裡就是我的舞台！',
        traits: '有感染力、自帶聚光燈、善說故事。妳天生具有舞台魅力，能夠輕易吸引他人的目光。妳擅長透過故事來傳達理念，讓聽眾產生共鳴。',
        advantages: '品牌個人化、吸粉強。妳的個人魅力是妳最強大的資產，能夠建立忠實的粉絲群體。無論是公開演講還是社群互動，妳都能成為眾人焦點。',
        blindSpots: '容易情緒化，依賴認同。妳對他人的評價較為敏感，容易受到情緒波動的影響。過度追求認同可能會讓妳失去自我，需要學習如何堅定內心。',
        incomeSuggestions: '建立個人品牌、直播、自媒體變現。妳的影響力非常適合透過個人品牌來變現，例如經營社群媒體、直播帶貨或開設線上課程。',
        avatar: 'photos/Star草莓瑪芬.png'
    },
    'Supporter': {
        type: '棉花糖蜂蜜瑪芬 - 支柱 Supporter',
        quote: '你需要的時候我都在❤️',
        traits: '溫暖、團隊感強、激勵人心。妳是團隊中的潤滑劑，總能營造和諧的氛圍。妳擅長傾聽與同理，能夠給予他人溫暖的支持與鼓勵。',
        advantages: '團隊領導、打造社群歸屬。妳具有天生的領導力，能夠凝聚團隊成員，共同達成目標。妳擅長建立社群，讓每個人都感受到歸屬感。',
        blindSpots: '缺乏邏輯思考，難獨立做決策。妳傾向於以情感為導向，有時會忽略邏輯分析。在需要獨立做出重大決策時，可能會感到猶豫不決。',
        incomeSuggestions: '建社團、培養社群、課程陪跑教練。妳的溫暖特質非常適合建立社群，並透過陪伴與指導來幫助他人成長。',
        avatar: 'photos/Supporter蜂蜜瑪芬.png'
    },
    'Deal Maker': {
        type: '藍莓果醬瑪芬 - 推廣者 Deal Maker',
        quote: '我認識你需要的那個⼈！',
        traits: '懂人心、善協調、有溫度。妳擁有敏銳的洞察力，能夠快速理解他人的需求。妳擅長協調各方資源，促成合作，並且總是能給人溫暖的感受。',
        advantages: '創造合作與成交機會。妳是天生的談判高手，能夠在複雜的關係中找到平衡點，促成雙贏的局面。妳的人脈廣闊，總能為他人牽線搭橋。',
        blindSpots: '過度迎合、沒主見時容易迷失。妳有時會因為過度考慮他人的感受而忽略自己的需求，導致在決策時缺乏主見。需要學習如何堅定立場，表達自己的意見。',
        incomeSuggestions: '推薦產品、社群推廣、聯盟行銷。妳的協調能力非常適合擔任推廣者的角色，透過推薦優質產品或服務來創造收入。',
        avatar: 'photos/Deal Maker藍莓馬芬.png'
    },
    'Trader': {
        type: '抹茶紅豆瑪芬 - 經理 Trader',
        quote: '慢慢來，比較快',
        traits: '接地氣、重實感、慢慢來。妳腳踏實地，注重實際效益。妳不追求速度，而是穩紮穩打，確保每一步都走得穩健。',
        advantages: '規律生產、穩定品質。妳擅長建立規律的工作流程，確保產品或服務的品質穩定。妳的務實精神讓妳在執行層面表現出色。',
        blindSpots: '害怕冒險，行動速度慢。妳傾向於保守，不喜歡冒險。這可能會讓妳錯失一些快速發展的機會，需要學習如何在風險可控的範圍內嘗試新事物。',
        incomeSuggestions: '接案、手作創業、經營實體。妳的務實特質非常適合從事需要長期積累和穩定輸出的工作，例如接案、經營實體店面或手作產品。',
        avatar: 'photos/Trader抹茶紅豆瑪芬.png'
    },
    'Accumulator': {
        type: '黑糖核桃粒瑪芬 - 細節者 Accumulator',
        quote: '我來安排！',
        traits: '超有紀律、細膩、耐心高。妳對細節有著極高的要求，能夠耐心處理繁瑣的事務。妳的紀律性讓妳在執行計畫時有條不紊。',
        advantages: '累積資源、穩健操作。妳擅長積累知識和資源，並將其系統化。妳的穩健操作風格讓妳在長期投資或複雜專案中表現出色。',
        blindSpots: '過度規劃，行動延遲症。妳有時會因為過度追求完美而陷入規劃的泥沼，導致行動遲緩。需要學習如何在適當的時機放手一搏。',
        incomeSuggestions: '投資理財、寫部落格、收集型內容創業。妳的細膩特質非常適合從事需要大量資料整理和分析的工作，例如投資理財或內容創作。',
        avatar: 'photos/Accumulator黑糖核桃瑪芬.png'
    },
    'Lord': {
        type: '迷你黑芝麻瑪芬 - 主計師 Lord',
        quote: '一切都在我的掌控之中！',
        traits: '低調實幹、不喜曝光、控管力強。妳不喜歡張揚，更注重實際的成果。妳擅長掌控全局，確保一切都在計畫之中。',
        advantages: '控管成本、流程優化。妳具有卓越的成本控制和流程優化能力，能夠在有限的資源下創造最大的效益。妳是團隊中的效率專家。',
        blindSpots: '不懂行銷，缺乏人味連結。妳傾向於理性思考，有時會忽略情感層面的連結。在需要與人建立深度關係或進行行銷推廣時，可能會遇到挑戰。',
        incomeSuggestions: '架系統、營運後勤、資料分析。妳的理性特質非常適合從事需要系統性思維和數據分析的工作，例如後勤管理或系統架構。',
        avatar: 'photos/Lord黑芝麻瑪芬.png'
    },
    'Mechanic': {
        type: '苦甜巧克力瑪芬 - 機械師 Mechanic',
        quote: '讓我查一下說明書',
        traits: '邏輯王、喜歡拆解優化、效率控。妳是天生的問題解決者，擅長將複雜的問題拆解為簡單的步驟。妳追求效率，總能找到最佳的解決方案。',
        advantages: '系統設計、模組化產品。妳具有卓越的系統設計能力，能夠將複雜的流程模組化，提高工作效率。妳是團隊中的技術專家。',
        blindSpots: '容易過度完美主義、拖延發佈。妳對細節有著極高的要求，有時會因為追求完美而延遲發佈。需要學習如何在保證品質的前提下，加快執行速度。',
        incomeSuggestions: '架構課程流程、自動化系統。妳的邏輯思維非常適合從事需要系統性規劃和自動化設計的工作，例如課程開發或軟體工程。',
        avatar: 'photos/Mechanic巧克力瑪芬.png'
    }
};

let currentQuestionIndex = 0;
let scores = { 'Dynamo': 0, 'Blaze': 0, 'Tempo': 0, 'Steel': 0 };
let selectedOption = null;

const startQuizBtn = document.getElementById('start-quiz-btn');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const questionNumberElem = document.getElementById('question-number');
const questionTextElem = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const resultTypeElem = document.getElementById('result-type');
const resultAvatarElem = document.getElementById('result-avatar');
const roleQuoteElem = document.getElementById('role-quote');
const traitsElem = document.getElementById('traits');
const advantagesElem = document.getElementById('advantages');
const blindSpotsElem = document.getElementById('blind-spots');
const incomeSuggestionsElem = document.getElementById('income-suggestions');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const saveToSheetBtn = document.getElementById('save-to-sheet-btn');

startQuizBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', loadNextQuestion);
submitQuizBtn.addEventListener('click', showResult);
restartQuizBtn.addEventListener('click', restartQuiz);
saveToSheetBtn.addEventListener('click', saveToGoogleSheet);

function startQuiz() {
    startQuizBtn.style.display = 'none';
    quizSection.style.display = 'block';
    currentQuestionIndex = 0;
    scores = { 'Dynamo': 0, 'Blaze': 0, 'Tempo': 0, 'Steel': 0 };
    selectedOption = null;
    loadQuestion();
}

function loadQuestion() {
    selectedOption = null;
    optionsContainer.innerHTML = '';
    const currentQuestion = questions[currentQuestionIndex];
    questionNumberElem.textContent = `問題 ${currentQuestionIndex + 1}`;
    questionTextElem.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option.text;
        button.dataset.type = option.type;
        button.addEventListener('click', () => selectOption(button));
        optionsContainer.appendChild(button);
    });

    if (currentQuestionIndex === questions.length - 1) {
        nextQuestionBtn.style.display = 'none';
        submitQuizBtn.style.display = 'block';
    } else {
        nextQuestionBtn.style.display = 'block';
        submitQuizBtn.style.display = 'none';
    }
    nextQuestionBtn.disabled = true; // Disable next button until an option is selected
    submitQuizBtn.disabled = true; // Disable submit button until an option is selected
}

function selectOption(button) {
    // Remove 'selected' class from previously selected option
    const currentSelected = optionsContainer.querySelector('.option-btn.selected');
    if (currentSelected) {
        currentSelected.classList.remove('selected');
    }
    // Add 'selected' class to the newly selected option
    button.classList.add('selected');
    selectedOption = button.dataset.type;
    nextQuestionBtn.disabled = false;
    submitQuizBtn.disabled = false;
}

function loadNextQuestion() {
    if (selectedOption) {
        scores[selectedOption]++;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    if (selectedOption) {
        scores[selectedOption]++; // Add score for the last question
    }

    quizSection.style.display = 'none';
    resultSection.style.display = 'block';

    let maxScore = 0;
    let resultType = '';
    let dominantTypes = [];

    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            dominantTypes = [type];
        } else if (scores[type] === maxScore) {
            dominantTypes.push(type);
        }
    }

    // Determine result type based on scores
    if (dominantTypes.includes('Dynamo') && dominantTypes.includes('Blaze') && dominantTypes.length === 2) {
        resultType = 'Star';
    } else if (dominantTypes.includes('Dynamo') && dominantTypes.length === 1) {
        resultType = 'Creator';
    } else if (dominantTypes.includes('Blaze') && dominantTypes.length === 1) {
        resultType = 'Star';
    } else if (dominantTypes.includes('Tempo') && dominantTypes.includes('Blaze')) {
        resultType = 'Supporter';
    } else if (dominantTypes.includes('Tempo') && dominantTypes.includes('Steel')) {
        resultType = 'Trader';
    } else if (dominantTypes.includes('Steel') && dominantTypes.includes('Dynamo')) {
        resultType = 'Mechanic';
    } else if (dominantTypes.includes('Steel') && dominantTypes.length === 1) {
        resultType = 'Lord';
    } else if (dominantTypes.includes('Tempo') && dominantTypes.length === 1) {
        resultType = 'Accumulator';
    } else if (dominantTypes.includes('Blaze') && dominantTypes.includes('Steel')) {
        resultType = 'Deal Maker';
    } else {
        // Fallback for other combinations
        resultType = dominantTypes[0]; // Use the first dominant type
    }

    const finalResult = results[resultType];
    resultTypeElem.textContent = finalResult.type;
    roleQuoteElem.textContent = finalResult.quote;
    traitsElem.textContent = finalResult.traits;
    advantagesElem.textContent = finalResult.advantages;
    blindSpotsElem.textContent = finalResult.blindSpots;
    incomeSuggestionsElem.textContent = finalResult.incomeSuggestions;
    
    // Set avatar image
    resultAvatarElem.src = finalResult.avatar;
    resultAvatarElem.style.display = 'block';
}

function restartQuiz() {
    resultSection.style.display = 'none';
    startQuizBtn.style.display = 'block';
    currentQuestionIndex = 0;
    scores = { 'Dynamo': 0, 'Blaze': 0, 'Tempo': 0, 'Steel': 0 };
    selectedOption = null;
}

// 保存結果到 Google 試算表
function saveToGoogleSheet() {
    const saveBtn = document.getElementById('save-to-sheet-btn');
    const originalText = saveBtn.textContent;
    
    // 禁用按鈕並顯示載入狀態
    saveBtn.disabled = true;
    saveBtn.textContent = '📊 正在保存...';
    
    // 準備測驗結果數據
    const resultData = {
        timestamp: new Date().toLocaleString('zh-TW'),
        resultType: resultTypeElem.textContent,
        roleQuote: roleQuoteElem.textContent,
        traits: traitsElem.textContent,
        advantages: advantagesElem.textContent,
        blindSpots: blindSpotsElem.textContent,
        incomeSuggestions: incomeSuggestionsElem.textContent,
        scores: scores
    };
    
    // 使用 Google Apps Script Web App 來保存數據
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxHhzQFInEuOJqwFqTwxbreamOcG_mXfu8ox1X6VlTLFIIjaDAvdZ9J1PvR9Wf2wmm6WQ/exec'; // 需要替換為實際的 URL
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultData)
    })
    .then(() => {
        // 成功保存
        saveBtn.textContent = '✅ 已保存到試算表';
        saveBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        
        // 3秒後恢復原狀
        setTimeout(() => {
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
            saveBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        }, 3000);
    })
    .catch(error => {
        console.error('保存失敗:', error);
        saveBtn.textContent = '❌ 保存失敗，請重試';
        saveBtn.style.background = 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)';
        
        // 5秒後恢復原狀
        setTimeout(() => {
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
            saveBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        }, 5000);
    });
}




