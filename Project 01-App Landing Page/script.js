let nav_menu_icon = document.querySelector(".nav-menu-icon");
let navlist = document.querySelector(".navlist");


nav_menu_icon.addEventListener('click', () => { 
    console.log('Menu icon clicked');
    navlist.classList.toggle('v-class');
});
