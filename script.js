document.addEventListener("DOMContentLoaded", () => {

const expiry = document.getElementById("expiry");
const cardNumber = document.getElementById("card-number");
const cvv = document.getElementById("cvv");

const summary = document.getElementById("order-summary");
const checkoutTotal = document.getElementById("checkout-total");

const backBtn = document.getElementById("back-btn");
const form = document.getElementById("payment-form");

const thankYou = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue-btn");

const payBtn = document.getElementById("pay-btn");


expiry.addEventListener("input", (e) => {

    let value = e.target.value.replace(/\D/g, "");

    if (value.length >= 3) {
        value = value.slice(0,2) + "/" + value.slice(2,4);
    }

    e.target.value = value;

});


cardNumber.addEventListener("input", (e) => {

    let value = e.target.value.replace(/\D/g,"");

    value = value.substring(0,16);

    let formatted = value.match(/.{1,4}/g);

    if (formatted) {
        e.target.value = formatted.join(" ");
    } else {
        e.target.value = value;
    }

});


let headphonesQty = Number(localStorage.getItem("headphonesQty")) || 0;
let keyboardQty = Number(localStorage.getItem("keyboardQty")) || 0;
let mouseQty = Number(localStorage.getItem("mouseQty")) || 0;

let total = Number(localStorage.getItem("total")) || 0;


summary.innerHTML = "";

const count = headphonesQty + keyboardQty + mouseQty;

if (count === 0) {
    summary.innerHTML = "<p>Your cart is empty</p>";
}

function addItem(name, qty, price) {

    if (qty > 0) {

        summary.innerHTML += `
        <div class="summary-row">
            <span>${name}</span>
            <span>x${qty}</span>
            <span>$${qty * price}</span>
        </div>
        `;

    }

}

addItem("Headphones", headphonesQty, 199);
addItem("Keyboard", keyboardQty, 99);
addItem("Mouse", mouseQty, 49);

checkoutTotal.textContent = "Total: $" + total;


function updatePayButton() {

    const count = headphonesQty + keyboardQty + mouseQty;

    if (count === 0) {
        payBtn.disabled = true;
    } else {
        payBtn.disabled = false;
    }

}

updatePayButton();


backBtn.addEventListener("click", () => {

    window.location.href = "https://andrii-kuleshov.github.io/mini-store/";

});


form.addEventListener("submit", (e) => {

    e.preventDefault();

    const cardNumberValue = cardNumber.value.replace(/\s/g,"");
    const expiryValue = expiry.value;
    const cvvValue = cvv.value;


    if (cardNumberValue.length !== 16) {

        alert("Card number must be 16 digits");
        return;

    }

    if (!/^\d{2}\/\d{2}$/.test(expiryValue)) {

        alert("Expiry must be in MM/YY format");
        return;

    }

    if (cvvValue.length !== 3) {

        alert("CVV must be 3 digits");
        return;

    }


    localStorage.setItem("headphonesQty", 0);
    localStorage.setItem("keyboardQty", 0);
    localStorage.setItem("mouseQty", 0);
    localStorage.setItem("total", 0);


    thankYou.style.display = "flex";

    updatePayButton();

});


continueBtn.addEventListener("click", () => {

    window.location.href = "https://andrii-kuleshov.github.io/mini-store/";

});

});
