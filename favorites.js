document.addEventListener("DOMContentLoaded",()=>{


    const carCards = document.querySelectorAll(".car-card");


    let favorites = JSON.parse(

        localStorage.getItem("favorites")

    ) || [];



    carCards.forEach(card=>{


        const favoriteBtn = document.createElement("button");


        favoriteBtn.className = "favorite-btn";


        favoriteBtn.innerHTML = "♡";


        card.appendChild(favoriteBtn);



        const carName = card.querySelector("h3").textContent;



        if(favorites.includes(carName)){


            favoriteBtn.innerHTML="♥";

            favoriteBtn.classList.add("active");


        }



        favoriteBtn.addEventListener("click",()=>{


            if(favorites.includes(carName)){


                favorites = favorites.filter(

                    item => item !== carName

                );


                favoriteBtn.innerHTML="♡";

                favoriteBtn.classList.remove("active");



            }else{


                favorites.push(carName);


                favoriteBtn.innerHTML="♥";

                favoriteBtn.classList.add("active");


            }



            localStorage.setItem(

                "favorites",

                JSON.stringify(favorites)

            );



        });



    });



});