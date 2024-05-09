function learnHover(obj) {
  obj.innerHTML = "Let's start it! >>";
}

function learnHoverOut(obj) {
  obj.innerHTML = "Let's start it!";
}

function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function transfer(event) {
  var prev_Button = document.getElementById("Name_button_0");
  prev_Button.style.display = "none";
  var nextButton = document.getElementById("Name_button_1");
  nextButton.style.display = "block";
}

function updateModalContent(event) {
  event.preventDefault();
  var name = document.getElementById("Name_input").value;
  if (name === "") {
    alert("Please enter your name.");
  } else {
    var modalTitle = document.getElementById("modal_title");
    modalTitle.style.display = "none";
    var modalQuestionTitle = document.getElementById("modal_title_question");
    modalQuestionTitle.style.display = "block";
    var modalTimeTitle = document.getElementById("modal_title_time");
    modalTimeTitle.style.display = "block";
    var question = document.getElementById("question");
    question.style.display = "block";
    var optionsContainer = document.getElementById("options_container");
    optionsContainer.style.display = "block";
    var nameForm = document.getElementById("name_form");
    nameForm.style.display = "none";
    var reminder = document.getElementById("reminder");
    reminder.style.display = "none";
    modalTitle.style.margin = "0%";
    var nextButton = document.getElementById("Name_button_0");
    nextButton.style.display = "block";
  }
}

function selectOption(option) {
  var selectedOption = option;
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    if (i + 1 === option) {
      options[i].classList.add("selected");
    } else {
      options[i].classList.remove("selected");
    }
  }
}

var questions = [{
    correct_index: "0"
  },
  {
    question: "Where is China?",
    options: ["A. Asia", "B. Europe", "C. Africa", "D. I don't know"],
    correct_index: "0"
  },
  {
    question: "When the People's Republic of China was founded?",
    options: ["A. 1947", "B. 1948", "C. 1949", "D. 1950"],
    correct_index: "2"
  },
  {
    question: "1+1 = ? ",
    options: ["A. 2", "B. 8", "C. 11", "D. 22"],
    correct_index: "0"
  },
  {
    question: "18+23 = ? ",
    options: ["A. 28", "B. 30", "C. 41", "D. 40"],
    correct_index: "2"
  },
  {
    question: "Find the synonym of 'Happy'",
    options: ["A. Sad", "B. Fear", "C. Thrilled", "D. Glad"],
    correct_index: "3"
  },
  {
    question: "Find the antonym of 'Try'",
    options: ["A. Attempt", "B. Surrender", "C. Work", "D. Take"],
    correct_index: "1"
  },
  {
    question: "When was Java programming language developed?",
    options: ["A. 1992", "B. 1996", "C. 1995", "D. 1991"],
    correct_index: "3"
  },
  {
    question: "Who developed the Java programming language?",
    options: ["A. James Gosling", "B. Zhan Shiquan", "C. Tom", "D. Tomas"],
    correct_index: "0"
  },
  {
    question: "Which country is the most powerful developing country today? ",
    options: ["A. China", "B. America", "C. Korea", "D. Japan"],
    correct_index: "0"
  },
  {
    question: "Which country is the most powerful developed country today? ",
    options: ["A. China", "B. America", "C. Korea", "D. Japan"],
    correct_index: "1"
  },
];

var count = 0;
var timeLeft = 20; // 倒计时初始时间
var countdownInterval; // 存储setInterval的返回值

function nextQuestion(event) {
  var question = document.getElementById("question");
  var selectedOption = null; // 初始化为null
  var modalQuestionTitle = document.getElementById("modal_title_question");
  var modalTimeTitle = document.getElementById('modal_title_time');
  var button = document.getElementById("Name_button_1");
  var option_1 = document.getElementById("option_1");
  var option_2 = document.getElementById("option_2");
  var option_3 = document.getElementById("option_3");
  var option_4 = document.getElementById("option_4");
  question.innerHTML = questions[count+1].question;
  button.innerHTML = "Submit";
  modalQuestionTitle.innerHTML = `Question ${count + 1}: `;
  option_1.innerHTML = questions[count+1].options[0];
  option_2.innerHTML = questions[count+1].options[1];
  option_3.innerHTML = questions[count+1].options[2];
  option_4.innerHTML = questions[count+1].options[3];
  count += 1;
  modalTimeTitle.innerHTML = "Time remaining: " + timeLeft + "s";

  function startCountdown() {
    // 如果已经有一个倒计时在运行，先清除它
    if (countdownInterval) {
      clearInterval(countdownInterval);
      timeLeft = 20; // 重置倒计时初始时间
    }

    // 更新时间显示
    modalTimeTitle.innerHTML = "Time remaining: " + timeLeft + "s";

    // 开始新的倒计时
    countdownInterval = setInterval(function () {
      timeLeft--; // 时间减少1秒
      modalTimeTitle.innerHTML = "Time remaining: " + timeLeft + "s";
      if (timeLeft <= 0) {
        // 倒计时结束
        clearInterval(countdownInterval);
        // 这里可以添加倒计时结束后的逻辑
      }
    }, 1000);
  }

  // 假设有一个按钮，当点击时调用startCountdown函数

  startCountdown();
  // 获取用户选择的选项
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    if (options[i].classList.contains("selected")) {
      selectedOption = i + 1;
      break;
    }
  }

  if (selectedOption === null) {
    // 没有选择任何选项，弹出提示
    alert("请先选择一个选项");
  } else {
    var selectedAnswer = selectedOption - 1;
    var correctAnswer = parseInt(questions[count - 1].correct_index); // 将字符串形式的索引转换为整数
    if (count == 1) {
      correctAnswer = 0;
    }
    if (selectedAnswer === correctAnswer) {
      // 答案正确，弹出正确的模态框
      alert("Your answer is correct");
    } else {
      // 答案错误，弹出错误的模态框
      alert("Your answer is wrong");
    }
  }
}