chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
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
    window.open('https://www.google.com/search?q=${selectedText}+とは', '_blank'); // 新しいタブを開き、ページを表示
  }
}