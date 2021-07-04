const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  
    
    const events = jsonObject.towns[2].events;

        let card = document.createElement('section');
        let event0 = document.createElement('p');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');



        event0.textContent = events[0];
        event1.textContent = events[1];
        event2.textContent = events[2];
        event3.textContent = events[3];


        card.appendChild(event0);
        card.appendChild(event1);
        card.appendChild(event2);
        card.appendChild(event3);

        document.querySelector('div.event').appendChild(card);
});