chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, "Action");
	console.log("sent message")
  });