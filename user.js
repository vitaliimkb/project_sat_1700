const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let profile = document.getElementById("profile");
let url = "https://my-json-server.typicode.com/vitaliimkb/project_sat_1700/users/"
let xhr = new XMLHttpRequest();
xhr.open("GET", url + id);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    let user = xhr.response;
    profile.innerHTML = `
        <h1>${user.name}</h1>
        <img src="${user.img}" class="profile-img" alt="img">
        <p>Balance: ${user.balance}UAH</p>
    `
}

let prodUrl = "https://my-json-server.typicode.com/vitaliimkb/project_sat_1700/products/"
let prodXhr = new XMLHttpRequest()
prodXhr.open("GET", prodUrl + "?author_id=" + id);
prodXhr.responseType = "json";
prodXhr.send();
let productsGrid = document.getElementById("user-products-grid")
prodXhr.onload = function () {
    let products = prodXhr.response;
    productsGrid.innerHTML = null;
    for (const product of products) {
        let productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <img class="product-img" src="${product.photo_url}" alt="${product.name}">
            <p class="product-desc">${product.description}</p>
            <p class="product-price">Price: ${product.price}UAH</p>
        `
        productsGrid.append(productElement);
    }

}