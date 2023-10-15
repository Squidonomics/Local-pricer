const href = window.location.href;
const findTerm = (term) => {
  if (href.includes(term)) {
    return href;
  }
};
switch (href) {
  case findTerm("amazon"):
    amazonLocalize();
    break;
  default:
    console.log("Missed both switch");
}

function amazonLocalize() {
  window.addEventListener("load", function (event) {
    var spans = document.querySelectorAll(".a-offscreen");
    console.log(spans);
    spans.forEach((span) => {
      item = span.innerHTML;
      let updated = item.replace(/^[$]/g, "");
      let updatedPrice = parseFloat(updated) * 1.095;
      let roundedPrice = updatedPrice.toFixed(2);
      if (isNaN(roundedPrice)) {
        console.log("Nothing here");
      } else {
        span.after(createPrettyPrice(roundedPrice));
        console.log(roundedPrice);
      }
    });
    const internalDivElements = document.querySelectorAll(
      'span[aria-hidden="true"]'
    );
    for (const internalDivElement of internalDivElements) {
      internalDivElement.parentNode.removeChild(internalDivElement);
    }
    console.log("This fired");
  });
}

function createPrettyPrice(price) {
    const prefixEmoji = document.createElement("span");
  const dollarSign = document.createElement("span");
  const wholeNumber = document.createElement("span");
  const cents = document.createElement("span");

  prefixEmoji.classList.add("a-price-symbol");
  dollarSign.classList.add("a-price-symbol");
  wholeNumber.classList.add("a-price-whole");
  cents.classList.add("a-price-fraction");

  prefixEmoji.innerHTML = "✴️"
  dollarSign.innerHTML = "$";
  wholeNumber.innerHTML = Math.trunc(price);
  cents.innerHTML = (price + "").split(".")[1];

  const outerDiv = document.createElement("span");
  outerDiv.appendChild(prefixEmoji);
  outerDiv.appendChild(dollarSign);
  outerDiv.appendChild(wholeNumber);
  outerDiv.appendChild(cents);

  return outerDiv;
}

function createTooltip(targetElement, tooltipText) {
  const tooltipElement = document.createElement("div");
  tooltipElement.classList.add("tooltip");

  tooltipElement.textContent = tooltipText;

  tooltipElement.style.left = `${targetElement.getBoundingClientRect().left}px`;
  tooltipElement.style.top = `${targetElement.getBoundingClientRect().top}px`;

  document.body.appendChild(tooltipElement);

  return tooltipElement;
}
