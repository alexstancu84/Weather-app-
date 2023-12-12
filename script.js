"use strict";
// VARIABLES
const API_KEY = "e0bab676e0439ec118848a2b2f2c064c";
const formBtn = document.querySelector(".form-btn");
const cardContainer = document.querySelector(".card-section");
const btnStore = document.querySelector(".btn-store");
const btnRemove = document.querySelector(".btn-remove");
const clearBtn = document.querySelector(".clear-btn");

// Local Storage display

displayStoredCards();

// FUNCTIONS

async function displayStoredCards() {
   const citiesStored = JSON.parse(localStorage.getItem("cities"));
   if (!citiesStored) return;
   citiesStored.forEach((city) => {
      fetchCity(city);
   });
}

async function fetchCity(city) {
   const API_SRC = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

   const data = await fetch(API_SRC);
   const dataObj = await data.json();

   const html = `
   <div class="card">
      <h3 class="card-name">${dataObj.name}, ${dataObj.sys?.country}</h3>
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
      <div class="card-btns">
               <button class="btn btn-store">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-6 h-6"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                     />
                  </svg>
               </button>
               <button class="btn btn-remove">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-6 h-6"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                     />
                  </svg>
               </button>
            </div>
</div>
   `;

   cardContainer.insertAdjacentHTML("afterbegin", html);
}

async function fetchData() {
   const city = document.querySelector("#city-input").value;
   const API_SRC = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
   document.querySelector("#city-input").value = "";

   const data = await fetch(API_SRC);
   const output = await data.json();

   return output;
}

async function displayCard(e) {
   e.preventDefault();

   const dataObj = await fetchData();

   const html = `
   <div class="card">
      <h3 class="card-name">${dataObj.name}, ${dataObj.sys?.country}</h3>
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
      <div class="card-btns">
               <button class="btn btn-store">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-6 h-6"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                     />
                  </svg>
               </button>
               <button class="btn btn-remove">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-6 h-6"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                     />
                  </svg>
               </button>
            </div>
</div>
   `;

   cardContainer.insertAdjacentHTML("afterbegin", html);
}

function removeCard(e) {
   if (e.target.closest(".btn-remove")) {
      const cityName = e.target
         .closest(".card")
         .querySelector(".card-name")
         .textContent.split(",")[0];

      const cityArrStored = JSON.parse(localStorage.getItem("cities"));

      if (cityArrStored) {
         const cityToRemoveIndex = cityArrStored.indexOf(cityName);

         cityArrStored.splice(cityToRemoveIndex, 1);

         const citiesArrString = JSON.stringify(cityArrStored);
         localStorage.setItem("cities", citiesArrString);
      }

      e.target.closest(".card").remove();
   }
}

function storeCard(e) {
   if (e.target.closest(".btn-store")) {
      const cityArrStored = JSON.parse(localStorage.getItem("cities"));

      const cityArr = [];
      const cityName = e.target
         .closest(".card")
         .querySelector(".card-name")
         .textContent.split(",")[0];

      if (cityArrStored && cityArrStored.includes(cityName)) return;

      cityArr.push(cityName);
      const citiesUpdateArr = cityArrStored
         ? [...cityArr, ...cityArrStored]
         : cityArr;

      const citiesArrString = JSON.stringify(citiesUpdateArr);

      localStorage.setItem("cities", citiesArrString);
   }
}

function clearHistory() {
   localStorage.clear();
}
// EVENT LISTENERS

formBtn.addEventListener("click", displayCard);
clearBtn.addEventListener("click", clearHistory);

cardContainer.addEventListener("click", removeCard);
cardContainer.addEventListener("click", storeCard);
