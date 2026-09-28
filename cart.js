document.addEventListener("DOMContentLoaded",()=>{


    const buyButtons = document.querySelectorAll(".buy-btn");

    const cartIcon = document.querySelector(".fa-cart-shopping");


    let cart = [];



    buyButtons.forEach(button=>{


        button.addEventListener("click",()=>{


            const card = button.closest(".car-card");


            const carName = card.querySelector("h3").textContent;


            const carPrice = card.querySelector("h2").textContent;



            const car = {

                name: carName,

                price: carPrice

            };



            cart.push(car);



            alert(

                carName + " added to cart"

            );



            console.log(cart);



        });


    });



    if(cartIcon){


        cartIcon.addEventListener("click",()=>{


            if(cart.length === 0){


                alert("Cart is empty");


            }else{


                let list = "Your Cars:\n\n";


                cart.forEach((item,index)=>{


                    list +=

                    (index + 1) +

                    ". " +

                    item.name +

                    " - " +

                    item.price +

                    "\n";


                });



                alert(list);


            }


        });


    }



});