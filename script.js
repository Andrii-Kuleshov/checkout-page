const expiry = document.getElementById("expiry");

expiry.addEventListener("input", function(e) {

let value = e.target.value.replace(/\D/g,"");

if(value.length >= 3){
value = value.slice(0,2) + "/" + value.slice(2,4);
}

e.target.value = value;

});
