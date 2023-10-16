window.addEventListener("load", function(event) {
    const getText = document.getElementById('inputText');
    const submitText = document.getElementById('submitButton');
    const displayText = document.getElementById('savedText');

    submitText.addEventListener('click', () => {
        chrome.storage.sync.set({ key: getText.value }).then(() => {
            console.log("Value is set");
            displayText.innerHTML = getText.value;
        });
        
    })
})
    