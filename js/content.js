chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("request: ", request);
        if( request.message === "getRects") {
            console.log("getRects called")
            var anchors = Array.from(document.getElementsByTagName('a'));
            var anchorRects = anchors.map(x => x.getBoundingClientRect());
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(anchorRects));
            console.log(dataStr);
            sendResponse({"rects":dataStr})
        }
    }

);
