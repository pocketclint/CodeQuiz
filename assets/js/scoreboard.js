var clearBtn = document.querySelector("#clear");

function scoreboard() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {
      return b.score - a.score;
    });

    highscores.forEach(function(score) {
        var liEl = document.createElement("li");
        liEl.textContent = score.initials + " Score: " + score.score;
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