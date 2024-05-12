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
    var nextButton = document.getElementById("Name_button_1");
    nextButton.style.display = "block";
    nextButton.innerHTML = "Continue";
  }
}

function selectOption(option) {
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
var timeLeft = 5; // 倒计时初始时间
var countdownInterval; // 存储setInterval的返回值
var score = 0;
var selectedOption = null; // 初始化为null
var startTime;
var timeUsed;

var button = document.getElementById('Name_button_1');


function handleTimeout() {
  // 处理超时逻辑
  if (count < 10) {
    if (selectedOption === null) {
      selectedOption = 0; // 将选项设置为默认错误的选项
      judge();
    } else {
      alert("Time out!");
      var question = document.getElementById("question");
      var modalQuestionTitle = document.getElementById("modal_title_question");
      var button = document.getElementById("Name_button_1");
      var option_1 = document.getElementById("option_1");
      var option_2 = document.getElementById("option_2");
      var option_3 = document.getElementById("option_3");
      var option_4 = document.getElementById("option_4");
      question.innerHTML = questions[count + 1].question;
      button.innerHTML = "Submit";
      modalQuestionTitle.innerHTML = `Question ${count + 1}: `;
      option_1.innerHTML = questions[count + 1].options[0];
      option_2.innerHTML = questions[count + 1].options[1];
      option_3.innerHTML = questions[count + 1].options[2];
      option_4.innerHTML = questions[count + 1].options[3];
      count += 1;
      startCountdown();
    }
  } else {

    var endTime = new Date(); // 获取当前时间 第10个问题超时了的逻辑在这里改
    var timeTaken = (endTime - startTime) / 1000; // 计算经过的秒数
    count += 1;
    button_1 = document.getElementById("Name_button_1");
    button_1.innerHTML = "Check the leaderboard";
    button_1.style.width = "30%";
    alert("Your answer is wrong.\n You completed all the questions!\n You got " + score + " right out of 10.\n You used " + timeTaken + " s.");
    alert("Completed.")
    timeUsed = timeTaken;
  }
}

function startCountdown() {
  // 如果已经有一个倒计时在运行，先清除它
  if (countdownInterval) {
    clearInterval(countdownInterval);
    timeLeft = 5; // 重置倒计时初始时间
  }

  // 更新时间显示
  document.getElementById("modal_title_time").innerHTML = "Time remaining: " + timeLeft + "s";

  // 开始新的倒计时
  countdownInterval = setInterval(function () {
    timeLeft--; // 时间减少1秒
    document.getElementById("modal_title_time").innerHTML = "Time remaining: " + timeLeft + "s";
    if (count <= 10 && timeLeft <= 0) {
      clearInterval(countdownInterval);
      handleTimeout(); // 调用超时处理函数
    } else {
      if (count == 11) {
        timeLeft = 0;
      }
    }
  }, 1000);
}

function nextQuestion(event) {
  if (count < 10) {
    var question = document.getElementById("question");
    var modalQuestionTitle = document.getElementById("modal_title_question");
    var modalTimeTitle = document.getElementById('modal_title_time');
    var button = document.getElementById("Name_button_1");
    var option_1 = document.getElementById("option_1");
    var option_2 = document.getElementById("option_2");
    var option_3 = document.getElementById("option_3");
    var option_4 = document.getElementById("option_4");
    question.innerHTML = questions[count + 1].question;
    button.innerHTML = "Submit";
    modalQuestionTitle.innerHTML = `Question ${count + 1}: `;
    option_1.innerHTML = questions[count + 1].options[0];
    option_2.innerHTML = questions[count + 1].options[1];
    option_3.innerHTML = questions[count + 1].options[2];
    option_4.innerHTML = questions[count + 1].options[3];
    count += 1;
    modalTimeTitle.innerHTML = "Time remaining: " + timeLeft + "s";

    // 假设有一个按钮，当点击时调用startCountdown函数
    startCountdown();
    judge();
  } else {
    if (count == 10) {
      if (selectedOption === null) {
        // 没有选择任何选项，弹出提示
        alert("请先选择一个选项");
      } else {
        var endTime = new Date(); // 获取当前时间
        var timeTaken = (endTime - startTime) / 1000; // 计算经过的秒数
        var selectedAnswer = selectedOption - 1;
        var correctAnswer = parseInt(questions[count - 1].correct_index); // 将字符串形式的索引转换为整数
        if (selectedAnswer === correctAnswer) { // 第10个问题回答后的代码在这里改
          score += 1;
          count += 1;
          button_1 = document.getElementById("Name_button_1");
          button_1.innerHTML = "Check the leaderboard";
          button_1.style.width = "30%";
          alert("Your answer is correct.\n You completed all the questions!\n You got " + score + " right out of 10.\n You used " + timeTaken + " s.");
          alert("Completed.")
        } else {
          // 答案错误，弹出错误的模态框
          count += 1;
          button_1 = document.getElementById("Name_button_1");
          button_1.innerHTML = "Check the leaderboard";
          button_1.style.width = "30%";
          alert("Your answer is wrong.\n You completed all the questions!\n You got " + score + " right out of 10.\n You used " + timeTaken + " s.");
          alert("Completed.")
        }
      }
      timeUsed = timeTaken;
    } else { //排行榜的显示在这里改
      var inputElement = document.getElementById("Name_input");
      var inputValue = inputElement.value;
      var userName = inputValue;
      var finalScore = score.toString(); // 转换为字符串
      var finalTime = timeUsed.toString(); // 转换为字符串
      // 创建一个包含得分数据的对象
      var scoreData = {
        userName: userName,
        finalScore: finalScore,
        finalTime: finalTime
      };

      // 发送POST请求到服务器
      fetch('/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(scoreData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // 请求成功的处理逻辑
          console.log(data);
        })
        .catch(error => {
          // 请求失败的处理逻辑
          console.error('There has been a problem with your fetch operation:', error);
        });
      // 获取模态框元素
      var modal = document.getElementById("modal");
      modal.style.display = "none";
      var leaderboard_content = document.getElementById("leaderboard");
      leaderboard_content.style.display = "flex";
      // 隐藏模态框
      var leaderboard_table = document.getElementById('table_1');
      var tbody = leaderboard_table.getElementsByTagName('tbody')[0];

      // 创建新的行
      var newRow = document.createElement('tr');

      // 创建包含数据的单元格
      var userNameCell = document.createElement('td');
      userNameCell.textContent = userName; // 假设 userName 是一个变量，包含要添加的用户名

      var finalScoreCell = document.createElement('td');
      finalScoreCell.textContent = finalScore; // 假设 finalScore 是一个变量，包含要添加的最终得分

      var finalTimeCell = document.createElement('td');
      finalTimeCell.textContent = finalTime; // 假设 finalTime 是一个变量，包含要添加的最终时间

      // 将单元格添加到行
      newRow.appendChild(userNameCell);
      newRow.appendChild(finalScoreCell);
      newRow.appendChild(finalTimeCell);

      // 将行添加到表格的 tbody 中
      tbody.appendChild(newRow);
      fetch('/leaderboard', {
        method: 'GET',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // 处理获取到的数据
          var leaderboard_table = document.getElementById('table_1');
          var tbody = leaderboard_table.getElementsByTagName('tbody')[0];
          
          for (let i = 0; i < data.length; i++) {
            data.sort(function(a, b) {
              // 比较finalScore，降序
              if (parseInt(a.finalScore) > parseInt(b.finalScore)) {
                  return -1;
              }
              if (parseInt(a.finalScore) < parseInt(b.finalScore)) {
                  return 1;
              }
              // 如果finalScore相同，比较finalTime，升序
              return parseFloat(a.finalTime) - parseFloat(b.finalTime);
          });
            const userName = data[i].userName;
            const finalScore = data[i].finalScore;
            const finalTime = data[i].finalTime;
      
            // 创建新的行
            var newRow = document.createElement('tr');
      
            // 创建包含数据的单元格
            var userNameCell = document.createElement('td');
            userNameCell.textContent = userName;
      
            var finalScoreCell = document.createElement('td');
            finalScoreCell.textContent = finalScore;
      
            var finalTimeCell = document.createElement('td');
            finalTimeCell.textContent = finalTime;
      
            // 将单元格添加到行
            newRow.appendChild(userNameCell);
            newRow.appendChild(finalScoreCell);
            newRow.appendChild(finalTimeCell);
      
            // 将行添加到表格的 tbody 中
            tbody.appendChild(newRow);
          }
        })
  .catch(error => {
    console.error('Failed to fetch leaderboard:', error);
  });
    }
  }

  function judge() {
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
        startTime = new Date();
        return;
      } else if (selectedAnswer === correctAnswer) {
        // 答案正确，弹出正确的模态框
        alert("Your answer is correct");
        score += 1;
      } else {
        // 答案错误，弹出错误的模态框
        alert("Your answer is wrong");
      }
    }
  }
}

function hideModal() {
  modal.style.display = "none";
}