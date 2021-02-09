const storage = JSON.parse(localStorage.getItem('orinocoStorage'));
console.log(storage);

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

if(storage.length === 0){
    emptyCart();
}
else{
    cartContent();
};
// loading local storage content
function cartContent ()  {

    storage.forEach((result) => {   
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
    storageContainer.setAttribute("id","shoppingRow");
    productDesc.setAttribute("class","col-4 d-flex flex-column");
    titleProduct.setAttribute("class","font-weight-bold");
    lenseChoice.setAttribute("class","font-weight-bold");
    quantity.setAttribute("class","col-4 text-center");
    priceProduct.setAttribute("class","col-2 text-center font-weight-bold p-0 ml-3 productPrice ");
    pictureProduct.setAttribute("src",result.url);
    pictureProduct.setAttribute("width","40px");
    pictureProduct.setAttribute("height","40px");
    removeRow.setAttribute("class","btn btn-danger");
    removeRow.setAttribute("id","removeBtn");

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


function updateCartTotal(){
    let cartItemContainer = document.querySelectorAll("#shoppingReminder")[0];
    let cartRows = cartItemContainer.querySelectorAll("#shoppingRow");
    let subTotal = 0;
    for (let i = 0 ; i<cartRows.length; i++){
        let cartRow = cartRows[i];
        let productPrice = cartRow.querySelectorAll(".productPrice")[0];
        let price = parseFloat(productPrice.innerText.replace('€',""));
        let subTotalCount = document.querySelector("#subtotalcount");
        subTotal += price;
        subTotalCount.innerHTML = subTotal +"€";
    }
    let totalCount = document.querySelector("#totalcount");
    let delivery = document.querySelector("#deliverycost")
    let deliveryCost =0;
    if(deliveryCost == 0 || null){
        delivery.innerHTML = "Offerte";
    }else{
        delivery.innerHTML = deliveryCost + "€";
        }
    totalCount.innerHTML = (subTotal + deliveryCost) + "€";   
};
updateCartTotal();

//remove btn
function removeBtn() {
    let removeRowBtn = document.querySelectorAll("#removeBtn")
    for( let i = 0; i < removeRowBtn.length; i++){
        let clickRemove = removeRowBtn[i];
        let productTarget = storage[i];
        clickRemove.addEventListener("click", function(e){
        let index = storage.indexOf(productTarget);
        clickRemove.parentElement.remove();
        storage.splice(index,1);
        localStorage.setItem("orinocoStorage",JSON.stringify(storage));
        window.location.reload();
        updateCartTotal();
    });
}; 
};
removeBtn();






