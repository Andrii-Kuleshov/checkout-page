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
