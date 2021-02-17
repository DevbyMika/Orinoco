//--------------------------variables definition----------------------------//

let order= JSON.parse(localStorage.getItem("orinocoStorage"));
let orderNumber = localStorage.getItem("orderNumber");
let userNameOrder = localStorage.getItem("UserName");
let products = order.products;
let totalPrice = 0;
    for(let i = 0 ; i < products.length; i++){
        product = products[i];
        productPrice = product.price;
        totalPrice = totalPrice+productPrice;
        console.log(totalPrice);
    };

//--------------------------HTML INCREMENTATION----------------------------//

let orderCard = document.querySelector("#orderConfirmation");

let orderContainer = document.createElement("div");
let congrats = document.createElement("h3");
let remindOrder = document.createElement("h4");
let numberOrder = document.createElement("span");
let priceOrder = document.createElement("span");
let delivery = document.createElement("span");
let homeBtn = document.createElement("button");

orderContainer.setAttribute("class", "col-8 mx-auto greybg d-flex flex-column align-items-center my-5");
congrats.setAttribute("class", "font-weight-bold my-3");
remindOrder.setAttribute("class", "font-weight-bold my-3");
numberOrder.setAttribute("class", "font-weight-bold my-3");
priceOrder.setAttribute("class", "totalPrice font-weight-bold my-3");
homeBtn.setAttribute("class", "btn btn-dark my-3");
delivery.setAttribute("class", "font-weight-bold my-3");
homeBtn.setAttribute("id", "homeBtn");
homeBtn.setAttribute("href", "../index.html");

orderCard.appendChild(orderContainer);
orderContainer.appendChild(congrats);
orderContainer.appendChild(remindOrder);
orderContainer.appendChild(numberOrder);
orderContainer.appendChild(priceOrder);
orderContainer.appendChild(delivery)
orderContainer.appendChild(homeBtn);


congrats.textContent = "Merci pour votre achat"+" "+userNameOrder+" "+"!";
remindOrder.textContent = "Résumé de votre commande"+" "+":";
numberOrder.textContent = "Commande numéro"+" "+":"+" "+ orderNumber;
priceOrder.textContent = "Montant total"+" "+":"+" "+ totalPrice + "€";
delivery.textContent = "A bientôt sur Orinoco";
homeBtn.textContent = "Retour à l'accueil"; 

//--------------------------Clear Order----------------------------//
let clearStorageBtn = document.querySelector("#homeBtn")
clearStorageBtn.addEventListener("click", function clearStorage(e){
    localStorage.clear();
    window.location.href = "../index.html";
});
