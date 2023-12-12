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

   const html = `
   <div class="card">
      <h3 class="card-name">${dataObj.name}, ${dataObj.sys.country}</h3>
      <img class="card-image" src="icons/${
         dataObj.weather[0].icon
      }.png" alt="Weather Icon" />
      <p class="card-description">${dataObj.weather[0].main}, ${
      dataObj.weather[0].description
   }</p>
      <p class="card-temperature">Temperature: ${Math.round(
         dataObj.main.temp - 273.15
      )} &#8451;</p>
      <p class="card-humidity">Humidity: ${dataObj.main.humidity}</p>
      <p class="card-pressure">Pressure: ${dataObj.main.pressure} hPA</p>
      <p class="card-wind-speed">Wind speed: ${dataObj.wind.speed} m/s</p>
      <p class="card-wind-direction">Wind direction: ${
         dataObj.wind.deg
      }&#176;</p>
</div>
   `;

   cardContainer.insertAdjacentHTML("afterbegin", html);
}

// EVENT LISTENERS

formBtn.addEventListener("click", displayCard);
