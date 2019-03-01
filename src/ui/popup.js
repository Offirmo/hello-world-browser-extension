console.log(`🧩 [T=${+Date.now()}] Hello from popup!`)

async function get_current_tab() {
	return new Promise(resolve => {
		// https://stackoverflow.com/a/39840655/587407
		chrome.tabs.query({active: true, currentWindow: true}, ([current_tab]) => {
			resolve({
				...current_tab,
				url: new URL(current_tab.url),
				index: undefined, // because dangerouns to use
			})
		})
	})
}

get_current_tab()
	.then(infos => {
		console.log('current tab=', infos)
	})


document.addEventListener('click', event => {
	try {
		const { target: clickedElement } = event
		if (!clickedElement)
			throw new Error('click event has no target!')
		console.log('on click', { ...clickedElement})
	} catch (err) {
		console.error('on click', err)
	}
})

function do_sth() {
	chrome.tabs.query({active: true, currentWindow: true}, ([current_tab]) => {
		console.log('current tab')
	});
}
