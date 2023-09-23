var spans = document.getElementsByClassName(".a-offscreen");
var size = spans.length;
window.addEventListener("load", function(event) {
    for(var i = 0; i < size; i++) {
        spans[i].innerHTML = spans[i].body.innerHTML.replace("$9.37", "100.00")
    console.log(spans[i].textContent);
    console.log("This fired");
    }
});

console.log(spans.length);
console.log("Outside hit");
/* span.forEach((element, index) => {
    span[index] = element + index;
});

for(const span of spans) {
    console.log(span);
}


if(span) {
    // const dollars = span.innerHTML.match(/\$[0-9]+\.?[0-9]g);
    
    // const afterTax = [dollars]*.0925;
    /* const newPrice = document.createElement("p");
    newPrice.classList.add(".priceView-hero-price", ".priceView-customer-price");
    newPrice.textContent = '${afterTax}';
    const priceField = span.querySelector("span");
    priceField.insertAdjacentElement("afterend", newPrice); 
} */