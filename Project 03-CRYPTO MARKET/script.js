




let list_item = document.querySelector(".list-item");
let menu_icon = document.querySelector(".menu-icon")

menu_icon.addEventListener('click', () =>{
    console.log("menu icon Clicked");
    list_item.classList.toggle("active");
})
