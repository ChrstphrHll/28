chrome.runtime.sendMessage({type: 'get-28'}, (response) => {
    // do stuff with response (which will be the value of messageQueue
    // sent from background.js).
    document.getElementById("28").innerText = response
});