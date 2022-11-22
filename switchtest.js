/*function changeSkin(btn) {
	alert(btn.id);
	switch() {

	}

	document.getElementById('skinURL').src = 
}*/
function changeSkin(btn) {
switch (btn.id) {
case 'skin1': 
	document.getElementById('skinURL').src = './img/skin1.png';
	break;
case 'skin2':
	document.getElementById('skinURL').src = './img/skin2.png';
	break;
case 'skin3':
	document.getElementById('skinURL').src = './img/skin3.png';
	break;
case 'skin4':
	document.getElementById('skinURL').src = './img/skin4.png';
	break;
}
}
/*document.getElementById('skinURL').src = skinColor;*/