const apiURLwashington = "https://api.openweathermap.org/data/2.5/weather?id=4359760&appid=a1ae1eb12eb3ea4848cc295aeda6d43d&units=imperial";
fetch(apiURLwashington)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('Kensington').textContent = "Current Temperature: " + jsObject.main.temp +"\u00B0F";
    document.getElementById('MD').textContent = "Currently: " + jsObject.weather[0].main;
    
   
    
  });

  const apiURLphila = "https://api.openweathermap.org/data/2.5/weather?id=4560349&appid=a1ae1eb12eb3ea4848cc295aeda6d43d&units=imperial";
fetch(apiURLphila)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('Philadelphia').textContent = "Current Temperature: " + jsObject.main.temp +"\u00B0F";
    document.getElementById('PA').textContent = "Currently: " + jsObject.weather[0].main;
  });

  const apiURLapex = "https://api.openweathermap.org/data/2.5/weather?id=4452808&appid=a1ae1eb12eb3ea4848cc295aeda6d43d&units=imperial";
  fetch(apiURLapex)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('Apex').textContent = "Current Temperature: " + jsObject.main.temp +"\u00B0F";
    document.getElementById('NC').textContent = "Currently: " + jsObject.weather[0].main;
    });

    const apiURLny = "https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=a1ae1eb12eb3ea4848cc295aeda6d43d&units=imperial";
  fetch(apiURLny)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('New York').textContent = "Current Temperature: " + jsObject.main.temp +"\u00B0F";
      document.getElementById('NY').textContent = "Currently: " + jsObject.weather[0].main;
    });


