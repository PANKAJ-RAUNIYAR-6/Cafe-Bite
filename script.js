//hamburger btn
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const lgn = document.querySelector(".login");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active"); //click on toggle the open menu
});

//learn more btn click the galley open
let gall=document.getElementById("learn-more");
gall.addEventListener("click", function(){
    document.getElementById("abt-gallery").scrollIntoView({ 
        behavior: "smooth" 
    });
});

//----------------------------------------------

