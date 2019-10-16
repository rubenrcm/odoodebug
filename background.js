function openDebugPage() {
	var activeTab = browser.tabs.query({active: true, currentWindow: true});
	//return activeTab[0].url
	return "localhost:9169"
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.update({url: openDebugPage()});
});
