document.addEventListener("DOMContentLoaded", function(){

    AOS.init({
        duration:1000,
        once:true
    });


    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");


    if(menuBtn){

        menuBtn.addEventListener("click", ()=>{

            navbar.classList.toggle("active");

        });

    }


    const scrollBtn = document.getElementById("scrollTop");


    window.addEventListener("scroll", ()=>{


        if(window.scrollY > 300){

            scrollBtn.style.display = "flex";

        }else{

            scrollBtn.style.display = "none";

        }


    });


    if(scrollBtn){

        scrollBtn.addEventListener("click", ()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }


    const links = document.querySelectorAll(".navbar a");


    links.forEach(link=>{

        link.addEventListener("click", ()=>{

            navbar.classList.remove("active");

        });

    });


});