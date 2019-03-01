console.log(`🧩 [T=${+Date.now()}] Hello from devtools!`, {
	panels: chrome.devtools.panels,
})

// only this script has access to the devtools API
// https://developer.chrome.com/extensions/devtools

chrome.devtools.inspectedWindow.eval(
	"console.log(`🧩 [T=${+Date.now()}] Hello from injected from devtools!`)",
	function(result, isException) { }
);

const PANEL_NAME = 'Offirmo'
chrome.devtools.panels.create(
	PANEL_NAME,
	"icons/icon_48x48.png",
	"ui/devtools-panel.html",
	function(panel) {
		// code invoked on panel creation
		console.log(`🧩 [T=${+Date.now()}] Hello from devtools panel "${PANEL_NAME}" creation!`, panel, chrome.devtools.panels.ExtensionPanel)

		setTimeout(() => {
			console.log('panels = ', chrome.devtools.panels)
		}, 5000)
		/*panel.createSidebarPane(
				"Offirmo Sidebar",
				function(sidebar) {
					 // sidebar initialization code here
					 sidebar.setObject({ some_data: "Some data to show" });
				}
		  );*/
	}
);

