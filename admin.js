let adminForm = document.getElementById("admin-form");

adminForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event.target["name"].value);
    console.log(event.target["desc"].value);
    console.log(event.target["price"].value);
    console.log(event.target["photo_url"].value);
})
