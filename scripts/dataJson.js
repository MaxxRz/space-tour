
// obtener los datos JSON
async function getDataJson(page) {
    try {
        const response = await fetch("./assets/data.json");

        if (!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();
        // console.log(data);
        return data[page];

    } catch (error) {
        console.log('Error:', error);
    }
}



// cambiar background 
export function changeBackground(pageName) {    

    if (document.body.offsetWidth <= 480 && document.body.dataset.size != "sm") {
        document.body.dataset.size = "sm";
        document.body.style.backgroundImage = `url("./assets/${pageName}/background-${pageName}-mobile.jpg")`;
        
        return 
    } else if (document.body.offsetWidth > 480  && document.body.offsetWidth < 770 && document.body.dataset.size != "md") {
        document.body.dataset.size = "md";
        document.body.style.backgroundImage = `url("./assets/${pageName}/background-${pageName}-tablet.jpg")`;

        return;
    }  else if(document.body.offsetWidth >= 770  && document.body.dataset.size != "lg"){
        document.body.dataset.size = "lg";
        document.body.style.backgroundImage = `url("./assets/${pageName}/background-${pageName}-desktop.jpg")`;
    } 
}


export function changeBackgroundResize(pageName) {
    window.addEventListener('resize', event => {
        changeBackground(pageName);
    });
}


// exportamos la funcion que realizara el cambio de todo el contenido en cada ventana 
// se pasara un array  
/*     let arrayData = {
            choisenItem: >> se cargara dentro de un eventlistener dentro del ul aqui se igresa event.target
            lsitOfItems: >> contenedor <ul> de la lista 
            transitionClassNameItems: >> nombre de la clase identificar el item en la lista

            data: >> todos los elementos obtenidos a traves de un querySelectorAll con el data
            page: >> ingresaremos el nombre de la pagina para obtener la data 
        } 

*/

export async function transitionData(arrayData) {

    // valida que seleccionemos un boton y no fuera de ellos
    if (arrayData.choisenItem.nodeName != "BUTTON") return;

    // quita el valor activo actual y pone el nuevo item Activado
    arrayData.lsitOfItems.querySelectorAll('button').forEach(elementLi => {
        elementLi.classList.remove(arrayData.transitionClassNameItems);

        if (elementLi == arrayData.choisenItem) {
            elementLi.classList.add(arrayData.transitionClassNameItems);
        }
    });

    try {
        // obtenemos la data solicitada 
        let arrayDestinations = await getDataJson(arrayData.page);

        // recorre todos los elementos y transforma su clase
        // en el proceso cambia la data para posterior quitar la clase 
        arrayData.data.forEach(element => {

            element.classList.add('animationTransitionOpacity');

            setTimeout(() => {
                // se cambia la data del json con relacion al planeta elegido 
                // arrayData.choisenItem.dataset.change : nombre del data que cambiara
                // arrayData.choisenItem.dataset.number: el id para identificar en json 
                if (element.dataset.change != 'images') {
                    element.innerHTML = arrayDestinations[arrayData.choisenItem.dataset.number][element.dataset.change]
                } else {
                    element.src = arrayDestinations[arrayData.choisenItem.dataset.number][element.dataset.change].png;
                }
            }, 200);

            setTimeout(() => {
                element.classList.remove('animationTransitionOpacity');
            }, 200)
        });

    } catch (error) {
        console.error('Error al obtener el JSON:', error);
    }
}