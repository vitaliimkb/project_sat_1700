let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = "https://raw.githubusercontent.com/vitaliimkb/project_sat_1700/main/db.json"
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    let products = xhr.response.products;
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
            <button>Buy</button>
        `
        productsGrid.append(productElement);
    }
}
