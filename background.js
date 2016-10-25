console.log('Hello from hello-world-webextension (background)')

chrome.contextMenus.create({
	id: "hello-world-webextension-1",
	title: "option 1",
	contexts: ["all"]
})

chrome.contextMenus.create({
	id: "hello-world-webextension-2",
	title: "option 2",
	contexts: ["all"]
})

var notification_id = "cake-notification"
chrome.notifications.create(notification_id, {
	"type": "basic",
	"iconUrl": chrome.extension.getURL("icons/icon_48x48.png"),
	"title": "hello-world-webextension notification",
	"message": "hello-world-webextension notif from background"
})
