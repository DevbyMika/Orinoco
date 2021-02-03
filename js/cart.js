let getproductStorage = localStorage.getItem('orinocoStorage');
let productStorage = JSON.parse(getproductStorage);
console.log(productStorage);


const CartContent = () => {

    let cartProduct= productStorage.products;
    cartProduct.forEach((result) => {   
    //DOM initialisation 
    let cardContainer = document.querySelector("#shoppingReminder");
    let storageContainer = document.createElement("div");
    let pictureProduct = document.createElement("img");
    let productDesc = document.createElement("div");
    let titleProduct = document.createElement("span");
    let lenseChoice = document.createElement("span");
    let quantity = document.createElement("span");
    let priceProduct = document.createElement("span");
    let removeRow = document.createElement("button");
    
    // html attribution
    storageContainer.setAttribute("class","col-12 d-flex align-items-center p-0");
    productDesc.setAttribute("class","col-4 d-flex flex-column");
    titleProduct.setAttribute("class","font-weight-bold");
    lenseChoice.setAttribute("class","font-weight-bold");
    quantity.setAttribute("class","col-4 text-center");
    priceProduct.setAttribute("class","col-2 text-center font-weight-bold p-0 ml-3 ");
    pictureProduct.setAttribute("src",result.url);
    pictureProduct.setAttribute("width","40px");
    pictureProduct.setAttribute("height","40px");
    removeRow.setAttribute("class","btn btn-danger btnremove");

    // html creation
        cardContainer.appendChild(storageContainer);
        storageContainer.appendChild(pictureProduct);
        storageContainer.appendChild(productDesc);
        productDesc.appendChild(titleProduct);
        productDesc.appendChild(lenseChoice);
        storageContainer.appendChild(quantity);
        storageContainer.appendChild(priceProduct);
        storageContainer.appendChild(removeRow);

        //textcontent
        titleProduct.textContent = result.name;
        priceProduct.textContent = result.price + "€";
        lenseChoice.textContent = result.lenses;
        quantity.textContent = result.qty;
        removeRow.textContent = "X";
    });
};

 const emptyCart = () => {
    let cardContainer = document.querySelector("#shoppingReminder");
    let emptyCartContainer = document.createElement("div")
    let emptyCartMessage = document.createElement("h5");
    emptyCartContainer.setAttribute("class", "col-12")
    emptyCartMessage.setAttribute("class", "text-center font-weight-bold m-5")
    cardContainer.appendChild(emptyCartContainer);
    cardContainer.appendChild(emptyCartMessage);
    emptyCartMessage.textContent = "Votre panier est vide";
 };

 if(productStorage === null){
    emptyCart();
}
else{CartContent();
};





