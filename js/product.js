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
    var lensesForm = document.createElement("div");
    var lensesLabel = document.createElement("label");
    var lensesOption = document.createElement("select");
    var quantityForm = document.createElement("div")
    var quantityLabel = document.createElement("label");
    var quantityBox = document.createElement("input");
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
    containerBtn.setAttribute("class","d-flex justify-content-between align-items-center");
    lensesForm.setAttribute("class", "form-group");
    lensesOption.setAttribute("class", "form-control");
    quantityForm.setAttribute("class", "form-group");
    quantityLabel.setAttribute("class", "qtytitle");
    quantityBox.setAttribute("type","number")
    quantityBox.setAttribute("value","1")
    quantityBox.setAttribute("id","qty")
    quantityBox.setAttribute("min","1")
    addToCardBtn.setAttribute("href","cart.html");
    addToCardBtn.setAttribute("class","btn btn-dark mt-3");
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
    containerBtn.appendChild(lensesForm);
    lensesForm.appendChild(lensesLabel);
    lensesForm.appendChild(lensesOption);
    containerBtn.appendChild(quantityForm);
    quantityForm.appendChild(quantityLabel);
    quantityForm.appendChild(quantityBox);
    containerBtn.appendChild(addToCardBtn);

    //text content product sheet//
    productName.textContent = product.name;
    productPrice.textContent = (product.price * quantityBox.value) / 100 + " €";
    productDescription.textContent= product.description;
    lensesLabel.textContent="Lentilles"
    quantityLabel.textContent="Qté"
    addToCardBtn.textContent = "Ajouter au panier";

    var productLenses = product.lenses;
    for(var i = 0; i < productLenses.length; i++){
        var optionLense = document.createElement("option");
        optionLense.textContent = productLenses[i];
        lensesOption.appendChild(optionLense);
        optionLense.textContent = productLenses[i];//
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

