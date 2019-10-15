function openDebugPage() {
	console.log("holaholahola")
   browser.tabs.create({
     "url": tab.url
   });
}

browser.browserAction.onClicked.addListener(openDebugPage);
