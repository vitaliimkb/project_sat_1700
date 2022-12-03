let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = "https://raw.githubusercontent.com/vitaliimkb/project_sat_1700/main/db.json"
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    let products = xhr.response.products;
    productsArray = products;
    productsGrid.innerHTML = null;
    for (const product of products) {
        let productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <img class="product-img" src="${product.photo_url}" alt="${product.name}">
            <p class="product-desc">${product.description}</p>
            <p class="product-price">Price: ${product.price}UAH</p>
            <a href="user.html?id=${product.author_id}">Seller profile</a>
            <button onclick="addProductToCart(${product.id})">Buy</button>
        `
        productsGrid.append(productElement);
    }
}

let cartProd = document.getElementById("cart-products");

function openCart() {
    cartProd.classList.toggle("hide");
}

let cart = [];

function addProductToCart(id) {
    let product = productsArray.find(function(p) {
        return p.id == id;
    });
    cart.push(product);
    showCartProducts();
}

function showCartProducts() {
    if (cart.length == 0) return cartProd.innerHTML = "Cart is empty";
    cartProd.innerHTML = null;
    let sum = 0;
    for (const product of cart) {
        cartProd.innerHTML += `
            <p>
                <img src="${product.photo_url}">
                ${product.name} |${product.price}UAH
                <hr>
            </p>
        `;
        sum += product.price;
    } 
    
    cartProd.innerHTML += `
        <p>Total price: <b>${sum}UAH</b></p>
        <button onclick="buyAll()">Buy All</button>
    `;
}

function buyAll() {
    cart = [];
    localStorage.setItem("cart", "[]");
    cartProd.innerHTML = "Money wa withdraw from your card";
}