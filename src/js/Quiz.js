function learn_hover(obj) {
  obj.innerHTML = "Let's start it! >>"
}

function learn_hover_out(obj) {
  obj.innerHTML = "Let's start it!"
}

function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function updateModalContent(event) {
  event.preventDefault();
  var name = document.getElementById("Name_input").value;
  if (name === "") {
    alert("Please enter your name.");
  } else {
    var modalTitle = document.getElementById("modal_title");
    modalTitle.innerText = "Question 1: ";
    modalTitle.style.justifyContent = "left";

    var questionContent = "Here is the question content";

    var questionParagraph = document.createElement("p");
    questionParagraph.innerText = questionContent;
    modalTitle.insertAdjacentElement("afterend", questionParagraph);
    var option = document.getElementById("options_container");
    option.style.display = "block";
    var input_square = document.getElementById("name_form");
    input_square.style.display = "none";
    var remind = document.getElementById("reminder");
    remind.style.display = "none";
    modalTitle.style.margin = "0%";
    var button_next = document.getElementById("Name_button_1");
    button_next.style.display = "block";
  }
}

function selectOption(option) {
  selectedOption = option;
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    if (i + 1 === option) {
      options[i].classList.add("selected");
    } else {
      options[i].classList.remove("selected");
    }
  }
}