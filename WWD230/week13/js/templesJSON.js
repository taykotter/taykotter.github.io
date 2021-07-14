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
      let website = document.createElement('a');


      h2.textContent = temples[i].name;
      address.textContent = temples[i].address1 + " " + temples[i].city + " " + temples[i].state;
      picture.setAttribute('src', temples[i].imageurl);
      picture.setAttribute('alt', temples[i].name);
      website.setAttribute('href', temples[i].website);
      website.textcontent = "Becaue of COVID-19, you must schedule appointments online. Here's this link to this temple's site!"
      



      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(number);
      card.appendChild(picture);
      card.appendChild(website);
      

    
    
      document.querySelector('div.temples').appendChild(card);
    }

        

      
});