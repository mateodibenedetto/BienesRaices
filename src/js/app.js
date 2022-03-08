// Menu De Hamburguesa

document.addEventListener('DOMContentLoaded', () => {
    addEventListeners();
});

function addEventListeners () {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);

}

function navegacionResponsive () {
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar');
}


// Leer preferencias del usuario si es que ya tiene el navegador en dark mode o no
const prefereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const prefereLightMode = window.matchMedia('(prefers-color-scheme: light)');


// if(prefereDarkMode.matches) {
//     document.body.classList.add('dark');
//     // btnSwitch.classList.remove('active');
// } else {
//     document.body.classList.remove('dark');
//     // btnSwitch.classList.add('active');  
// }

const btnSwitch = document.querySelector('#switch');

// Si cambia el dark mode del navegador mientras esta en la pagina este codigo hace que el sitio se de cuenta y cambie automaticamente
prefereDarkMode.addEventListener('change', () => {
    if(prefereDarkMode.matches) {
        btnSwitch.classList.remove('active');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        btnSwitch.classList.add('active');        
    }
    console.log(prefereDarkMode);
});


// Boton dark mode 
btnSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

