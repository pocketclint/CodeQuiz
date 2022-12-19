var clearBtn = document.querySelector("#clear");

function scoreboard() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.forEach(function(score) {
        var liEl = document.createElement("li");
        liEl.textContent = score.initials
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liEl);
    });
  }

function clearHS() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }

clearBtn.onclick = clearHS;

scoreboard();