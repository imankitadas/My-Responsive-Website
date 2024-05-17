let searchicon = document.querySelector(".searchicon");
let searchinput = document.querySelector(".searchinput");
let carticon =document.querySelector(".carticon");
let cart_items_container =document.querySelector(".cart-items-container");
let fa_xmarks = document.querySelector(".fa-xmark");
let cartItems = document.querySelectorAll(".cart-items");


searchicon.addEventListener("click", () => { 
    // if( cart_items_container.classList.contains("show")){ 
    //     cart_items_container.classList.remove("show")
    // }
    searchinput.classList.toggle("active");
});


carticon.addEventListener("click", () => { 
    // if(searchinput.classList.contains("active")){ 
    //     searchinput.classList.remove("active");
    // }
    cart_items_container.classList.toggle("show");

})


