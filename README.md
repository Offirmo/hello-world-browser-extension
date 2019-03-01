# hello-world-browser-extension

The simplest, most trivial browser extension, featuring:
* content script (aka. injected)
* background script
* toolbar button opening a popup
* options page
* notification
* ...

## references

* https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension
* https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension
* https://developer.chrome.com/extensions/getstarted

API
* permission field
  * permission ids https://developer.chrome.com/extensions/declare_permissions#manifest
  * match patterns https://developer.chrome.com/extensions/match_patterns
  
```json
	"permissions": [
		"alarms",
		"background",
		"bookmarks",
		"clipboardRead",
		"clipboardWrite",
		"contentSettings",
		"contextMenus",
		"cookies",
		"debugger",
		"downloads",
		"geolocation",
		"history",
		"idle",
		"management",
		"nativeMessaging",
		"notifications",
		"storage",
		"tabs",
		"unlimitedStorage",
		"webNavigation"
	],
```

Capabilities
* intercept requests https://developer.chrome.com/extensions/webRequest
* TODO proxy? https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy
* modify request result = not possible? proxy
  * achievable with content script + https://intoli.com/blog/sandbox-breakout/
  
Techniques
* communicate between contexts https://dev.to/christiankaindl/a-webextension-guide-36ag
* using modules https://medium.com/front-end-weekly/es6-modules-in-chrome-extensions-an-introduction-313b3fce955b


See also
* TODO https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices
