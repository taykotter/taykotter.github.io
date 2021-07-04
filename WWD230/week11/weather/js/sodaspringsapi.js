const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=a1ae1eb12eb3ea4848cc295aeda6d43d&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('weather').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;
    
  });



  const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=a1ae1eb12eb3ea4848cc295aeda6d43d&units=imperial";
  fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    const weatherHead = document.getElementById("weatherHead");
    const weatherData = document.getElementById("weatherData")
    weatherData.innerHTML = '';
    console.log(jsObject);
  for ( var i=0; i <  jsObject.list.length  ; i++) {
    if (jsObject.list[i].dt_txt.includes("18:00:00")) {
    weatherData.innerHTML += `<td> <img src="https://openweathermap.org/img/wn/${jsObject.list[i].weather[0].icon}@2x.png">
                                            ${jsObject.list[i].main.temp} °F
                                        </td>`;

let date = new Date(jsObject.list[i].dt * 1000);
let day = date.getDay();

        switch (day) {
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
        }

weatherHead.innerHTML += `<th> ${day}</th>`
    }
  }
});