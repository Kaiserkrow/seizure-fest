function start() {
  let time = document.getElementById("timer");
  let duration = document.getElementById("duration").value;
  let startBtn = document.getElementById("start");
  let colorChangeTime = document.getElementById("rgb-duration").value;
  let allText = document.getElementsByClassName("text");
  console.log(allText);
  if (duration == "" || colorChangeTime == "") {
    alert("An input cannot be empty");
  } else if (duration < 0 || colorChangeTime < 0) {
    alert("An input cannot be negative");
  } else if (duration == 0 || colorChangeTime == 0) {
    alert("An Input cannot be zero");
  } else {
    let countDown = setInterval(function () {
      startBtn.setAttribute("disabled", true);
      time.textContent = duration;
      duration--;

      if (duration < 0) {
        clearInterval(countDown);
        startBtn.removeAttribute("disabled");
      }
    }, 1000);
    let colorChange = setInterval(function () {
      let r = Math.floor(Math.random() * 255).toString(10);
      let g = Math.floor(Math.random() * 255).toString(10);
      let b = Math.floor(Math.random() * 255).toString(10);
      document.body.style.backgroundColor = `rgb(${r} ,${g} , ${b})`;
      document.getElementById("color-rgb").textContent = `rgb(${r},${g},${b})`;
      let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

      if (luma < 100) {
        for (let i = 0; i < allText.length; i++) {
          allText[i].style.color = "white";
        }
      } else {
        for (let i = 0; i < allText.length; i++) {
          allText[i].style.color = "black";
        }
      }

      if (duration < 0) {
        clearInterval(colorChange);
      }
    }, colorChangeTime);
  }
}
