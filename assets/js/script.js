var beginBtn = document.querySelector("#begin");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time")

var time = 150;
var timerId;

function beginQuiz() {
  var homeEl = document.getElementById("home");
  homeEl.setAttribute("class", "hide");
  questionsEl.setAttribute("class", "start");
  timerId = setInterval(countdown, 1000);
  timerEl.textContent = time;
    }

function countdown() {
  time--;
  timerEl.textContent = time;
}

beginBtn.onclick = beginQuiz;