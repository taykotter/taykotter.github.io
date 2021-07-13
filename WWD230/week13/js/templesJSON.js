const requestURL = 'https://taykotter.github.io/WWD230/week13/temples.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    
    const events = jsonObject.towns[6].events;

        let card = document.createElement('section');
        let event0 = document.createElement('p');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');



        event0.textContent = events[0];
        event1.textContent = events[1];
        event2.textContent = events[2];

        card.appendChild(event0);
        card.appendChild(event1);
        card.appendChild(event2);

        document.querySelector('div.event').appendChild(card);
});