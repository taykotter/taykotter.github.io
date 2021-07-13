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
      let address = document.createElement('p');
      let number = document.createElement('p');
      let picture = document.createElement('img');


      h2.textContent = temples[i].name;
      h2.address = temples[i].address + " " + temples[i].city + " " + temples[i].state;
      picture.setAttribute('src', temples[i].imageurl);
      picture.setAttribute('alt', temples[i].name);



      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(number);
      card.appendChild(picture);

    
    
      document.querySelector('div.temples').appendChild(card);
    }

        

      
});