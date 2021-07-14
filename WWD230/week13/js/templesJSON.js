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
      let website = document.createElement('p');
      let summary = document.createElement('p');


      h2.textContent = temples[i].name;
      address.textContent = "Address: " + temples[i].address1 + " " + temples[i].city + ", " + temples[i].state + ' '+  temples[i].zip;
      address.setAttribute("id", "address")
      picture.setAttribute('src', temples[i].imageurl);
      number.textContent = "Phone Number: " + temples[i].phone;
      number.setAttribute("id", "number");
      picture.setAttribute('alt', temples[i].name);
      summary.textContent = "About this temple: " + temples[i].summary;
      summary.setAttribute("id", "summary");
      website.textContent= "To see closures, COVID-regulations, and open times to make an appointment, go to this website: " + temples[i].website;
      website.setAttribute("id", "websiteLink");
     
      



      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(number);
      card.appendChild(picture);
      card.appendChild(website);
      

    
    
      document.querySelector('div.temples').appendChild(card);
    }

        

      
});