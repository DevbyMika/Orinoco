var getProductStorage = localStorage.getItem('productStorage');
    var productStorage = JSON.parse(getProductStorage);
    console.log(productStorage);

function displayBasket (productStorage){


    const productCard = document.querySelector("#productCard");

    
    var productImg = document.querySelector(".productPicture");
    var productTitle = document.querySelector(".titleproduct");
    var productPrice = document.querySelector(".priceproduct");

    productImg.innerHTML = productStorage.url;
    productTitle.textContent = productStorage.name;
    productPrice.textContent = productStorage.price / 100 + " €";



    productStorage.forEach(()=>{
    
    //DOM initialisation 
        var RowContainer = document.createElement("div");
        var pictureProduct = document.createElement("img");
        var titleProduct = document.createElement("span");
        var priceProduct = document.createElement("span");
        var quantityProduct = document.createElement("input");
        var removeRow = document.createElement("button");
    
    // html attribution
        RowContainer.setAttribute("class","col-12 d-flex");
        pictureProduct.setAttribute("src",productStorage.url);
        titleProduct.setAttribute("div");
        priceProduct.setAttribute("div");
        quantityProduct.setAttribute("type","number");
        quantityProduct.setAttribute("value","1");
        removeRow.setAttribute("class","btn btn-danger");

    // html creation
        productCard.appendChild(RowContainer);
        RowContainer.appendChild(pictureProduct);
        RowContainer.appendChild(titleProduct);
        RowContainer.appendChild(priceProduct);
        RowContainer.appendChild(quantityProduct);
        RowContainer.appendChild(removeRow);

        titleProduct.textContent = product.name;
        priceProduct.textContent = product.price / 100 + " €";
        removeRow.textContent = "supprimer";
    });
};



