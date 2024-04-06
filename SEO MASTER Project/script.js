





let nav_list_item = document.querySelector(".nav-list-item");

let menu_icon = document.querySelector(".menu-icon");


menu_icon.addEventListener("click", () => {
    console.log('Menu icon clicked');
    nav_list_item.classList.toggle("active")

});
