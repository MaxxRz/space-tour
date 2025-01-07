import { changeBackground, changeBackgroundResize, transitionData } from './dataJson.js';


changeBackground('technology');
changeBackgroundResize('technology');


// obtenemos todos elementos que vamos a cambiar 
const technologyData = document.querySelectorAll('[data-change]');
// <ul> del listado 
let technologyList = document.querySelector('.technologyIdex');






// change de info con transition 
technologyList.addEventListener('click', async (event) => {
    
    
    let arrayData = {
        choisenItem: event.target,
        lsitOfItems: technologyList,
        transitionClassNameItems: 'technologyActiv',

        data: technologyData,
        page: 'technology'
    }

    transitionData(arrayData); 

});
