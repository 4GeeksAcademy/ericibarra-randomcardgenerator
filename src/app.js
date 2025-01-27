/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

setInterval(updateCounter, 1000);

let countdown = 0;

function updateCounter() {

  if (countdown <= 0) {
    countdown = 10;
    generateCard();
  }

  document.getElementById('counter').innerText = countdown;
  countdown--;

}

document.getElementById('newCard').onclick = function () {
  generateCard();
};

function generateCard() {
  //write your code here

  let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let randomCardNumber = Math.floor(Math.random() * number.length);
  let randomSuitNumber = Math.floor(Math.random() * 4);

  let numberSuit = document.querySelector("#cardNumber");
  numberSuit.innerHTML = number[randomCardNumber];

  document.getElementById("suit").innerHTML = `${generateIcon(randomSuitNumber)}`;

};

function generateIcon(index) {
  switch (index) {
    case 0:
      return `<div class="diamonds-icon"></div>`;
    case 1:
      return `<div class="hearts-icon"></div>`;
    case 2:
      return `<div class="spades-icon"></div>`;
    case 3:
      return `<div class="clubs-icon"></div>`;
  }
}
