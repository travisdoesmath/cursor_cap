var currentTab;

function popup() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        currentTab = tabs[0];
        chrome.tabs.sendMessage(tabs[0].id, {"message":"getRects"}, function(response) {
            console.log("response: ", response);
            chrome.downloads.download({
                url: response.rects,
                filename: "capture.json"
            })
        })
    })   


    chrome.tabs.captureVisibleTab(
        null, {format: 'png', quality: 100}, function(dataURI) {
            chrome.downloads.download({
                url: dataURI,
                filename: "capture.png"
            })
        }
    )
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('captureVisible').addEventListener("click", popup);
})