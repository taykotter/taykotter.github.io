const requestURL = 'https://taykotter.github.io/WWD230/week13/temples.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    // temporary checking for valid response and data parsing

    const temples = jsonObject['temples'];

    for (let i = 0; i < temples.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let address = document.createElement('span');
      let city = document.createElement('span');

    
    
    
    }

        

        document.querySelector('div.event').appendChild(card);
});