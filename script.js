const questions = [
    {
        question: '要開始一件新任務時，妳通常會？',
        options: [
            { text: 'A. 靈感一來，先動手做了再說', type: 'Dynamo' },
            { text: 'B. 先找人聊聊、聽聽建議再出發', type: 'Blaze' },
            { text: 'C. 先觀察一下狀況，等感覺對了再動', type: 'Tempo' },
            { text: 'D. 先把步驟列清楚，再照順序進行', type: 'Steel' }
        ]
    },
    {
        question: '別人最常稱讚妳是個怎樣的人？',
        options: [
            { text: 'A. 妳的點子總是好新鮮、很有創意', type: 'Dynamo' },
            { text: 'B. 跟妳聊天好舒服，很有被支持的感覺', type: 'Blaze' },
            { text: 'C. 妳總是很沉穩，有自己的步調', type: 'Tempo' },
            { text: 'D. 妳做事超有條理，讓人好放心', type: 'Steel' }
        ]
    },
    {
        question: '哪一種空間讓妳工作起來最自在？',
        options: [
            { text: 'A. 能自由發揮、不被框住的地方', type: 'Dynamo' },
            { text: 'B. 能跟人互動、有點熱鬧的環境', type: 'Blaze' },
            { text: 'C. 舒適自在、能照自己步調慢慢做的地方', type: 'Tempo' },
            { text: 'D. 東西都擺得整整齊齊的地方', type: 'Steel' }
        ]
    },
    {
        question: '妳覺得最適合自己的賺錢方式是？',
        options: [
            { text: 'A. 開發自己獨創的產品或服務', type: 'Dynamo' },
            { text: 'B. 用個人魅力和影響力吸引客戶', type: 'Blaze' },
            { text: 'C. 靠日常的信任，慢慢養出客群', type: 'Tempo' },
            { text: 'D. 有穩定系統和數據支撐，照策略走', type: 'Steel' }
        ]
    },
    {
        question: '遇到困難的時候，妳通常會？',
        options: [
            { text: 'A. 馬上開始想各種新解法', type: 'Dynamo' },
            { text: 'B. 找人說說話、聽聽別人怎麼看', type: 'Blaze' },
            { text: 'C. 先冷靜下來，觀察後續變化', type: 'Tempo' },
            { text: 'D. 開始查資料、分析可能的原因', type: 'Steel' }
        ]
    },
    {
        question: '在一個團隊裡，妳常常是哪個角色？',
        options: [
            { text: 'A. 發起計畫、丟出創意的人', type: 'Dynamo' },
            { text: 'B. 負責暖場、照顧大家心情的人', type: 'Blaze' },
            { text: 'C. 協調資源、讓事情順利推進的人', type: 'Tempo' },
            { text: 'D. 分析狀況、安排分工的人', type: 'Steel' }
        ]
    },
    {
        question: '妳做事的節奏通常是？',
        options: [
            { text: 'A. 想到什麼就立刻去做', type: 'Dynamo' },
            { text: 'B. 有人一起做，會更有動力', type: 'Blaze' },
            { text: 'C. 看當下的時機，再調整進度', type: 'Tempo' },
            { text: 'D. 先排好優先順序，再開始動', type: 'Steel' }
        ]
    },
    {
        question: '妳覺得自己最有價值的地方是？',
        options: [
            { text: 'A. 靈感多，常常想出突破的點子', type: 'Dynamo' },
            { text: 'B. 溫暖有同理心，很能打動人心', type: 'Blaze' },
            { text: 'C. 冷靜，有敏銳的觀察力', type: 'Tempo' },
            { text: 'D. 思路清晰，做事有效率', type: 'Steel' }
        ]
    },
    {
        question: '哪一種任務妳做起來最享受？',
        options: [
            { text: 'A. 從無到有，發想一個全新的點子', type: 'Dynamo' },
            { text: 'B. 拍影片、說故事、開直播分享', type: 'Blaze' },
            { text: 'C. 按部就班，把手上的事一件一件穩穩完成', type: 'Tempo' },
            { text: 'D. 優化流程、把系統改得更順', type: 'Steel' }
        ]
    },
    {
        question: '讓妳行動卡住的，通常是？',
        options: [
            { text: 'A. 想法太多，不知道從哪開始', type: 'Dynamo' },
            { text: 'B. 身邊沒有人支持、沒人聽妳說', type: 'Blaze' },
            { text: 'C. 感覺時機還沒到、環境還不對', type: 'Tempo' },
            { text: 'D. 覺得資料不夠、變數太多不敢動', type: 'Steel' }
        ]
    }
];
const results = {
    'Creator': {
        type: '爆漿檸檬瑪芬',
        quote: '我腦袋裡的點子多到滿出來，好想趕快分享給你！',
        traits: '妳是天生的點子發動機，靈感一來就停不下來。新玩法、新方向總讓妳眼睛發亮，妳最享受「從無到有」、把想像變成真實的那個過程。',
        advantages: '妳很會「開頭」。別人還在猶豫，妳已經做出第一版。這種先做再修的行動力，在自媒體和線上創業裡特別吃香，因為光是願意開始的人，就已經贏過大半了。',
        blindSpots: '點子太多，容易這個做一半、又被下一個吸走。妳真正需要的不是更多靈感，而是把一件事好好做完。找一個能幫妳收尾、落地的方法或夥伴，妳的爆發力才會真的變成成果。',
        incomeSuggestions: '適合妳的是「快速啟動」型的路：把妳擅長的事做成一個小課程、數位產品，或一套能重複賣的東西。先求有、再求好，用市場回饋一步步修，最適合妳這種滾動式調整專家❤️',
        avatar: 'photos/Creator檸檬瑪芬.png'
    },
    'Star': {
        type: '草莓星星瑪芬',
        quote: '這裡就是我的舞台，讓我說給你聽！',
        traits: '妳天生有種讓人想靠近的魅力，一站出來就會發光。妳很會說故事，總能把自己的經歷講得有溫度，讓聽的人忍不住點頭、被妳打動。',
        advantages: '妳是天生的個人品牌料。妳的真誠和魅力會幫妳吸引到一群真心喜歡妳的人，不管是發限動、開直播還是分享日常，妳都能讓人記住妳、想追蹤妳。',
        blindSpots: '悄悄告訴妳，不是每個人都要喜歡妳，把焦點放回「我想為誰發聲」，妳的光才不會被別人的冷水澆熄。',
        incomeSuggestions: '適合妳的是「站到台前」的路！經營個人品牌、自媒體、直播分享都很適合，先讓大家認識真實的妳，累積信任感後賣什麼都會順利，先讓人喜歡妳，推什麼大家都會買單❤️',
        avatar: 'photos/Star草莓瑪芬.png'
    },
    'Supporter': {
        type: '棉花糖蜂蜜瑪芬',
        quote: '你需要的時候，我都在❤️',
        traits: '妳是那種讓人待在身邊就覺得安心的人。溫暖、會傾聽、懂得替別人著想，總能讀懂對方的情緒，在他最需要的時候遞上一句剛剛好的話。',
        advantages: '妳天生會凝聚人。妳能讓一群人有歸屬感、願意留下來，這在經營社群、帶共學、做陪跑型服務上是超強的本錢，因為人會為了「被妳好好對待的感覺」一直回來。',
        blindSpots: '妳太習慣照顧別人，常常把自己的需求放到最後，也容易因為心軟而難下決定。悄悄告訴妳，先把自己照顧好，妳才有力氣照顧更多人。',
        incomeSuggestions: '適合妳的是「陪伴型」的路！經營社群、帶共學、當陪跑教練都很對味，妳的溫暖會讓學員捨不得離開，把這份「被妳陪著」的感覺做成服務，就是妳最自然的收入來源❤️',
        avatar: 'photos/Supporter蜂蜜瑪芬.png'
    },
    'DealMaker': {
        type: '藍莓果醬瑪芬',
        quote: '你需要的那個人，我剛好認識！',
        traits: '妳對人有一種天生的敏銳，很快就能讀懂別人要什麼，也很會替兩邊牽線。跟妳相處總是很舒服，因為妳既懂人心、又有溫度。',
        advantages: '妳是天生的「牽線高手」。妳能在人跟人、需求跟資源之間找到剛好的接點，促成合作、創造成交，這種能力在推廣和合作型的生意裡特別值錢。',
        blindSpots: '妳太在意別人的感受，有時候會為了配合大家而忘了自己的立場。悄悄告訴妳，先想清楚「我相信什麼」，妳的推薦才會更有力量，也才不會被別人帶著走。',
        incomeSuggestions: '適合妳的是「連結型」的路！推薦好產品、做社群推廣、聯盟行銷都很對味，妳天生會牽線，把妳真心喜歡的東西介紹給對的人，收入就會自然跟著來❤️',
        avatar: 'photos/DealMaker藍莓瑪芬.png'
    },
    'Trader': {
        type: '抹茶紅豆瑪芬',
        quote: '慢慢來，其實比較快。',
        traits: '妳腳踏實地，重視真實的手感和品質。妳不追求一夕爆紅，而是一步一腳印，把每件事都做得扎實、做得讓人安心。',
        advantages: '妳超會「穩定輸出」。妳能建立起規律的節奏，將品質一直維持在水準之上，這種可靠感會讓客人一再光顧，因為他們知道交給妳就是放心的保證。',
        blindSpots: '妳比較保守，遇到要冒險的時候容易猶豫、動得慢。悄悄告訴妳，不用一次跨很大步，先在能承受的範圍裡試一點點，妳會發現很多機會其實沒有想像中可怕。',
        incomeSuggestions: '適合妳的是「穩紮穩打」型的路！接案、手作創業、經營自己的小店都很對味，妳的踏實和穩定就是最好的招牌，慢慢累積口碑，客人會一個帶一個來❤️',
        avatar: 'photos/Trader抹茶紅豆瑪芬.png'
    },
    'Accumulator': {
        type: '黑糖核桃粒瑪芬',
        quote: '交給我來安排吧！',
        traits: '妳對細節有著超高的敏感度，又有滿滿的耐心。再瑣碎的事妳都能一項一項整理得井井有條，妳的紀律讓妳做起事來特別穩、特別讓人信賴。',
        advantages: '妳很會「累積」。妳擅長把知識、資源一點一點收集、整理、系統化，時間越久，妳手上的東西越值錢。這種複利式的累積，是很多人羨慕卻學不來的本事。',
        blindSpots: '妳有時候會因為想準備到「完美」才開始，結果一直卡在規劃、遲遲沒行動。悄悄告訴妳，先做出 80 分就推出去，剩下的邊做邊修，妳會走得比想像中更快。',
        incomeSuggestions: '適合妳的是「累積型」的路！經營部落格、做知識整理型的內容、理財分享都很對味，妳收集和整理的功力會慢慢長成一座寶庫，時間會替妳把價值越疊越高❤️',
        avatar: 'photos/Accumulator黑糖核桃瑪芬.png'
    },
    'Lord': {
        type: '迷你黑芝麻瑪芬',
        quote: '別擔心，一切都在我的掌握之中！',
        traits: '妳低調又務實，不愛站在鎂光燈下，但做起事來超級可靠。妳很會把全局看清楚、把每個環節控管好，讓事情默默地、穩穩地往前推。',
        advantages: '妳是天生的「幕後操盤手」。妳很會控管成本、優化流程，能在有限的資源裡擠出最大的效益。這種把事情做得又省又好的本事，是很多團隊最需要、卻最缺的人才。',
        blindSpots: '妳習慣用理性看事情，有時候會忽略「人的感受」和行銷這一塊。悄悄告訴妳，妳不用變成很愛曝光的人，但練習多分享一點妳的想法、讓別人看見妳的好，機會才找得到妳。',
        incomeSuggestions: '適合妳的是「幕後系統」型的路！幫人架系統、做營運後勤、資料分析都很對味，妳的條理和控管力就是別人願意付費的價值，把複雜變簡單，就是妳最厲害的收入魔法❤️',
        avatar: 'photos/Lord黑芝麻瑪芬.png'
    },
    'Mechanic': {
        type: '苦甜巧克力瑪芬',
        quote: '等等，讓我先查一下說明書。',
        traits: '妳是天生的邏輯控，最愛把複雜的東西拆開來研究、再重新組裝得更順。妳追求效率，看到卡卡的流程就會手癢想優化，做事有一套自己的邏輯。',
        advantages: '妳超會「設計系統」。妳能把一團亂的流程整理成清楚的步驟，甚至模組化、自動化。這種把混亂變成系統的能力，在做線上課程、自動化工具上特別吃香。',
        blindSpots: '妳對細節要求高，常常因為想做到「完美」而遲遲不敢發布。悄悄告訴妳，先求有再求好，把東西推出去讓真實的人用，那些回饋會比妳自己關在房間裡想更有用。',
        incomeSuggestions: '適合妳的是「系統設計」型的路！設計課程流程、打造自動化系統、做線上工具都很對味，妳把複雜變簡單的本事就是別人最願意花錢買的東西，動手做出第一版吧❤️',
        avatar: 'photos/Mechanic巧克力瑪芬.png'
    }
};
let currentQuestionIndex = 0;
let scores = { 'Dynamo': 0, 'Blaze': 0, 'Tempo': 0, 'Steel': 0 };
let selectedOption = null;
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizSection = document.getElementById('quiz-section');
const userInfoSection = document.getElementById('user-info-section');
const resultSection = document.getElementById('result-section');
const questionNumberElem = document.getElementById('question-number');
const questionTextElem = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const userInfoForm = document.getElementById('user-info-form');
const resultTypeElem = document.getElementById('result-type');
const resultAvatarElem = document.getElementById('result-avatar');
const roleQuoteElem = document.getElementById('role-quote');
const traitsElem = document.getElementById('traits');
const advantagesElem = document.getElementById('advantages');
const blindSpotsElem = document.getElementById('blind-spots');
const incomeSuggestionsElem = document.getElementById('income-suggestions');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
startQuizBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', loadNextQuestion);
submitQuizBtn.addEventListener('click', showUserInfoForm);
userInfoForm.addEventListener('submit', handleUserInfoSubmit);
restartQuizBtn.addEventListener('click', restartQuiz);
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
function showUserInfoForm() {
    if (selectedOption) {
        scores[selectedOption]++; // Add score for the last question
    }
    quizSection.style.display = 'none';
    userInfoSection.style.display = 'block';
}
// 處理用戶資訊提交
function handleUserInfoSubmit(e) {
    e.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    if (!userName || !userEmail) {
        alert('請填寫姓名和信箱');
        return;
    }
    // 計算測驗結果
    calculateResult();
    // 自動保存到試算表
    saveToGoogleSheet(userName, userEmail);
    // 顯示結果
    userInfoSection.style.display = 'none';
    resultSection.style.display = 'block';
}
// 計算測驗結果
function calculateResult() {
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
        resultType = 'DealMaker';
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
    resultAvatarElem.style.display = 'inline';
}
function restartQuiz() {
    resultSection.style.display = 'none';
    userInfoSection.style.display = 'none';
    startQuizBtn.style.display = 'block';
    currentQuestionIndex = 0;
    scores = { 'Dynamo': 0, 'Blaze': 0, 'Tempo': 0, 'Steel': 0 };
    selectedOption = null;
    // 清空表單
    document.getElementById('user-info-form').reset();
}
// 自動保存結果到 Google 試算表
function saveToGoogleSheet(userName, userEmail) {
    // 準備測驗結果數據
    const resultData = {
        timestamp: new Date().toLocaleString('zh-TW'),
        userName: userName,
        userEmail: userEmail,
        resultType: resultTypeElem.textContent,
        roleQuote: roleQuoteElem.textContent,
        traits: traitsElem.textContent,
        advantages: advantagesElem.textContent,
        blindSpots: blindSpotsElem.textContent,
        incomeSuggestions: incomeSuggestionsElem.textContent,
        scores: scores
    };
    // 使用 Google Apps Script Web App 來保存數據
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxC7VheFCDHaa4dLIKzx_-MYo2Gj4n3Nk2VXR2UdxyWbYv7CNgzmtUQQwoLpVAJ5jcT/exec";
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultData)
    })
        .then(() => {
        })
        .catch(error => {
            console.error('保存失敗:', error);
        });
}
