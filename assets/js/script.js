//DOM elements
var beginBtn = document.querySelector("#begin");
var submitBtn = document.querySelector("#submit");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var timerEl = document.querySelector("#time")
var initialsEl = document.querySelector("#initials");

//Quiz elements
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function beginQuiz() {
  //add functionality to Begin button by changing visible element
  var homeEl = document.getElementById("home");
  homeEl.setAttribute("class", "hide");
  questionsEl.setAttribute("class", "display");
  
  //starts timer
  timerId = setInterval(countdown, 1000);
  timerEl.textContent = time;
    }

function countdown() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    endQuiz();
  }

  nextQuestion();
}

// prompts question and answer choices
function nextQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById("question");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    choiceBtn.onclick = questionClick;

    choicesEl.appendChild(choiceBtn);
  });
}

// determines what happens whether right/wrong answer is chosen
function questionClick() {
   if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;

    if (time <= 0) {
      time = 0;
      timerEl.textContent = time;
    }
  }

    currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    nextQuestion();
  }
}

// finalizes results
function endQuiz() {
  clearInterval(timerId);
  
  questionsEl.setAttribute("class", "hide")

  var endQuizEl = document.getElementById("end")
  endQuizEl.setAttribute("class", "display")

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
}

// submits results to scoreboard page
function submitHS() {
  var initials = initialsEl.value;
  
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

      var currentScore = {
        score: time,
        initials: initials.toUpperCase()
      };
    
    highscores.push(currentScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
    
}

// in case user hits Enter button instead of clicking Submit
function enterKey(event) {
  if (event.key === "Enter") {
    submitHS();
  }
}

beginBtn.onclick = beginQuiz;
submitBtn.onclick = submitHS;
initialsEl.onkeyup = enterKey;