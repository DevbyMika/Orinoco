async function displayProduct() {
    const urlSearchId = (new URL(window.location).searchParams);
    productId = urlSearchId.get("id")
    try {
        let url = "http://localhost:3000/api/cameras/" + productId;
        let response = await fetch(url);
        if (response.ok) {
            let cameraProduct = await response.json();
            createProductCard(cameraProduct);
        } else {
            console.error('server return: ', response.status)
        }
    } catch (e) {
        console.log(e);
    }
}
displayProduct();


////Product cameras sheet creation//

async function createProductCard(product) {
    
     var productSheet = document.querySelector("#productSheet");
    
    // DOM initialization

    var productContainer = document.createElement("div");
    var productPictContainer = document.createElement("div");
    var productPicture = document.createElement("img");
    var productDescContainer = document.createElement("div");
    var productRef = document.createElement("div");
    var productName = document.createElement("div");
    var productPrice = document.createElement("div");
    var productDescription = document.createElement("p");
    var containerBtn = document.createElement("div");
    var dropDownOption = document.createElement("div");
    var optionLenseBtn = document.createElement("div");
    var dropDownBtnOption = document.createElement("button");
    var addToCardBtn = document.createElement("button");

    //attributes card product //
    productContainer.setAttribute("class","row d-flex greybg m-4");
    productPictContainer.setAttribute("class","col-6 p-3");
    productPicture.setAttribute("src",product.imageUrl);
    productPicture.setAttribute("class", "card-img-top img-flui")
    productDescContainer.setAttribute("class","col-6 p-3 d-flex flex-column justify-content-between");
    productDescContainer.setAttribute("id","ProductContainer");
    productRef.setAttribute("class","d-flex justify-content-between");
    productName.setAttribute("class","font-weight-bold");
    productPrice.setAttribute("class","font-weight-bold");
    containerBtn.setAttribute("class","d-flex justify-content-between");
    dropDownOption.setAttribute("class","dropdown");
    dropDownBtnOption.setAttribute("id","dropdownMenuOtpion");
    dropDownBtnOption.setAttribute("class","btn btn-dark dropdown-toggle");
    dropDownBtnOption.setAttribute("type","button");
    dropDownBtnOption.setAttribute("data-toggle","dropdown");
    optionLenseBtn.setAttribute("class","dropdown-menu");
    optionLenseBtn.setAttribute("id","dropdownItem");
    addToCardBtn.setAttribute("href","cart.html");
    addToCardBtn.setAttribute("class","btn btn-dark");
    addToCardBtn.setAttribute("id","addToCard");
    addToCardBtn.setAttribute("data-toggle","modal");
    addToCardBtn.setAttribute("data-target","#modal");

    //html display card product//

    productSheet.appendChild(productContainer);
    productContainer.appendChild(productPictContainer);
    productPictContainer.appendChild(productPicture);
    productContainer.appendChild(productDescContainer);
    productDescContainer.appendChild(productRef);
    productRef.appendChild(productName);
    productRef.appendChild(productPrice);
    productDescContainer.appendChild(productDescription);
    productDescContainer.appendChild(containerBtn);
    containerBtn.appendChild(dropDownOption);
    dropDownOption.appendChild(dropDownBtnOption);
    dropDownOption.appendChild(optionLenseBtn);
    containerBtn.appendChild(addToCardBtn);

    //text content product sheet//
    productName.textContent = product.name;
    productPrice.textContent = product.price / 100 + " €";
    productDescription.textContent= product.description;
    addToCardBtn.textContent = "Ajouter au panier";
    dropDownBtnOption.textContent = "Lentilles";

    var productLenses = product.lenses;
    for(var i = 0; i < productLenses.length; i++){
        var optionLense = document.createElement("span");
        optionLense.setAttribute("class", "dropdown-item");
        optionLense.textContent = productLenses[i];
        optionLenseBtn.appendChild(optionLense);
        optionLense.addEventListener("click",function(){
            optionLenseBtn.textContent = productLenses[i];
        })   
    }

    // add to card storage product
    
        let cameraSlct = {
        id: product._id,
        name: product.name,
        price: product.price,
        url: product.imageUrl,
        descritpion: product.description,
        qty : 1
    };
    addToCardBtn.addEventListener("click", function(){
    var productStorage = JSON.stringify(cameraSlct)
    localStorage.setItem("productStorage", productStorage);
    });
};

