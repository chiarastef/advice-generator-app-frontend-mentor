const adviceNum = document.getElementById("adviceNum");
const adviceText = document.getElementById("adviceText");
const btn = document.getElementById("btn");

generateAdviceText();

function generateAdviceText() {
  //Advice slip API: https://api.adviceslip.com/
  const apiUri = "https://api.adviceslip.com/advice";
  fetch(apiUri)
    .then(function (response) {
      const data = response.json();
      return data;
    })
    .then(function (data) {
      adviceNum.innerText = data.slip.id;
      adviceText.innerHTML = `<q>${data.slip.advice}</q>`;
    });
}

btn.addEventListener("click", generateAdviceText);
