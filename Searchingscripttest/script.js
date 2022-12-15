chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("got message")
	if (request == "Action") {
    	f();
	}
});

function f() {
  const selectedText = window.getSelection().toString();
    console.log(selectedText);
  if(selectedText == ""){
    alert("テキストを選択してください。")
  }
  else{
    chrome.tabs.create({url: "https://www.google.com/search?q=${selectedText}+とは"});
  }
}