let productStorage = localStorage.getItem('orinocoStorage');
console.log(productStorage)


function displayBasket(productStorage) {
    
    //DOM initialisation 
    const productCard = document.querySelector("#shoppingReminder");
    
        productStorage.forEach((product) => {
        let storageContainer = document.createElement("div");
        let pictureProduct = document.createElement("img");
        let titleProduct = document.createElement("span");
        let lenseChoice = document.createElement("span");
        let priceProduct = document.createElement("span");
        let quantityProduct = document.createElement("form-group");
        let quantitydetails = document.createElement("input");
        let removeRow = document.createElement("button");
    
    // html attribution
        storageContainer.setAttribute("class","col-12 d-flex");
        pictureProduct.setAttribute("src",product.url);
        titleProduct.setAttribute("class");
        lenseChoice.setAttribute("p");
        priceProduct.setAttribute("class");
        quantityProduct.setAttribute("type","number");
        quantityProduct.setAttribute("value",product.qty);
        removeRow.setAttribute("class","btn btn-danger");

    // html creation
        productCard.appendChild(storageContainer);
        storageContainer.appendChild(pictureProduct);
        storageContainer.appendChild(titleProduct);
        storageContainer.appendChild(lenseChoice);
        storageContainer.appendChild(priceProduct);
        storageContainer.appendChild(quantityProduct);
        quantityProduct.appendChild(quantitydetails);
        storageContainer.appendChild(removeRow);

        titleProduct.textContent = product.name;
        lenseChoice.textContent = product.lenses;
        priceProduct.textContent = product.price / 100 + " €";

        removeRow.textContent = "supprimer";
    });
};




