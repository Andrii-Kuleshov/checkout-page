const expiry = document.getElementById("expiry");

expiry.addEventListener("input", function(e) {

let value = e.target.value.replace(/\D/g,"");

if(value.length >= 3){
value = value.slice(0,2) + "/" + value.slice(2,4);
}

e.target.value = value;

});

const cardNumber = document.getElementById("card-number");

cardNumber.addEventListener("input", function(e) {

let value = e.target.value.replace(/\D/g, "");

value = value.substring(0,16);

let formatted = value.match(/.{1,4}/g);

if(formatted){
e.target.value = formatted.join(" ");
} else {
e.target.value = value;
}

});

const headphonesQty = Number(localStorage.getItem("headphonesQty")) || 0;
const keyboardQty = Number(localStorage.getItem("keyboardQty")) || 0;
const mouseQty = Number(localStorage.getItem("mouseQty")) || 0;
const total = Number(localStorage.getItem("total")) || 0;

const summary = document.getElementById("order-summary");
const checkoutTotal = document.getElementById("checkout-total");

summary.innerHTML = "";

if (headphonesQty > 0) {
    summary.innerHTML += `<p>Headphones x${headphonesQty}</p>`;
}

if (keyboardQty > 0) {
    summary.innerHTML += `<p>Keyboard x${keyboardQty}</p>`;
}

if (mouseQty > 0) {
    summary.innerHTML += `<p>Mouse x${mouseQty}</p>`;
}

checkoutTotal.textContent = "Total: $" + total;

const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", () => {
    window.location.href = "https://andrii-kuleshov.github.io/mini-store/";
});

const form = document.getElementById("payment-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Payment successful!");

    localStorage.setItem("headphonesQty", 0);
    localStorage.setItem("keyboardQty", 0);
    localStorage.setItem("mouseQty", 0);
    localStorage.setItem("total", 0);

    window.location.href = "https://andrii-kuleshov.github.io/mini-store/";
});
