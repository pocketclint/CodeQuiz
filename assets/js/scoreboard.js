var clearBtn = document.querySelector("#clear");

// displays scoreboard
function scoreboard() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // ordered by highest score
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });

    // creates new <li> for each submission
    highscores.forEach(function(score) {
        var liEl = document.createElement("li");
        liEl.textContent = score.initials + " Score: " + score.score;
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liEl);
    });
  }

// clears scoreboard
function clearHS() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }

clearBtn.onclick = clearHS;

scoreboard();