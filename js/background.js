var default_action = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({is_action : default_action});
});


chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {inAction: request.inAction});
      });
      sendResponse();
  }
);