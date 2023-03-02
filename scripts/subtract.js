const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
let wrongAns = document.getElementById("wrongAnswer");
const audio = document.getElementById("myAudio");

let answer = 0;

function generateEquation() {
  let num1 = Math.ceil(Math.random() * 13);
  let num2 = Math.ceil(Math.random() * 13);
  let dummyAns1 = Math.ceil(Math.random() * 13);
  let dummyAns2 = Math.ceil(Math.random() * 13);

  if (dummyAns1 == dummyAns2) {
    dummyAns1 += 1;
  }

  let allAnswers = [];

  if (num1 > num2) {
    answer = num1 - num2;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
  } else {
    answer = num2 - num1;
    document.getElementById("num1").innerHTML = num2;
    document.getElementById("num2").innerHTML = num1;
  }

  allAnswers = [answer, dummyAns1, dummyAns2];

  // shuffle
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Used like so
  var arr = allAnswers;
  shuffle(arr);
  // end shuffle

  option1.innerHTML = allAnswers[0];
  option2.innerHTML = allAnswers[1];
  option3.innerHTML = allAnswers[2];
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    generateEquation();
    wrongAns.innerHTML = "";
  } else {
    audio.play();
    wrongAns.innerHTML = "Wrong Answer KID!";
  }
});
option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    generateEquation();
    wrongAns.innerHTML = "";
  } else {
    audio.play();
    wrongAns.innerHTML = "Wrong Answer KID!";
  }
});
option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    generateEquation();
    wrongAns.innerHTML = "";
  } else {
    audio.play();
    wrongAns.innerHTML = "Wrong Answer KID!";
  }
});

generateEquation();
