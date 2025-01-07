








/* Destination Data */ 

let listPlanet = document.querySelector('.planetsNames');
/* 
listPlanet.addEventListener('click', (event) => {
    let planet = event.target;
    
    if(planet.tagName == "BUTTON"){

        let items = listPlanet.querySelectorAll('button');
        for(let item of items){
            item.classList.remove('btnPlanetActiv');
        }
        planet.classList.add('btnPlanetActiv');

        let dataChangePlanet = [
            {
                nameClass: '.planet',
                nameFunction: changePlanetImg,
            },
            {
                nameClass: '.planetDescription',
                nameFunction: changePlanetDescription,
            },
            {
                nameClass: '.planetDistance',
                nameFunction: changePlanetData,
            },
            {
                nameClass: '.plaplanetTravelnet',
                nameFunction: changePlanetData2,
            },
        ]
        
        dataChangePlanet.forEach(element => {
            functionTransition('destinations',planet.dataset.number, element.nameClass, element.nameFunction)
        });
    }
});
 */
const changePlanetData = (nodeElement, data) =>{
    const distancePlanet = nodeElement.querySelector('p');

    distancePlanet.innerHTML = data.distance; 
}
const changePlanetData2 = (nodeElement, data) =>{
    const travelPlanet = nodeElement.querySelector('p');

    travelPlanet.innerHTML = data.travel; 
}
const changePlanetDescription = (nodeElement, data) => {
    const namePlanet = nodeElement.querySelector('h2');
    const textPlanet = nodeElement.querySelector('p');

    namePlanet.innerHTML = data.name;
    textPlanet.innerHTML = data.description;
}
const changePlanetImg = (nodeElement, data) => {
    // crea el elemento IMG y la agrega 
    nodeElement.src = data.images.png;
    nodeElement.alt = data.name;
}



/* Crew Data */ 
let buttonsCrew = document.querySelectorAll('.crwesButtons button');

/* 
buttonsCrew.forEach( button => {
    button.addEventListener("click", event => {

        // validamos si estamos dando click al btn ya activo 
        if(event.target.classList.contains('crewButtonActiv')){
            return;
        }

        // limpiamos y agregamos clase a btn seleccionado 
        for(let button of buttonsCrew){
            button.classList.remove('crewButtonActiv');
        }
        event.target.classList.add('crewButtonActiv')

        let dataChangeCrew = [
            {
                nameClass: '.crewsNames ',
                nameFunction: changeNameCrew,
            },
            {
                nameClass: '.crewsDescription ',
                nameFunction: changeCrewsDescription,
            },
            {
                nameClass: '.crewsImage ',
                nameFunction: changeCrewImage,
            },
        ];

        dataChangeCrew.forEach(element => {
            functionTransition('crew',button.dataset.number, element.nameClass, element.nameFunction)
        });
        
    });
});
 */

const changeNameCrew = (nodeElement, data) => {
    let role = nodeElement.querySelector('span');
    let name = nodeElement.querySelector('h3');

    role.innerHTML = data.role;
    name.innerHTML = data.name;
}
const changeCrewsDescription = (nodeElement, data) => {
    let bio = nodeElement.querySelector('p');

    bio.innerHTML = data.bio;
}
const changeCrewImage = (nodeElement, data) => {
    let images = nodeElement.querySelector('img');

    images.src = data.images.png;
    img.alt = data.name;
}







// page:  nombre de la pagina acutal 
// indexData: indice del elemento a mostrar
// nameContainer: nombre de la clase donde se ejecutara
// functionEvent: funcion que realiza toda la modificacion 

const functionTransition = (page,indexData, nameContainer, functionEvent) => {
    getDataJson(page).then(data => {
        
        // obtiene el contenedor del elemento y el que estaba aneteriormente
        const containerData = document.querySelector(nameContainer);
        const oldElementData = containerData.firstElementChild;

        // se le da la animacion de transicion
        containerData.classList.add('animationTransitionOpacity');
        
        // realiza el cambio a media transicion
        setTimeout(() => {
            // se pasa la funcion que se ejecutara con los parametros 
            // el elemento que ya se encuentra y va a ser cambiado
            // y la informacion nueva
            functionEvent(oldElementData, data[indexData]);

            // 
            

        }, 200);

        setTimeout(() => {
            containerData.classList.remove('animationTransitionOpacity');
        }, 500);
        
    });
}




// obtener los datos JSON
async function getDataJson(page) {
    try{
        const response = await fetch("assets/data.json")

        if(!response.ok){
            throw new Error('Error');
        }

        const data = await response.json();
        // console.log(data);

        return data[page];
    } catch(error){
        console.log('Error:', error);
    }
}
