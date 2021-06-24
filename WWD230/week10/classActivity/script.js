import {jsData} from "nobelData.js";

const loadJsonData = async () => { //async makes the funciton have a await part in it
    const data = await fetch('nobel.json').then((response) => response.json()); // await makes that part of the code wait, 
    console.log(data.prizes[2].laureates[0].firstname);
    for (p of data.prizes) {
        if(parseInt(p.year) > 2000) {
            let surname =  p.laureates[0].surname
            if(surname && surname.startsWith('C')) {
        console.log(p);
            }
    }
    }
}

function loadJsData()  {
    console.log(jsData);
};

//loadJsonData();
loadJsData();