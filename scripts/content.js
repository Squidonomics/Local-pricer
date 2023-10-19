const href = window.location.href;
const findTerm = (term) => {
    if (href.includes(term)) {
        return href;
    }
};
switch (href) {
    case findTerm("amazon"):
        amazonLocalize();
        amazonLandingLocalize();
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
            chrome.storage.sync.get(["key"]).then((result) => {
                const dictionary = {
                    "Knoxville": 1.095,
                    "San Diego": 1.0775,
                    "Los Angeles": 1.095,
                    "LA": 1.095,
                    "New York City": 1.088,
                    "NYC": 1.088,
                    "Chicago": 1.1,
                    "Houston": 1.0825,
                    "Phoenix": 1.086
                }
                const taxValue = dictionary[result.key];
                console.log(taxValue);
                let updatedPrice = parseFloat(updated) * taxValue;
                let roundedPrice = updatedPrice.toFixed(2);
                if (isNaN(roundedPrice)) {
                    console.log("Nothing here");
                } else {
                    span.after(createPrettyPrice(roundedPrice));
                    console.log(roundedPrice);
                }
            });
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

function amazonLandingLocalize() {
    window.addEventListener("load", function (event) {
        var spans = document.querySelectorAll(".Price__price__LKpWT");
        console.log(spans);
        spans.forEach((span) => {
            item = span.innerHTML;
            let updated = item.replace(/^[$]/g, "");
            chrome.storage.sync.get(["key"]).then((result) => {
                const dictionary = {
                    "Knoxville": 1.095,
                    "San Diego": 1.0775,
                    "Los Angeles": 1.095,
                    "LA": 1.095,
                    "New York City": 1.088,
                    "NYC": 1.088,
                    "Chicago": 1.1,
                    "Houston": 1.0825,
                    "Phoenix": 1.086
                }
                const taxValue = dictionary[result.key];
                console.log(taxValue);
                let updatedPrice = parseFloat(updated) * taxValue;
                let roundedPrice = updatedPrice.toFixed(2);
                if (isNaN(roundedPrice)) {
                    console.log("Nothing here");
                } else {
                    span.after(createLandingPagePrice(roundedPrice));
                    console.log(roundedPrice);
                }
            });
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

function createLandingPagePrice(price) {
    const prefixEmoji = document.createElement("span");
    const dollarSign = document.createElement("span");
    const wholeNumber = document.createElement("span");
    const cents = document.createElement("span");

    prefixEmoji.classList.add("Price__currency__QSapR");
    dollarSign.classList.add("Price__currency__QSapR");
    wholeNumber.classList.add("Price__whole__mQGs5");
    cents.classList.add("Price__fractional__wJiJp");

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

function getZipCodeTaxRate(key) {
    return new Promise((resolve) => {
        chrome.storage.sync.get(["key"], resolve).then((result) => {
            const dictionary = {
                "Knoxville": 1.095,
                "San Diego": 1.0775,
                "Los Angeles": 1.095,
                "LA": 1.095,
                "New York City": 1.088,
                "NYC": 1.088,
                "Chicago": 1.1,
                "Houston": 1.0825,
                "Phoenix": 1.086
            }
            const taxValue = dictionary[result.key];
            console.log(taxValue);
        });
    })
}