chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, "Action", (res) => { console.log(res); });
	console.log("sent message")
  });