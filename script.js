function openMenu() {
	if (document.querySelector('.line')) {
		document.querySelector('.line').className = 'lineOpen'
		document.querySelector('.Cross').style.display = 'flex'
	} else {
	document.querySelector('.lineOpen').className = 'line'
	document.querySelector('.Cross').style.display = 'none'
	}
	if (document.querySelector('.menuMobile').style.display === 'flex') {
		document.querySelector('.menuMobile').style.display = 'none'
	} else {
		document.querySelector('.menuMobile').style.display = 'flex'
	}
}