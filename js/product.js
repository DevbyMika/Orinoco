////Product cameras sheet creation//

async function createProductCard(product) {
    
    const productSheet = document.querySelector("#productSheet");
    product.price = parseFloat(product.price) / 100; // round price 

    // DOM initialization

    let productContainer = document.createElement("div");
    let productPictContainer = document.createElement("div");
    let productPicture = document.createElement("img");
    let productDescContainer = document.createElement("div");
    let productRef = document.createElement("div");
    let productName = document.createElement("div");
    let productPrice = document.createElement("div");
    let productDescription = document.createElement("p");
    let containerBtn = document.createElement("div");
    let containerSelection = document.createElement("div");
    let lensesForm = document.createElement("div");
    let lensesLabel = document.createElement("label");
    let lensesOption = document.createElement("select");
    let quantityForm = document.createElement("div")
    let quantityLabel = document.createElement("label");
    let quantityBox = document.createElement("input");
    let addToCardBtn = document.createElement("button");

    //attributes card product //
    productContainer.setAttribute("class","row d-flex flex-column flex-md-row greybg m-4 shadow");
    productPictContainer.setAttribute("class","col-12 col-md-6 p-3");
    productPicture.setAttribute("src",product.imageUrl);
    productPicture.setAttribute("class", "productdetailpicture card-img-top img-flui")
    productDescContainer.setAttribute("class","col-12 col-md-6 p-3 d-flex flex-column justify-content-between");
    productDescContainer.setAttribute("id","ProductContainer");
    productRef.setAttribute("class","d-flex justify-content-between");
    productName.setAttribute("class","font-weight-bold");
    productPrice.setAttribute("class","font-weight-bold");
    productPrice.setAttribute("id","price");
    containerBtn.setAttribute("class","d-flex flex-column justify-content-between");
    containerSelection.setAttribute("class","d-flex justify-content-between");
    lensesForm.setAttribute("class", "form-group pr-4 d-lg-flex align-items-center");
    lensesOption.setAttribute("id", "lenseSelection");
    lensesLabel.setAttribute("class", "pr-3 m-0");
    lensesOption.setAttribute("class", "form-control");
    quantityForm.setAttribute("class", "form-group text-center d-lg-flex align-items-center");
    quantityLabel.setAttribute("class", "qtytitle m-0");
    quantityBox.setAttribute("type","number")
    quantityBox.setAttribute("value","1")
    quantityBox.setAttribute("id","qty")
    quantityBox.setAttribute("min","1")
    addToCardBtn.setAttribute("href","cart.html");
    addToCardBtn.setAttribute("class","btn btn-dark ");
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
    containerBtn.appendChild(containerSelection);
    containerSelection.appendChild(lensesForm);
    lensesForm.appendChild(lensesLabel);
    lensesForm.appendChild(lensesOption);
    containerSelection.appendChild(quantityForm);
    quantityForm.appendChild(quantityLabel);
    quantityForm.appendChild(quantityBox);
    containerBtn.appendChild(addToCardBtn);

    //text content product sheet//
    productName.textContent = product.name;
    productDescription.textContent= product.description;
    productPrice.textContent = product.price + "€";
    lensesLabel.textContent="Lentilles"
    quantityLabel.textContent="Qté"
    addToCardBtn.textContent = "Ajouter au panier";
    

    // Calc price + quantity total

    quantityBox.addEventListener("click",function(){
        let price = product.price;
        let qtyBox  = quantityBox.value;
        productPrice.innerHTML = (price*=qtyBox) + "€";
    });

    // select lenses choice

    var productLenses = product.lenses;
    for(var i = 0; i < productLenses.length; i++){
        var optionLense = document.createElement("option");
        optionLense.textContent = productLenses[i];
        lensesOption.appendChild(optionLense);
        optionLense.textContent = productLenses[i];
        };

// Send data to Cart page 

    addToCardBtn.addEventListener("click", function addToCard() {
    let storage = localStorage.getItem("orinocoStorage"); //storage space creation
        if (!storage) {
            storage = {
                products: [],
            }
        } else {
            storage = JSON.parse(storage);
        }
        storage.products.push({
            _id: product._id,
            name: product.name,
            lenses : lenseSelection.value,
            price: product.price * quantityBox.value,
            url: product.imageUrl,
            descritpion: product.description,
            qty : quantityBox.value
            });
        localStorage.setItem("orinocoStorage", JSON.stringify(storage));
        console.log("orinocoStorage", storage.products);
    });
};




