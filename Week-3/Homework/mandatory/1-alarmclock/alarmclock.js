function setAlarm() {
  let second = parseInt(document.getElementById("alarmSet").value);
  let timeRem = document.getElementById("timeRemaining");
  let id = setInterval(() => {
    if (second <= 0) {
      timeRem.innerText = "alarm";
      playAlarm();
      clearInterval(id);
    } else {
      timeRem.innerText = `Time Remaining: ${second}`;
      second = second - 1;
    }

  }, 1000);
}





// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;