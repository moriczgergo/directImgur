chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    var url = tab.url;

    var isImage = true;

    if (!url.startsWith("http://imgur.com/")){
        isImage = false;
    }

    var id = url.substring("http://imgur.com/".length);

    if (id.length != 7){
        isImage = false;
    }

    if (isImage){
        chrome.tabs.update(tabId, {url: "http://i.imgur.com/" + id + ".jpg"}, function(tab){});
    }
}); 
