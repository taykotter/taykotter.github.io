const apiURLwashington = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a1ae1eb12eb3ea4848cc295aeda6d43d&units=imperial";
fetch(apiURLwashington)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('Kensington').textContent = 
    
  });