function displayTemperature(response)
{let temperatureElement = document.querySelector("#current-temperature");
    let cityElement = document.querySelector("h1");
    let temperature = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML= temperature;
}

function search(event){
    event.preventDefault();
    let searchInputElement= document.querySelector("#search-input");
    let city =  searchInputElement.value;
    let apiKey = "8c3t8b68c39aceaa7e74616od00b0ef1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
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
    searchForm.addEventListener("submit", search);

    let currentDateElement= document.querySelector("#current-date");
    let currentDate =  new Date();
    

    currentDateElement.innerHTML = formatDate(currentDate);
