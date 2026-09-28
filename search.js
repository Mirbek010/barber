document.addEventListener("DOMContentLoaded",()=>{


    const searchIcon = document.querySelector(".fa-magnifying-glass");

    const carCards = document.querySelectorAll(".car-card");


    if(searchIcon){


        searchIcon.addEventListener("click",()=>{


            let search = prompt("Search car name:");



            if(search){


                carCards.forEach(card=>{


                    let carName = card.querySelector("h3").textContent.toLowerCase();


                    if(carName.includes(search.toLowerCase())){


                        card.style.display="block";


                    }else{


                        card.style.display="none";


                    }


                });


            }


        });


    }



});