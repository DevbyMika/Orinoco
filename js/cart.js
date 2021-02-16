// ------------------------------Shopping cart---------------------------------------- //

// Cart Shopping Creation
let storage = JSON.parse(localStorage.getItem('orinocoStorage'));


// Answer message if shopping cart empty
const emptyCart = () => {
    let cardContainer = document.querySelector("#shoppingReminder");
    let emptyCartContainer = document.createElement("div")
    let emptyCartMessage = document.createElement("h5");
    emptyCartContainer.setAttribute("class", "emptycart col-12 p-0 ||")
    emptyCartMessage.setAttribute("class", "col-12 text-center font-weight-bold align-middle p-0 ||")
    cardContainer.appendChild(emptyCartContainer);
    emptyCartContainer.appendChild(emptyCartMessage);
    emptyCartMessage.textContent = "Votre panier est vide";
};
// Empty Cart condition
if(!storage || storage.products == 0){
    emptyCart();
}
else{
    cartContent();
};
// local storage content incrementation local storage 
function cartContent ()  {
    let storageItems = storage.products
    storageItems.forEach((result) => {   
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
    quantity.setAttribute("class","col-2 col-lg-4 text-center");
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
//------------------------------------------------------------------------------------//
//----------------------------------Shopping Price cart Count-------------------------//
function updateCartTotal(){
    let cartItemContainer = document.querySelectorAll("#shoppingReminder")[0];
    let cartRows = cartItemContainer.querySelectorAll("#shoppingRow");
    let subTotal = 0 ;
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
    let deliveryCost =0 ;
    if(deliveryCost == 0 || null){
        delivery.innerHTML = "Offerte";
    }else{
        delivery.innerHTML = deliveryCost + "€";
        }
    totalCount.innerHTML = (subTotal + deliveryCost) + "€";   
};
updateCartTotal();
//------------------------------------------------------------------------------------//
//----------------------------------Shopping cart modification------------------------//

//remove btn to delete item and update shopping cart
function removeBtn() {
    let StorageTarget = storage.products
    let removeRowBtn = document.querySelectorAll("#removeBtn")
    for( let i = 0 ; i < removeRowBtn.length; i++){
        let clickRemove = removeRowBtn[i];
        let productTarget = StorageTarget[i];
        clickRemove.addEventListener("click", function(e){
        let index = StorageTarget.indexOf(productTarget);
        clickRemove.parentElement.remove();
        StorageTarget.splice(index,1);
        localStorage.setItem("orinocoStorage",JSON.stringify(storage));
        window.location.reload();
        updateCartTotal();
    });
}; 
};
removeBtn();
//------------------------------------------------------------------------------------//
//----------------------Order submission------------------------//

let dataValid = document.querySelector("#purchaseBtn");

dataValid.addEventListener("click", function(e){
    e.preventDefault();
    let email = document.querySelector("#inputEmail");
    let lastName = document.querySelector("#name");
    let firstName = document.querySelector("#firstName");
    let address = document.querySelector("#address");
    let city = document.querySelector("#city");

const storage = JSON.parse(localStorage.getItem("orinocoStorage"));
let products = Object.values(storage.products).map(product=>
    product._id);
console.log(products);
 
const order = {
    "contact" : {
    firstName : firstName.value,
    lastName : lastName.value,
    address : address.value,
    city : city.value,
    email : email.value
},
    "products" : products
}; 
console.log(order);

let url = "http://localhost:3000/api/cameras/order";
const requestOrder ={ 
    method: "POST",
    body: JSON.stringify(order),
    headers: {"Content-Type": "application/json"}
    }; 
fetch(url , requestOrder) 
    .then(response => response.json())
    .then(response => {
        console.log(response);
        storeIdName(response);
    })
    .catch(error => alert("Erreur : " + error));

    function storeIdName(data) {
     localStorage.setItem("orderNumber", data.orderId);
     localStorage.setItem("UserName", data.contact.firstName);
     window.location.href = "./order.html";
    }
});

