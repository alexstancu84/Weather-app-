"use strict";
// VARIABLES
const API_KEY = "e0bab676e0439ec118848a2b2f2c064c";
const formBtn = document.querySelector(".form-btn");
const cardContainer = document.querySelector(".card-section");

// FUNCTIONS

function fetchData() {
   const city = document.querySelector("#city-input").value;
   const API_SRC = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

   console.log(city);
   // console.log(API_SRC);

   return fetch(API_SRC)
      .then((response) => response.json())
      .then((responseJSON) => console.log(responseJSON));
}

function displayCard(e) {
   e.preventDefault();

   const dataObj = fetchData().then((data) => data);
   const html = "<p>meow</p>";
   console.log(dataObj);
   cardContainer.insertAdjacentHTML("afterbegin", html);
}

// EVENT LISTENERS

formBtn.addEventListener("click", displayCard);
