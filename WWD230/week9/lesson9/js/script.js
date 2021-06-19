function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

var date = new Date();
var nummonth = date.getMonth();
const month = date.toLocaleString('default', { month: 'long' });
var numberDay = date.getDate();
var day = date.getDay();
var weekday = date.toLocaleString("default", { weekday: "long" })
var year = date.getFullYear();
var todayDate = weekday + ', ' + numberDay  + ' ' + month + ' '+ year;

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

     const towns = jsonObject['towns'];
     towns.splice(1,1);
     towns.splice(2,3);

    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let data = document.createElement('div')
        let motto = document.createElement('p');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        let picture = document.createElement('img');
        
        
        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = "Year Founded: "+ towns[i].yearFounded;
        pop.textContent = "Population: "+ towns[i].currentPopulation;
        rain.textContent = "Average Rain Fall: "+ towns[i].averageRainfall;
        picture.setAttribute('src', towns[i].photo);
        picture.setAttribute('alt', towns[i].name);
       
        
        data.appendChild(h2);
        data.appendChild(motto);
        motto.setAttribute("class", "motto")
        data.appendChild(year);
        data.appendChild(pop);
        data.appendChild(rain);
        
        data.setAttribute("class", "data");
        card.appendChild(data);
        card.appendChild(picture);
        
        
        document.querySelector('div.cards').appendChild(card);
  }
});
