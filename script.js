"use strict";
// VARIABLES
const API_KEY = "e0bab676e0439ec118848a2b2f2c064c";
const formBtn = document.querySelector(".form-btn");
const cardContainer = document.querySelector(".card-section");

// FUNCTIONS

async function fetchData() {
   const city = document.querySelector("#city-input").value;
   const API_SRC = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

   const data = await fetch(API_SRC);
   const output = await data.json();
   
   return output;
}

async function displayCard(e) {
   e.preventDefault();

   const dataObj = await fetchData();
   console.log(dataObj);
   
   const html = `<div class="card"></div>`;
   cardContainer.insertAdjacentHTML("afterbegin", html);
}

// EVENT LISTENERS

formBtn.addEventListener("click", displayCard);
