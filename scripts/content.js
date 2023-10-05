const href = window.location.href;
const findTerm = (term) => {
  if (href.includes(term)){
    return href;
  }
};
switch(href) {
    case findTerm('amazon'):
        amazonLocalize()
        break;
    case findTerm('bestbuy'):
        bestBuyLocalize()
        break;
    default:
        console.log("Missed both switch");
}

function amazonLocalize() {
    window.addEventListener("load", function(event) {
        var spans = document.querySelectorAll(".a-offscreen");
        console.log(spans);
        spans.forEach((span) => {
            item = span.innerHTML;
            let updated = item.replace(/^[$]/g, "");
            let updatedPrice = parseFloat(updated) * 1.095;
            let roundedPrice = updatedPrice.toFixed(2);
            let localPrice = document.createElement('p');
            localPrice.innerHTML = "&#128181; $" + roundedPrice;
            if(isNaN(roundedPrice)){
                console.log("Nothing here")
            } else {
                span.after(localPrice);
                console.log(roundedPrice);  
            }
        })   
        console.log("This fired");
    });
}  

function bestBuyLocalize() {
    window.addEventListener("load", function(event) {
        var spans = document.querySelectorAll(".sr-only");
        console.log(spans);
        spans.forEach((span) => {
            item = span.innerHTML;
            if(item.includes("rating")) {
                return;
            }
            let updated = item.replace(/[^\d.]/g, "");
            let updatedPrice = parseFloat(updated) * 1.095;
            let roundedPrice = updatedPrice.toFixed(2);
            let localPrice = document.createElement('p');
            localPrice.innerHTML = "&#128181; $" + roundedPrice;
            if(isNaN(roundedPrice)){
                console.log("Nothing here")
            } else {
                span.after(localPrice);
                console.log(roundedPrice);  
            }
        })   
        console.log("This fired");
    });
} 