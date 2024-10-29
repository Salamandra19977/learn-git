function block1() {
	let elem = document.getElementById('block1')
	elem.style.background = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`
	elem.style.borderRadius = '25%'
}

function rnd(arg) {
	return Math.floor(Math.random() * arg)
}