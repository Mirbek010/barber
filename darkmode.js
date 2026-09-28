document.addEventListener("DOMContentLoaded",()=>{


    const darkBtn = document.querySelector(".fa-moon");


    if(darkBtn){


        darkBtn.addEventListener("click",()=>{


            document.body.classList.toggle("light-mode");



            if(document.body.classList.contains("light-mode")){


                localStorage.setItem("theme","light");


            }else{


                localStorage.setItem("theme","dark");


            }


        });


    }



    const savedTheme = localStorage.getItem("theme");



    if(savedTheme === "light"){


        document.body.classList.add("light-mode");


    }



});