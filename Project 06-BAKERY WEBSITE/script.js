let menuIcon = document.querySelector(".menu");

let mobileMenu = document.getElementById("mobile-menu");
let searchicon = document.querySelector(".searchicon");
let searchinput = document.querySelector(".searchinput");
let carticon =document.querySelector(".carticon");
let cart_items_container =document.querySelector(".cart-items-container");
let fa_xmarks = document.querySelector(".fa-xmark");
let cartItems = document.querySelectorAll(".cart-items");

menuIcon.addEventListener("click", () => {
    mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
});
searchicon.addEventListener("click", () => { 

    if( cart_items_container.classList.contains("show")){ 
        cart_items_container.classList.remove("show")
    }

    searchinput.classList.toggle("active");
});


carticon.addEventListener("click", () => { 
    console.log("Cart icon clicked"); // Add this line for debugging

    if(searchinput.classList.contains("active")){ 
        searchinput.classList.remove("active");
    }

    cart_items_container.classList.toggle("show");  // This should toggle the 'show' class
});
