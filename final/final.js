const answers = [];
let secret = 0;

const button = document.getElementById("button");
const finishButton = document.getElementById("finish");
const firstInput = document.getElementById("answer1");
const secondInput = document.getElementById("answer2");
const thirdInput = document.getElementById("answer3");
const link = document.getElementById("link");

const riddlesElement = document.getElementById("riddle");
let riddleList = [];

finishButton.addEventListener("click", () => {
  if (firstInput.value == answers[0]) {
    firstInput.style.backgroundColor = "chartreuse";
    secret++;
  } else {
    firstInput.style.backgroundColor = "red";
  }
  if (secondInput.value == answers[1]) {
    secondInput.style.backgroundColor = "chartreuse";
    secret++;
  } else {
    secondInput.style.backgroundColor = "red";
  }
  if (thirdInput.value == answers[2]) {
    thirdInput.style.backgroundColor = "chartreuse";
    secret++;
  } else {
    thirdInput.style.backgroundColor = "red";
  }
  if (secret == 3) {
    link.style.backgroundColor = "cornflowerblue";
    link.textContent =
      "Your surprise!: \n https://www.youtube.com/watch?v=YQpLNCRIxWA";
  }
});

const displayRiddles = (riddles) => {
  const selectedIndices = [];

  while (selectedIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    if (!selectedIndices.includes(randomIndex)) {
      selectedIndices.push(randomIndex);
    }
  }

  // Create elements for the selected riddles
  selectedIndices.forEach((index) => {
    const riddle = riddles[index];
    const article = document.createElement("article");
    const h3Riddle = document.createElement("h3");
    const pHint = document.createElement("p");
    const pAnswer = document.createElement("p");
    const hintButton = document.createElement("button");
    hintButton.textContent = "Hint!";
    pHint.style.visibility = "hidden";

    hintButton.addEventListener("click", () => {
      pHint.style.visibility = "visible";
      hintButton.style.visibility = "hidden";
    });

    h3Riddle.textContent = riddle.riddle;
    pHint.textContent = riddle.hint;
    article.appendChild(h3Riddle);
    article.appendChild(pHint);
    article.appendChild(hintButton);
    riddlesElement.appendChild(article);
    answers.push(riddle.answer);
  });
};

const getRiddles = async () => {
  const response = await fetch("riddles.json");

  const data = await response.json();
  riddleList = data;
  displayRiddles(riddleList);
};

getRiddles();
