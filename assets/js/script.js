var beginBtn = document.querySelector("#begin");
var submitBtn = document.querySelector("#submit");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time")
var initialsEl = document.querySelector("#initials");

var time = 1;
var timerId;

function beginQuiz() {
  var homeEl = document.getElementById("home");
  homeEl.setAttribute("class", "hide");
  questionsEl.setAttribute("class", "display");
  timerId = setInterval(countdown, 1000);
  timerEl.textContent = time;
    }

function countdown() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerId);
  
  questionsEl.setAttribute("class", "hide")

  var endQuizEl = document.getElementById("end")
  endQuizEl.setAttribute("class", "display")
}

function submitHS() {
  var initials = initialsEl.value;
  
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

      var currentScore = {
        score: time,
        initials: initials
      };
    

    highscores.push(currentScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
    
}

beginBtn.onclick = beginQuiz;
submitBtn.onclick = submitHS;