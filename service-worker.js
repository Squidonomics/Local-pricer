document.getElementById('regButton').addEventListener('click', function () {
    var field = document.createElement('input'); // INPUT also works
    field.setAttribute('type', 'text');
    field.setAttribute('name', 'text');
    document.body.appendChild(field);
    document.body.appendChild(document.createElement("br"));
    });
    field.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        console.log("This works");
        chrome.storage.local.set({myVariable: field.value});
    }
    });