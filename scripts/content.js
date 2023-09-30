window.addEventListener("load", function(event) {
    var spans = document.querySelectorAll(".a-offscreen");
    console.log(spans);
    spans.forEach((span) => {
        item = span.innerHTML;
        let updated = item.replace(/^[$]/g, "");
        let updatedPrice = parseFloat(updated) * 1.095;
        let roundedPrice = updatedPrice.toFixed(2);
        let localPrice = document.createElement('p');
        localPrice.innerHTML = "$" + roundedPrice;
        span.after(localPrice);
        console.log(roundedPrice);
    })   
    console.log("This fired");
});

console.log("Outside hit");