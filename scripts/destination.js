import { changeBackground, changeBackgroundResize, transitionData } from './dataJson.js';


changeBackground('destination');
changeBackgroundResize('destination');


// obtenemos todos elementos que vamos a cambiar 
const planetData = document.querySelectorAll('[data-change]');
// li de planets nav
let listPlanet = document.querySelector('.planetsNames');






// change de info con transition 
listPlanet.addEventListener('click', async (event) => {
    
    
    let arrayData = {
        choisenItem: event.target,
        lsitOfItems: listPlanet,
        transitionClassNameItems: 'btnPlanetActiv',

        data: planetData,
        page: 'destinations'
    }

    transitionData(arrayData); 

});


