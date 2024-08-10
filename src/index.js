function displayTemperature(response)
{let temperatureElement = document.querySelector("#current-temperature");
    let cityElement = document.querySelector("h1");
    let windElement = document.querySelector("#wind");
    let humidityElement = document.querySelector("#humidity");
    let descriptionElement = document.querySelector("#description");
    let temperature = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML= temperature;
    windElement.innerHTML= `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
    
}

function searchCity(city) {
     let apiKey = "8c3t8b68c39aceaa7e74616od00b0ef1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}


function searchSubmit(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-input");
 searchCity(searchInput.value)
   
}

function formatDate(date)
 {
let minutes = date.getMinutes().toString().padStart(2, "0");
let hours = date.getHours();
let dayIndex = date.getDay();

let days=[ 
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
    return `${days[dayIndex]} ${hours}:${minutes}`;

}

let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", searchSubmit);
    searchCity("Accra");

    let currentDateElement= document.querySelector("#current-date");
    let currentDate =  new Date();
    

    currentDateElement.innerHTML = formatDate(currentDate);
