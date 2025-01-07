
function cargarContenido() {
    return fetch('componentNav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.componentNav').innerHTML = data;
        });
}


cargarContenido()
    .then(element => {
        let btnBurger = document.getElementById('btnBurger');
        let menu = document.querySelector('.menu');
        let menuTop = document.querySelector('.navIcons');




        btnBurger.addEventListener('click', () => {
            menu.classList.toggle('menuActiv');
            btnBurger.classList.toggle('btnBurgerActiv');
        });   
        

        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) { // Cambia el valor según necesites
                menuTop.classList.add('scroll-active');
            } else {
                menuTop.classList.remove('scroll-active');
            }
        });

    });




