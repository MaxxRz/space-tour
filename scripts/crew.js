import { changeBackground, changeBackgroundResize, transitionData } from './dataJson.js';


changeBackground('crew');
changeBackgroundResize('crew');

// obtenemos todos elementos que vamos a cambiar 
const crewData = document.querySelectorAll('[data-change]');
// li de planets nav
let crewList = document.querySelector('.crwesButtons');



// change de info con transition 
crewList.addEventListener('click', async (event) => {
    
    
    let arrayData = {
        choisenItem: event.target,
        lsitOfItems: crewList,
        transitionClassNameItems: 'crewButtonActiv',

        data: crewData,
        page: 'crew'
    }

    transitionData(arrayData); 

});
