window.addEventListener("load", function(event) {
    var spans = document.querySelectorAll(".a-offscreen");
    console.log(spans);
    for (let i = 0; i < spans.length; i++) {
        item = spans.item(i).innerHTML;
        console.log(item);
    }    
    console.log("This fired");
});

console.log("Outside hit");