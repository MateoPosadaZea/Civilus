var L1 = 0;
var xa1 = 0;
var xb1 = 0;
var RTa = '';
var RTb = '';
var Parray = [];
var xParray = [];
var Tarray = [];
var Marray = [];
var xMarray = [];
var w1array = [];
var xw1array = [];
var w2array = [];
var xw2array = [];
var RAy = 0;
var RBy = 0;
var RAx = 0;
var RBx = 0;
var FRAy = 0;
var FRBy = 0;
var FMA = 0;
var FMB = 0;
var FRAx = 0;
var FRBx = 0;
var ParrayT = [];
var xParrayT = [];
var MarrayT = [];
var xMarrayT = [];

const modal = document.querySelector('.modal');
const modal__error = document.querySelector('.modal__error');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
function clearInputs() {
	const input = document.querySelectorAll('input');
	for (let i = 0; i < input.length; i++) {
		input[i].value = '';
	}
}
const modal__calculate = document.querySelector('.modal__beam');
const modal_mail = document.querySelector('.modal-donations');
const overlay_mail = document.querySelector('.overlay-mail');
const modal__btn_donations = document.querySelector('.modal__btn-donations');
const openModalDonations = function () {
	modal_mail.classList.remove('hidden');
	overlay_mail.classList.remove('hidden');
};
const closeModalDonations = function () {
	modal_mail.classList.add('hidden');
	overlay_mail.classList.add('hidden');
};
const closeModalEscapeDonations = function () {
	modal_mail.classList.add('hidden');
	overlay_mail.classList.add('hidden');
};
let contador = 0;
modal__calculate.addEventListener('click', function () {
	if (contador === 5) {
		contador = 0;
		openModalDonations();
	}
});

modal__btn_donations.addEventListener('click', closeModalDonations);
overlay.addEventListener('click', () => {
	modal_mail.classList.add('hidden');
	overlay_mail.classList.add('hidden');
});
const openModal = function (error, flag = 0) {
	if (window.screen.width < 700) {
		if (flag) {
			modal.style.top = '45%';
			modal__error.textContent = error;
			modal.classList.remove('hidden');
			overlay.classList.remove('hidden');
		} else {
			modal.style.top = '20%';

			modal__error.textContent = error;
			modal.classList.remove('hidden');
			overlay.classList.remove('hidden');
		}
	} else {
		modal.style.top = '20%';
		modal__error.textContent = error;
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	}
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};
const closeModalEscape = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
});
addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	}
});

const navigation__buttom = document.querySelector('.navigation__buttom');
const navigation__item = document.querySelectorAll('.navigation__item');
const navigation__background = document.querySelector(
	'.navigation__background'
);
const navigation__nav = document.querySelector('.navigation__nav');
navigation__buttom.addEventListener('click', () => {
	navigation__background.classList.toggle('none');
	navigation__nav.classList.toggle('width');
});

for (let i = 0; i < navigation__item.length; i++) {
	navigation__item[i].addEventListener('click', () => {
		navigation__background.classList.toggle('none');
		navigation__nav.classList.toggle('width');
	});
}

function erasecanvas() {
	var ctx = document.getElementById('diagram').getContext('2d');
	ctx.clearRect(0, 0, diagram.width, diagram.height);
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(20, 260);
	ctx.lineTo(20, 340);
	ctx.moveTo(20, 260);
	ctx.lineTo(16, 269);
	ctx.moveTo(5, 325);
	ctx.lineTo(85, 325);
	ctx.moveTo(20, 260);
	ctx.lineTo(24, 269);
	ctx.moveTo(5, 325);
	ctx.lineTo(14, 321);
	ctx.moveTo(5, 325);
	ctx.lineTo(14, 329);
	ctx.moveTo(20, 340);
	ctx.lineTo(16, 331);
	ctx.moveTo(20, 340);
	ctx.lineTo(24, 331);
	ctx.moveTo(85, 325);
	ctx.lineTo(76, 321);
	ctx.moveTo(85, 325);
	ctx.lineTo(76, 329);
	ctx.fillStyle = 'Black';
	ctx.font = '12px Arial';
	ctx.fillText('x', 75, 315);
	ctx.font = '12px Arial';
	ctx.fillText('z', 30, 270);
	ctx.stroke();
}

function isNumberKey(evt) {
	var charCode = evt.which ? evt.which : event.keyCode;
	if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function isNumberKey2(evt) {
	var charCode = evt.which ? evt.which : event.keyCode;
	if (
		charCode > 31 &&
		charCode != 46 &&
		charCode != 45 &&
		(charCode < 48 || charCode > 57)
	)
		return false;
	return true;
}

function changeImageRA() {
	document.getElementById('Axcoord').disabled = false;
	document.getElementById('Bxcoord').disabled = false;
	document.getElementById('Axcoord').style.backgroundColor = 'white';
	document.getElementById('Bxcoord').style.backgroundColor = 'white';

	var img = document.getElementById('supportAimg');
	img.src = './assets/images/roller.svg';
	var img2 = document.getElementById('supportBimg');
	img2.src = './assets/images/pin.svg';
	document.getElementById('stupidrefA').innerHTML = 'rollerA';
	document.getElementById('stupidrefB').innerHTML = 'pinB';
}

function changeImagePA() {
	document.getElementById('Axcoord').disabled = false;
	document.getElementById('Bxcoord').disabled = false;
	document.getElementById('Axcoord').style.backgroundColor = 'white';
	document.getElementById('Bxcoord').style.backgroundColor = 'white';
	var img = document.getElementById('supportAimg');

	img.src = './assets/images/pin.svg';
	var img2 = document.getElementById('supportBimg');
	img2.src = './assets/images/roller.svg';
	document.getElementById('stupidrefA').innerHTML = 'pinA';
	document.getElementById('stupidrefB').innerHTML = 'rollerB';
}

function changeImageFA() {
	var img = document.getElementById('supportAimg');
	img.src = './assets/images/fixed.svg';
	var img2 = document.getElementById('supportBimg');
	img2.src = './assets/images//nonesupport.jpg';
	document.getElementById('Bxcoord').disabled = true;
	document.getElementById('Bxcoord').style.backgroundColor = '#D8D8D8';
	document.getElementById('Axcoord').value = '';
	document.getElementById('Bxcoord').value = '';
	document.getElementById('stupidrefA').innerHTML = 'fixedA';
	document.getElementById('stupidrefB').innerHTML = 'NONE';
	document.getElementById('Axcoord').value = 0;
	document.getElementById('Axcoord').style.backgroundColor = 'white';
	document.getElementById('Axcoord').disabled = false;
}

function changeImageRB() {
	document.getElementById('Axcoord').disabled = false;
	document.getElementById('Bxcoord').disabled = false;
	document.getElementById('Axcoord').style.backgroundColor = 'white';
	document.getElementById('Bxcoord').style.backgroundColor = 'white';
	var img = document.getElementById('supportBimg');

	img.src = './assets/images/roller.svg';
	var img2 = document.getElementById('supportAimg');
	img2.src = './assets/images/pin.svg';
	document.getElementById('stupidrefB').innerHTML = 'rollerB';
	document.getElementById('stupidrefA').innerHTML = 'pinA';
}

function changeImagePB() {
	document.getElementById('Axcoord').disabled = false;
	document.getElementById('Bxcoord').disabled = false;
	document.getElementById('Axcoord').style.backgroundColor = 'white';
	document.getElementById('Bxcoord').style.backgroundColor = 'white';
	var img = document.getElementById('supportBimg');

	img.src = './assets/images/pin.svg';
	var img2 = document.getElementById('supportAimg');
	img2.src = './assets/images/roller.svg';
	document.getElementById('stupidrefB').innerHTML = 'pinB';
	document.getElementById('stupidrefA').innerHTML = 'rollerA';
}

function changeImageFB() {
	var img = document.getElementById('supportBimg');
	img.src = './assets/images/fixedB.svg';
	var img2 = document.getElementById('supportAimg');
	img2.src = './assets/images/nonesupport.jpg';
	document.getElementById('Axcoord').disabled = true;
	document.getElementById('Axcoord').style.backgroundColor = '#D8D8D8';
	document.getElementById('Axcoord').value = '';
	document.getElementById('Bxcoord').value = '';
	document.getElementById('stupidrefB').innerHTML = 'fixedB';
	document.getElementById('stupidrefA').innerHTML = 'NONE';
	document.getElementById('Bxcoord').value = 0;
	document.getElementById('Bxcoord').style.backgroundColor = 'white';
	document.getElementById('Bxcoord').disabled = false;
}

function drawbeam() {
	var supportA = document.getElementById('stupidrefA').innerHTML;
	var supportB = document.getElementById('stupidrefB').innerHTML;
	var L = parseFloat(document.getElementById('Lbeam').value);
	var xa = parseFloat(document.getElementById('Axcoord').value);
	var xb = parseFloat(document.getElementById('Bxcoord').value);
	if (supportA == 'fixedA' || supportB == 'fixedB') {
		if (
			document.getElementById('Lbeam').value == '' ||
			document.getElementById('Lbeam').value == ''
		) {
			openModal(
				'All data have to be correctly typed to proceed to calculus. Please check input values.'
			);
		} else if (L == 0) {
			document.getElementById('problem').innerHTML =
				'Beam lenght L have to be greater than 0.';
			$('#myModal').modal('show');
		} else {
			L1 = L;
			var qL = 440;
			var qxa = 440 * (xa / L);
			var qxb = 440 * (xb / L);
			contador += 1;
			if (supportA == 'fixedA') {
				if (document.getElementById('Axcoord').value == '') {
					openModal(
						'All data have to be correctly typed to proceed to calculus. Please check input values.'
					);
				} else if (xa > L) {
					openModal(
						'x location of support A cannot be greater than beam length L.'
					);
				} else if (xa == L1) {
					erasecanvas();
					var ctx = document.getElementById('diagram').getContext('2d');
					ctx.beginPath();
					ctx.fillStyle = '#AD1F00';
					ctx.fillRect(105, 145, 440, 10);
					drawfixedB(qxa);
					enableAdd();
					xa1 = xa;
					xb1 = 0;
					RTa = 'fixed';
					RTb = '';
					drawBDistance(qxa, qxb);
					eraseLoadData();
				} else {
					erasecanvas();
					var ctx = document.getElementById('diagram').getContext('2d');
					ctx.beginPath();
					ctx.fillStyle = '#AD1F00';
					ctx.fillRect(105, 145, 440, 10);
					drawfixedA(qxa);
					enableAdd();
					xa1 = xa;
					xb1 = 0;
					RTa = 'fixed';
					RTb = '';
					drawBDistance(qxa, qxb);
					eraseLoadData();
				}
			} else if (supportB == 'fixedB') {
				if (document.getElementById('Bxcoord').value == '') {
					openModal(
						'All data have to be correctly typed to proceed to calculus. Please check input values.'
					);
				} else if (xb > L) {
					openModal(
						'x location of support B cannot be greater than beam length L.'
					);
				} else if (xb == 0) {
					contador += 1;
					erasecanvas();
					var ctx = document.getElementById('diagram').getContext('2d');
					ctx.beginPath();
					ctx.fillStyle = '#AD1F00';
					ctx.fillRect(105, 145, 440, 10);
					drawfixedA(qxb);
					enableAdd();
					xb1 = xb;
					xa1 = 0;
					RTb = 'fixed';
					RTa = '';
					drawBDistance(qxa, qxb);
					eraseLoadData();
				} else {
					contador += 1;
					erasecanvas();
					var ctx = document.getElementById('diagram').getContext('2d');
					ctx.beginPath();
					ctx.fillStyle = '#AD1F00';
					ctx.fillRect(105, 145, 440, 10);
					enableAdd();
					drawfixedB(qxb);
					xb1 = xb;
					xa1 = 0;
					RTb = 'fixed';
					RTa = '';
					drawBDistance(qxa, qxb);
					eraseLoadData();
				}
			}
		}
	} else {
		if (
			document.getElementById('Axcoord').value == '' ||
			document.getElementById('Bxcoord').value == '' ||
			document.getElementById('Lbeam').value == ''
		) {
			openModal(
				'All data have to be correctly typed to proceed to calculus. Please check input values.'
			);
		} else if (xa > L) {
			openModal(
				'x location of support A cannot be greater than beam length L.'
			);
		} else if (xb > L) {
			openModal(
				'x location of support B cannot be greater than beam length L.'
			);
		} else if (xa >= xb) {
			openModal(
				'x location of support A cannot be greater than or equal to x position of support B.'
			);
		} else if (supportA == 'NONE' && supportB == 'NONE') {
			openModal('Please define beam supports.');
		} else {
			contador += 1;
			enableAdd();
			erasecanvas();
			L1 = L;
			var qL = 440;
			var qxa = 440 * (xa / L);
			var qxb = 440 * (xb / L);
			var ctx = document.getElementById('diagram').getContext('2d');
			ctx.beginPath();
			ctx.fillStyle = '#AD1F00';
			ctx.fillRect(105, 145, 440, 10);
			if (supportA == 'rollerA') {
				drawroller(qxa);
				drawpin(qxb);
				xa1 = xa;
				xb1 = xb;
				RTa = 'roller';
				RTb = 'pin';
				drawBDistance(qxa, qxb);
				eraseLoadData();
			} else if (supportA == 'pinA') {
				drawpin(qxa);
				drawroller(qxb);
				xa1 = xa;
				xb1 = xb;
				RTa = 'pin';
				RTb = 'roller';
				drawBDistance(qxa, qxb);
				eraseLoadData();
			}
		}
	}
}

function drawpin(qx) {
	var ctx = document.getElementById('diagram').getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(105 + qx, 155);
	ctx.lineTo(105 + 8 + qx, 155 + 10);
	ctx.lineTo(105 - 8 + qx, 155 + 10);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill();
	ctx.moveTo(105 - 12 + qx, 155 + 10);
	ctx.lineTo(105 + 12 + qx, 155 + 10);
	ctx.moveTo(105 - 12 + qx, 155 + 10);
	ctx.lineTo(105 - 12 - 4 + qx, 155 + 10 + 5);
	ctx.moveTo(105 - 12 + 8 + qx, 155 + 10);
	ctx.lineTo(105 - 12 + 8 - 4 + qx, 155 + 10 + 5);
	ctx.moveTo(105 - 12 + 16 + qx, 155 + 10);
	ctx.lineTo(105 - 12 + 16 - 4 + qx, 155 + 10 + 5);
	ctx.moveTo(105 - 12 + 24 + qx, 155 + 10);
	ctx.lineTo(105 - 12 + 24 - 4 + qx, 155 + 10 + 5);
	ctx.stroke();
}

function drawroller(qx) {
	var ctx = document.getElementById('diagram').getContext('2d');
	ctx.beginPath();
	ctx.arc(105 + qx, 160, 5, 0, 2 * Math.PI);
	ctx.fillStyle = 'black';
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
	ctx.stroke();
	ctx.moveTo(105 + qx - 12, 155 + 10);
	ctx.lineTo(105 + qx + 12, 155 + 10);
	ctx.moveTo(105 + qx - 12, 155 + 10);
	ctx.lineTo(105 + qx - 12 - 4, 155 + 10 + 5);
	ctx.moveTo(105 + qx - 12 + 8, 155 + 10);
	ctx.lineTo(105 + qx - 12 + 8 - 4, 155 + 10 + 5);
	ctx.moveTo(105 + qx - 12 + 16, 155 + 10);
	ctx.lineTo(105 + qx - 12 + 16 - 4, 155 + 10 + 5);
	ctx.moveTo(105 + qx - 12 + 24, 155 + 10);
	ctx.lineTo(105 + qx - 12 + 24 - 4, 155 + 10 + 5);
	ctx.stroke();
}

function drawfixedA(qxa) {
	var ctx = document.getElementById('diagram').getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(101 + qxa, 150 - 12);
	ctx.lineTo(101 + qxa, 150 + 12);
	ctx.moveTo(101 + qxa, 150 - 12);
	ctx.lineTo(101 + qxa - 5, 150 - 12 - 4);
	ctx.moveTo(101 + qxa, 150 - 12 + 8);
	ctx.lineTo(101 + qxa - 5, 150 - 12 + 8 - 4);
	ctx.moveTo(101 + qxa, 150 - 12 + 16);
	ctx.lineTo(101 + qxa - 5, 150 - 12 + 16 - 4);
	ctx.moveTo(101 + qxa, 150 - 12 + 24);
	ctx.lineTo(101 + qxa - 5, 150 - 12 + 24 - 4);
	ctx.stroke();
	ctx.fillStyle = '#AD1F00';
	ctx.fillRect(101, 145, 4, 10);
}

function drawfixedB(qxb) {
	var ctx = document.getElementById('diagram').getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(549 - 440 + qxb, 150 - 12);
	ctx.lineTo(549 - 440 + qxb, 150 + 12);
	ctx.moveTo(549 - 440 + qxb, 150 - 12);
	ctx.lineTo(549 - 440 + qxb + 5, 150 - 12 - 4);
	ctx.moveTo(549 - 440 + qxb, 150 - 12 + 8);
	ctx.lineTo(549 - 440 + qxb + 5, 150 - 12 + 8 - 4);
	ctx.moveTo(549 - 440 + qxb, 150 - 12 + 16);
	ctx.lineTo(549 - 440 + qxb + 5, 150 - 12 + 16 - 4);
	ctx.moveTo(549 - 440 + qxb, 150 - 12 + 24);
	ctx.lineTo(549 - 440 + qxb + 5, 150 - 12 + 24 - 4);
	ctx.stroke();
	ctx.fillStyle = '#AD1F00';
	ctx.fillRect(545, 145, 4, 10);
}

var qxa2 = 0;
var qxb2 = 0;

function drawBDistance(qxa, qxb) {
	var ctx = document.getElementById('diagram').getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(105, 145 + 105);
	ctx.lineTo(545, 145 + 105);
	ctx.moveTo(105 + 1, 145 + 105 - 5);
	ctx.lineTo(105 - 1, 145 + 105 + 5);
	ctx.moveTo(545 + 1, 145 + 105 - 5);
	ctx.lineTo(545 - 1, 145 + 105 + 5);
	if (xa1 > 0) {
		ctx.moveTo(105 + qxa + 1, 145 + 105 - 5);
		ctx.lineTo(105 + qxa - 1, 145 + 105 + 5);
		ctx.fillStyle = 'black';
		ctx.font = '12px Arial';
		ctx.fillText(xa1.toFixed(1) + 'm', 105 + qxa / 2 - 10, 145 + 105 - 10);
	}
	if (xb1 != L1) {
		ctx.moveTo(105 + qxb + 1, 145 + 105 - 5);
		ctx.lineTo(105 + qxb - 1, 145 + 105 + 5);
		ctx.fillStyle = 'black';
		ctx.font = '12px Arial';
		ctx.fillText(
			(L1 - xb1).toFixed(1) + 'm',
			105 + qxb + (440 - qxb) / 2 - 10,
			145 + 105 - 10
		);
	}
	ctx.fillStyle = 'black';
	ctx.font = '12px Arial';
	ctx.fillText(
		(xb1 - xa1).toFixed(1) + 'm',
		105 + qxa + (qxb - qxa) / 2 - 10,
		145 + 105 - 10
	);
	if (RTa == 'fixed') {
		ctx.fillStyle = 'black';
		ctx.font = '12px Arial';
		ctx.fillText(
			(L1 - xa1).toFixed(1) + 'm',
			105 + qxa + (440 - qxa) / 2 - 10,
			145 + 105 - 10
		);
	}
	if (RTb == 'fixed' && xb1 != 0) {
		ctx.fillStyle = 'black';
		ctx.font = '12px Arial';
		ctx.fillText(
			xb1.toFixed(1) + 'm',
			105 + qxb + (L1 - qxb) / 2 - 10,
			145 + 105 - 10
		);
	}
	ctx.stroke();
	qxa2 = qxa;
	qxb2 = qxb;
}

function drawmoment() {
	var M = parseFloat(document.getElementById('mload').value);
	var xm = parseFloat(document.getElementById('Mxcoord').value);
	if (
		document.getElementById('mload').value == '' ||
		document.getElementById('Mxcoord').value == '' ||
		document.getElementById('mload').value == 0
	) {
		openModal(
			'All data have to be correctly typed to proceed to calculus. Please check input values.',
			1
		);
	} else if (xm > L1) {
		openModal(
			'x location of point moment cannot be greater than beam lenght L.',
			1
		);
	} else if (M < 0) {
		var qxm = 440 * (xm / L1);
		ctx.beginPath();
		ctx.strokeStyle = '#635D5D';
		ctx.arc(105 + qxm, 150, 20, Math.PI / 2, (3 / 2) * Math.PI);
		ctx.lineWidth = 1;
		ctx.moveTo(105 + qxm, 150 - 20);
		ctx.lineTo(105 + qxm - 4, 150 - 20 - 4);
		ctx.moveTo(105 + qxm, 150 - 20);
		ctx.lineTo(105 + qxm - 4, 150 - 20 + 4);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(105 + qxm, 150, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#635D5D';
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#635D5D';
		ctx.fillStyle = '#635D5D';
		ctx.font = '12px Arial';
		ctx.fillText(math.abs(M) + 'kN-m', 110 + qxm, 150 - 15);
		ctx.stroke();
		addLhide();
		Marray.push(M);
		xMarray.push(xm);
		buildTableM(M, xm);
		distanceLDistance();
	} else {
		var qxm = 440 * (xm / L1);
		ctx.beginPath();
		ctx.strokeStyle = '#635D5D';
		ctx.arc(105 + qxm, 150, 20, -Math.PI / 2, (-3 / 2) * Math.PI);
		ctx.lineWidth = 1;
		ctx.moveTo(105 + qxm, 150 - 20);
		ctx.lineTo(105 + qxm + 4, 150 - 20 - 4);
		ctx.moveTo(105 + qxm, 150 - 20);
		ctx.lineTo(105 + qxm + 4, 150 - 20 + 4);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(105 + qxm, 150, 2, 0, 2 * Math.PI);
		ctx.fillStyle = '#635D5D';
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#635D5D';
		ctx.fillStyle = '#635D5D';
		ctx.font = '12px Arial';
		ctx.fillText(Math.abs(M) + 'kN-m', 123 + qxm, 150 - 15);
		ctx.stroke();
		addLhide();
		Marray.push(M);
		xMarray.push(xm);
		buildTableM(M, xm);
		distanceLDistance();
	}
}

function drawload() {
	var P = parseFloat(document.getElementById('pload').value);
	var xp = parseFloat(document.getElementById('Pxcoord').value);
	var ta = parseFloat(document.getElementById('tetha').value);
	if (
		document.getElementById('pload').value == '' ||
		document.getElementById('Pxcoord').value == '' ||
		document.getElementById('pload').value == 0 ||
		document.getElementById('tetha').value == ''
	) {
		openModal(
			'All data have to be correctly typed to proceed to calculus. Please check input values.',
			1
		);
	} else if (Math.abs(ta) > 180) {
		openModal('Load degree angle θ cannnot be greater than 180.', 1);
	} else if (xp > L1) {
		openModal(
			'x location of point load cannot be greater than beam lenght L.',
			1
		);
	} else if (P < 0) {
		var ctx = document.getElementById('diagram').getContext('2d');
		var qxp = 440 * (xp / L1);
		var tarad = (ta * Math.PI) / 180;
		var v = Math.cos(tarad) * 40;
		var u = Math.sin(tarad) * 40;
		var vx1 = Math.cos(tarad - 0.5586) * 9.434;
		var uy1 = Math.sin(tarad - 0.5586) * 9.434;
		var vx2 = Math.cos(tarad + 0.5586) * 9.434;
		var uy2 = Math.sin(tarad + 0.5586) * 9.434;
		ctx.beginPath();
		ctx.strokeStyle = '#ED0F0F';
		ctx.moveTo(105 + qxp, 145);
		ctx.lineTo(105 + qxp - v, 135 - u);
		ctx.moveTo(105 + qxp, 145);
		ctx.lineTo(105 + qxp - vx1, 145 - uy1);
		ctx.moveTo(105 + qxp, 145);
		ctx.lineTo(105 + qxp - vx2, 145 - uy2);
		ctx.fillStyle = '#ED0F0F';
		ctx.font = '12px Arial';
		ctx.fillText(Math.abs(P) + 'kN', 105 + qxp - v, 136 - u - 2);
		ctx.stroke();
		addLhide();
		Parray.push(P);
		xParray.push(xp);
		Tarray.push(ta);
		buildTableP(P, xp);
		distanceLDistance();
	} else {
		var ctx = document.getElementById('diagram').getContext('2d');
		var qxp = 440 * (xp / L1);
		var tarad = (ta * Math.PI) / 180;
		var v = Math.cos(tarad) * 40;
		var u = Math.sin(tarad) * 40;
		var vx1 = Math.cos(tarad - 0.5586) * 9.434;
		var uy1 = Math.sin(tarad - 0.5586) * 9.434;
		var vx2 = Math.cos(tarad + 0.5586) * 9.434;
		var uy2 = Math.sin(tarad + 0.5586) * 9.434;
		ctx.beginPath();
		ctx.strokeStyle = '#ED0F0F';
		ctx.moveTo(105 + qxp, 155);
		ctx.lineTo(105 + qxp + v, 165 + u);
		ctx.moveTo(105 + qxp, 155);
		ctx.lineTo(105 + qxp + vx1, 155 + uy1);
		ctx.moveTo(105 + qxp, 155);
		ctx.lineTo(105 + qxp + vx2, 155 + uy2);
		ctx.fillStyle = '#ED0F0F';
		ctx.font = '12px Arial';
		ctx.fillText(Math.abs(P) + 'kN', 105 + qxp + v, 166 + u + 10);
		ctx.stroke();
		addLhide();
		Parray.push(P);
		xParray.push(xp);
		Tarray.push(ta);
		buildTableP(P, xp);
		distanceLDistance();
	}
}

function ReDrawLoads() {
	var ctx = document.getElementById('diagram').getContext('2d');
	var P = parseFloat(document.getElementById('pload').value);

	for (let i = 0; i < Parray.length; i++) {
		if (Parray[i] < 0) {
			var qxp = 440 * (xParray[i] / L1);
			var tarad = (Tarray[i] * Math.PI) / 180;
			var v = Math.cos(tarad) * 40;
			var u = Math.sin(tarad) * 40;
			var vx1 = Math.cos(tarad - 0.5586) * 9.434;
			var uy1 = Math.sin(tarad - 0.5586) * 9.434;
			var vx2 = Math.cos(tarad + 0.5586) * 9.434;
			var uy2 = Math.sin(tarad + 0.5586) * 9.434;
			ctx.beginPath();
			ctx.strokeStyle = '#ED0F0F';
			ctx.moveTo(105 + qxp, 145);
			ctx.lineTo(105 + qxp - v, 135 - u);
			ctx.moveTo(105 + qxp, 145);
			ctx.lineTo(105 + qxp - vx1, 145 - uy1);
			ctx.moveTo(105 + qxp, 145);
			ctx.lineTo(105 + qxp - vx2, 145 - uy2);
			ctx.fillStyle = '#ED0F0F';
			ctx.font = '12px Arial';
			ctx.fillText(Math.abs(P) + 'kN', 105 + qxp - v, 136 - u - 2);
			ctx.stroke();
		} else {
			var qxp = 440 * (xParray[i] / L1);
			var tarad = (Tarray[i] * Math.PI) / 180;
			var v = Math.cos(tarad) * 40;
			var u = Math.sin(tarad) * 40;
			var vx1 = Math.cos(tarad - 0.5586) * 9.434;
			var uy1 = Math.sin(tarad - 0.5586) * 9.434;
			var vx2 = Math.cos(tarad + 0.5586) * 9.434;
			var uy2 = Math.sin(tarad + 0.5586) * 9.434;
			ctx.beginPath();
			ctx.strokeStyle = '#ED0F0F';
			ctx.moveTo(105 + qxp, 155);
			ctx.lineTo(105 + qxp + v, 165 + u);
			ctx.moveTo(105 + qxp, 155);
			ctx.lineTo(105 + qxp + vx1, 155 + uy1);
			ctx.moveTo(105 + qxp, 155);
			ctx.lineTo(105 + qxp + vx2, 155 + uy2);
			ctx.fillStyle = '#ED0F0F';
			ctx.font = '12px Arial';
			ctx.fillText(Math.abs(P) + 'kN', 105 + qxp + v, 166 + u + 10);
		}
	}
}

function ReDrawMoments() {
	var ctx = document.getElementById('diagram').getContext('2d');
	for (i = 0; i < Marray.length; i++) {
		if (Marray[i] < 0) {
			var qxm = 440 * (xMarray[i] / L1);
			ctx.beginPath();
			ctx.strokeStyle = '#635D5D';
			ctx.arc(105 + qxm, 150, 20, Math.PI / 2, (3 / 2) * Math.PI);
			ctx.lineWidth = 1;
			ctx.moveTo(105 + qxm, 150 - 20);
			ctx.lineTo(105 + qxm - 4, 150 - 20 - 4);
			ctx.moveTo(105 + qxm, 150 - 20);
			ctx.lineTo(105 + qxm - 4, 150 - 20 + 4);
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.arc(105 + qxm, 150, 2, 0, 2 * Math.PI);
			ctx.fillStyle = '#635D5D';
			ctx.fill();
			ctx.lineWidth = 1;
			ctx.strokeStyle = '#635D5D';
			ctx.fillStyle = '#635D5D';
			ctx.font = '12px Arial';
			ctx.fillText(math.abs(Marray[i]) + 'kN-m', 110 + qxm, 150 - 15);
			ctx.stroke();
		} else {
			var qxm = 440 * (xMarray[i] / L1);
			ctx.beginPath();
			ctx.strokeStyle = '#635D5D';
			ctx.arc(105 + qxm, 150, 20, -Math.PI / 2, (-3 / 2) * Math.PI);
			ctx.lineWidth = 1;
			ctx.moveTo(105 + qxm, 150 - 20);
			ctx.lineTo(105 + qxm + 4, 150 - 20 - 4);
			ctx.moveTo(105 + qxm, 150 - 20);
			ctx.lineTo(105 + qxm + 4, 150 - 20 + 4);
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.arc(105 + qxm, 150, 2, 0, 2 * Math.PI);
			ctx.fillStyle = '#635D5D';
			ctx.fill();
			ctx.lineWidth = 1;
			ctx.strokeStyle = '#635D5D';
			ctx.fillStyle = '#635D5D';
			ctx.font = '12px Arial';
			ctx.fillText(Math.abs(Marray[i]) + 'kN-m', 123 + qxm, 150 - 15);
			ctx.stroke();
		}
	}
}

function drawdistributed() {
	var w1 = parseFloat(document.getElementById('wload1').value);
	var x1 = parseFloat(document.getElementById('Wxcoord1').value);
	var w2 = parseFloat(document.getElementById('wload2').value);
	var x2 = parseFloat(document.getElementById('Wxcoord2').value);

	if (
		document.getElementById('wload1').value == '' ||
		document.getElementById('Wxcoord1').value == '' ||
		document.getElementById('wload2').value == '' ||
		document.getElementById('Wxcoord2').value == ''
	) {
		openModal(
			'All data have to be correctly typed to proceed to calculus. Please check input values.',
			1
		);
	} else if (
		document.getElementById('wload1').value == 0 &&
		document.getElementById('wload2').value == 0
	) {
		openModal(
			'All data have to be correctly typed to proceed to calculus. Please check input values.',
			1
		);
	} else if (0 > w1 * w2) {
		openModal(
			'Start and end magnitudes of distributed load w1 and w2 cannot have opposite directions.',
			1
		);
	} else if (x1 > L1) {
		openModal(
			'Start location of distributed load x1 cannot be greater than beam lenght L',
			1
		);
	} else if (x2 > L1) {
		openModal(
			'End location of distributed load x2 cannot be greater than beam lenght L',
			1
		);
	} else if (x1 >= x2) {
		openModal(
			'Start location of distributed load x1 cannot be greater than or equal to end location x2.',
			1
		);
	} else if (w1 <= 0 && w2 <= 0) {
		var wmax = Math.max(Math.abs(w1), Math.abs(w2));
		var wmin = Math.min(Math.abs(w1), Math.abs(w2));
		var qwmax = 35;
		var qwmin = 35 * (wmin / wmax);
		var qx1 = 440 * (x1 / L1);
		var qx2 = 440 * (x2 / L1);
		var qxl = qx2 - qx1;
		var ctx = document.getElementById('diagram').getContext('2d');
		if (Math.abs(w1) >= Math.abs(w2)) {
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1, 145 - 35);
			ctx.lineTo(105 + qx1 + qxl, 145 - qwmin);
			ctx.lineTo(105 + qx1 + qxl, 145);
			ctx.closePath();
			ctx.fillStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.moveTo(105 + qx1, 145 - 35);
			ctx.lineTo(105 + qx1 + qxl, 145 - qwmin);
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1, 145 - 35);
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1 - 3, 145 - 4);
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1 + 3, 145 - 4);
			ctx.moveTo(105 + qx1 + qxl, 145);
			ctx.lineTo(105 + qx1 + qxl, 145 - qwmin);
			ctx.moveTo(105 + qx1 + qxl, 145);
			ctx.lineTo(105 + qx1 + qxl - 3 * (w2 / w1), 145 - 4 * (w2 / w1));
			ctx.moveTo(105 + qx1 + qxl, 145);
			ctx.lineTo(105 + qx1 + qxl + 3 * (w2 / w1), 145 - 4 * (w2 / w1));
			ctx.fillStyle = 'black';
			ctx.font = '12px Arial';
			ctx.fillText(Math.abs(w1) + 'kN/m', 105 + qx1 - 8, 145 - 35 - 8);
			if (w2 != 0 && w1 != w2) {
				ctx.fillText(
					Math.abs(w2) + 'kN/m',
					105 + qx1 + qxl - 35,
					145 - qwmin - 8
				);
			}
			ctx.stroke();
			addLhide();
			w1array.push(w1);
			xw1array.push(x1);
			w2array.push(w2);
			xw2array.push(x2);
			buildTableW2(w2, x2);
			buildTableW1(w1, x1);
			distanceLDistance();
		} else {
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1, 145 - qwmin);
			ctx.lineTo(105 + qx1 + qxl, 145 - 35);
			ctx.lineTo(105 + qx1 + qxl, 145);
			ctx.closePath();
			ctx.fillStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.moveTo(105 + qx1, 145 - qwmin);
			ctx.lineTo(105 + qx1 + qxl, 145 - 35);
			ctx.moveTo(105 + qx1 + qxl, 145);
			ctx.lineTo(105 + qx1 + qxl, 145 - 35);
			ctx.moveTo(105 + qx1 + qxl, 145);
			ctx.lineTo(105 + qx1 + qxl - 3, 145 - 4);
			ctx.moveTo(105 + qx1 + qxl, 145);
			ctx.lineTo(105 + qx1 + qxl + 3, 145 - 4);
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1, 145 - qwmin);
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1 - 3 * (w1 / w2), 145 - 4 * (w1 / w2));
			ctx.moveTo(105 + qx1, 145);
			ctx.lineTo(105 + qx1 + 3 * (w1 / w2), 145 - 4 * (w1 / w2));
			ctx.fillStyle = 'black';
			ctx.font = '12px Arial';
			if (w1 != 0 && w1 != w2) {
				ctx.fillText(Math.abs(w1) + 'kN/m', 105 + qx1 - 35, 145 - qwmin - 8);
			}
			ctx.fillText(Math.abs(w2) + 'kN/m', 105 + qx1 + qxl - 8, 145 - 35 - 8);
			ctx.stroke();
			addLhide();
			w1array.push(w1);
			xw1array.push(x1);
			w2array.push(w2);
			xw2array.push(x2);
			buildTableW2(w2, x2);
			buildTableW1(w1, x1);
			distanceLDistance();
		}
	} else if (0 <= w1 && 0 <= w2) {
		var wmax = Math.max(Math.abs(w1), Math.abs(w2));
		var wmin = Math.min(Math.abs(w1), Math.abs(w2));
		var qwmax = 35;
		var qwmin = 35 * (wmin / wmax);
		var qx1 = 440 * (x1 / L1);
		var qx2 = 440 * (x2 / L1);
		var qxl = qx2 - qx1;
		var ctx = document.getElementById('diagram').getContext('2d');
		if (Math.abs(w1) >= Math.abs(w2)) {
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1, 155 + 35);
			ctx.lineTo(105 + qx1 + qxl, 155 + qwmin);
			ctx.lineTo(105 + qx1 + qxl, 155);
			ctx.closePath();
			ctx.fillStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.moveTo(105 + qx1, 155 + 35);
			ctx.lineTo(105 + qx1 + qxl, 155 + qwmin);
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1, 155 + 35);
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1 - 3, 155 + 4);
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1 + 3, 155 + 4);
			ctx.moveTo(105 + qx1 + qxl, 155);
			ctx.lineTo(105 + qx1 + qxl, 155 + qwmin);
			ctx.moveTo(105 + qx1 + qxl, 155);
			ctx.lineTo(105 + qx1 + qxl - 3 * (w2 / w1), 155 + 4 * (w2 / w1));
			ctx.moveTo(105 + qx1 + qxl, 155);
			ctx.lineTo(105 + qx1 + qxl + 3 * (w2 / w1), 155 + 4 * (w2 / w1));
			ctx.fillStyle = 'black';
			ctx.font = '12px Arial';
			ctx.fillText(Math.abs(w1) + 'kN/m', 105 + qx1 - 8, 155 + 35 + 12);
			if (w2 != 0 && w1 != w2) {
				ctx.fillText(
					Math.abs(w2) + 'kN/m',
					105 + qx1 + qxl - 35,
					155 + qwmin + 12
				);
			}
			ctx.stroke();
			addLhide();
			w1array.push(w1);
			xw1array.push(x1);
			w2array.push(w2);
			xw2array.push(x2);
			buildTableW2(w2, x2);
			buildTableW1(w1, x1);
			distanceLDistance();
		} else {
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1, 155 + qwmin);
			ctx.lineTo(105 + qx1 + qxl, 155 + 35);
			ctx.lineTo(105 + qx1 + qxl, 155);
			ctx.closePath();
			ctx.fillStyle = 'rgba(235, 235, 235, 0.5)';
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.moveTo(105 + qx1, 155 + qwmin);
			ctx.lineTo(105 + qx1 + qxl, 155 + 35);
			ctx.moveTo(105 + qx1 + qxl, 155);
			ctx.lineTo(105 + qx1 + qxl, 155 + 35);
			ctx.moveTo(105 + qx1 + qxl, 155);
			ctx.lineTo(105 + qx1 + qxl - 3, 155 + 4);
			ctx.moveTo(105 + qx1 + qxl, 155);
			ctx.lineTo(105 + qx1 + qxl + 3, 155 + 4);
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1, 155 + qwmin);
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1 - 3 * (w1 / w2), 155 + 4 * (w1 / w2));
			ctx.moveTo(105 + qx1, 155);
			ctx.lineTo(105 + qx1 + 3 * (w1 / w2), 155 + 4 * (w1 / w2));
			ctx.fillStyle = 'black';
			ctx.font = '12px Arial';
			if (w1 != 0 && w1 != w2) {
				ctx.fillText(Math.abs(w1) + 'kN/m', 105 + qx1 - 35, 155 + qwmin + 12);
			}
			ctx.fillText(Math.abs(w2) + 'kN/m', 105 + qx1 + qxl - 8, 155 + 35 + 12);
			ctx.stroke();
			addLhide();
			w1array.push(w1);
			xw1array.push(x1);
			w2array.push(w2);
			xw2array.push(x2);
			buildTableW2(w2, x2);
			buildTableW1(w1, x1);
			distanceLDistance();
		}
	}
	ReDrawLoads();
	ReDrawMoments();
}

function distanceLDistance() {
	var i = 0;
	var j = 0;
	var xLoads = [];
	xLoads = xParray.concat(xMarray, xw1array, xw2array);

	function checkXloadsA(xsupp) {
		return xsupp != xa1;
	}

	function checkXloadsB(xsupp) {
		return xsupp != xb1;
	}

	function checkXloadsL(xsupp) {
		return xsupp != L1;
	}

	function checkXloads0(xsupp) {
		return xsupp != 0;
	}

	xLoads = xLoads.filter(checkXloadsA);
	xLoads = xLoads.filter(checkXloadsB);
	xLoads = xLoads.filter(checkXloadsL);
	xLoads = xLoads.filter(checkXloads0);

	if (xa1 != 0) {
		xLoads.push(xa1);
	}
	if (xb1 != L1 && xb1 != 0) {
		xLoads.push(xb1);
	}
	if (xw1array[0] == 0) {
		xLoads.push(xa1);
	}
	if (xw2array[0] == L1) {
		xLoads.push(xb1);
	}

	xLoads.sort(function (a, b) {
		return a - b;
	});

	var ctx = document.getElementById('diagram').getContext('2d');
	ctx.clearRect(90, 10, 500, 75);
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(105, 145 - 95);
	ctx.lineTo(545, 145 - 95);
	ctx.moveTo(105 + 1, 145 - 95 - 5);
	ctx.lineTo(105 - 1, 145 - 95 + 5);
	ctx.moveTo(545 + 1, 145 - 95 - 5);
	ctx.lineTo(545 - 1, 145 - 95 + 5);

	for (i = 0; i < xLoads.length; i++) {
		var qxi = 440 * (xLoads[i] / L1);
		ctx.moveTo(105 + qxi + 1, 145 - 95 - 5);
		ctx.lineTo(105 + qxi - 1, 145 - 95 + 5);
	}

	ctx.fillStyle = 'black';
	ctx.font = '12px Arial';
	if (xLoads[0] > 0) {
		ctx.fillText(
			xLoads[0].toFixed(1) + 'm',
			105 + (440 * xLoads[0]) / L1 / 2 - 10,
			145 - 95 - 10
		);
	}
	for (i = 1; i < xLoads.length; i++) {
		var xi = xLoads[i] - xLoads[i - 1];
		var qxi = (440 * (xLoads[i - 1] + (xLoads[i] - xLoads[i - 1]) / 2)) / L1;
		ctx.fillStyle = 'black';
		ctx.font = '12px Arial';
		if (xi > 0) {
			ctx.fillText(xi.toFixed(1) + 'm', 105 + qxi - 10, 145 - 95 - 10);
		}
		j = i;
	}

	var xif = xLoads[j] + (L1 - xLoads[j]) / 2;
	var qxif = (440 * xif) / L1;
	if (L1 - xLoads[j] > 0) {
		ctx.fillText(
			(L1 - xLoads[j]).toFixed(1) + 'm',
			105 + qxif - 10,
			145 - 95 - 10
		);
	}
	ctx.stroke();
}

function enableAdd() {
	document.getElementById('addLoad').disabled = false;
	document.getElementById('delete').disabled = false;
	document.getElementById('test').disabled = false;
	document.getElementById('removeLoads').disabled = false;
	document.getElementById('draw').disabled = true;
	document.getElementById('Lbeam').disabled = true;
	document.getElementById('Axcoord').disabled = true;
	document.getElementById('Bxcoord').disabled = true;
	document.getElementById('support1').disabled = true;
	document.getElementById('support2').disabled = true;
}

function addLPyes() {
	document.getElementById('inputLP').style.display = 'block';
	document.getElementById('inputLM').style.display = 'none';
	document.getElementById('inputLw').style.display = 'none';
}

function addLMyes() {
	document.getElementById('inputLM').style.display = 'block';
	document.getElementById('inputLP').style.display = 'none';
	document.getElementById('inputLw').style.display = 'none';
}

function addLwyes() {
	document.getElementById('inputLw').style.display = 'block';
	document.getElementById('inputLP').style.display = 'none';
	document.getElementById('inputLM').style.display = 'none';
}

function addLhide() {
	document.getElementById('inputLw').style.display = 'none';
	document.getElementById('inputLP').style.display = 'none';
	document.getElementById('inputLM').style.display = 'none';
}

function buildTableM(Minsert, xMinsert) {
	const tableResult = document.querySelectorAll('.beam__results-info');
	tableResult.forEach((element, i) => {
		let width = document.body.clientWidth;
		if (width < 1070 && i === 0) {
			element.style.display = 'block';
		} else if (width > 1070 && i === 1) {
			element.style.display = 'block';
		}
	});
	const myTable = document.querySelectorAll('.beam__results-table');
	myTable.forEach((table) => {
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = 'M<sub>' + Marray.length + '</sub> (kN-m)';
		cell1.style.fontWeight = 'bold';
		cell1.style.display = 'inline-block';
		cell1.style.marginRight = '20px';
		cell1.style.paddingTop = '20px';
		cell1.style.paddingBottom = '10px';
		cell2.innerHTML = Minsert.toFixed(1);
		cell2.style.paddingTop = '20px';
		cell2.style.paddingBottom = '10px';

		cell3.innerHTML = 'x (m)';
		cell3.style.display = 'inline-block';
		cell3.style.marginRight = '20px';
		cell3.style.marginLeft = '20px';
		cell3.style.fontWeight = 'bold';
		cell3.style.paddingTop = '20px';
		cell3.style.paddingBottom = '10px';

		cell4.innerHTML = xMinsert.toFixed(1);
		cell4.style.paddingTop = '20px';
		cell4.style.paddingBottom = '10px';
	});
}

function buildTableP(Pinsert, xPinsert) {
	const tableResult = document.querySelectorAll('.beam__results-info');
	tableResult.forEach((element, i) => {
		let width = document.body.clientWidth;
		if (width < 1070 && i === 0) {
			element.style.display = 'block';
		} else if (width > 1070 && i === 1) {
			element.style.display = 'block';
		}
	});
	const myTable = document.querySelectorAll('.beam__results-table');
	myTable.forEach((table) => {
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = 'P<sub>' + Parray.length + '</sub> (kN)';
		cell1.style.fontWeight = 'bold';
		cell1.style.display = 'inline-block';
		cell1.style.marginRight = '20px';
		cell1.style.paddingTop = '20px';
		cell1.style.paddingBottom = '10px';

		cell2.innerHTML = Pinsert.toFixed(1);
		cell2.style.paddingTop = '20px';
		cell2.style.paddingBottom = '10px';
		cell3.innerHTML = 'x (m)';
		cell3.style.display = 'inline-block';
		cell3.style.marginRight = '20px';
		cell3.style.marginLeft = '20px';
		cell3.style.fontWeight = 'bold';
		cell3.style.paddingTop = '20px';
		cell3.style.paddingBottom = '10px';

		cell4.innerHTML = xPinsert.toFixed(1);
		cell4.style.paddingTop = '20px';
		cell4.style.paddingBottom = '10px';
	});
}

function buildTableW1(w1insert, x1insert) {
	const tableResult = document.querySelectorAll('.beam__results-info');
	tableResult.forEach((element, i) => {
		let width = document.body.clientWidth;
		if (width < 1070 && i === 0) {
			element.style.display = 'block';
		} else if (width > 1070 && i === 1) {
			element.style.display = 'block';
		}
	});
	const myTable = document.querySelectorAll('.beam__results-table');
	myTable.forEach((table) => {
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		row.style.border = 'none';
		cell1.innerHTML = 'w<sub>' + w1array.length + '</sub> (kN/m)';
		cell1.style.fontWeight = 'bold';
		cell1.style.display = 'inline-block';
		cell1.style.paddingTop = '20px';
		cell1.style.paddingBottom = '10px';

		cell1.style.marginRight = '20px';
		cell2.innerHTML = w1insert.toFixed(1);
		cell2.style.paddingTop = '20px';
		cell2.style.paddingBottom = '10px';

		cell3.style.display = 'inline-block';
		cell3.style.marginRight = '20px';
		cell3.style.marginLeft = '20px';
		cell3.style.paddingTop = '20px';
		cell3.innerHTML = 'x<sub>1</sub> (m)';
		cell3.style.fontWeight = 'bold';
		cell3.style.paddingBottom = '10px';

		cell4.innerHTML = x1insert.toFixed(1);
		cell4.style.paddingTop = '20px';
		cell4.style.paddingBottom = '10px';
	});
}

function buildTableW2(w2insert, x2insert) {
	const tableResult = document.querySelectorAll('.beam__results-info');
	tableResult.forEach((element, i) => {
		let width = document.body.clientWidth;
		if (width < 1070 && i === 0) {
			element.style.display = 'block';
		} else if (width > 1070 && i === 1) {
			element.style.display = 'block';
		}
	});
	const myTable = document.querySelectorAll('.beam__results-table');
	myTable.forEach((table) => {
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = '';
		cell3.style.display = 'inline-block';

		cell2.innerHTML = w2insert.toFixed(1);
		cell2.style.paddingTop = '20px';
		cell2.style.paddingBottom = '10px';

		cell3.innerHTML = 'x<sub>2</sub> (m)';
		cell3.style.paddingTop = '20px';
		cell3.style.paddingBottom = '10px';

		cell3.style.display = 'inline-block';
		cell3.style.marginLeft = '20px';
		cell3.style.fontWeight = 'bold';
		cell4.innerHTML = x2insert.toFixed(1);
		cell4.style.paddingTop = '20px';
		cell4.style.paddingBottom = '10px';

		cell1.style.border = 'none';
		cell2.style.border = 'none';
		cell3.style.border = 'none';
		cell4.style.border = 'none';
	});
}

function eraseLoadData() {
	$('#loadTable tr').remove();
	document.getElementById('LoadInfo').style.display = 'none';
	const tableResult = document.querySelectorAll('.beam__results-info');
	tableResult.forEach((element) => {
		element.style.display = 'none';
	});
	Parray = [];
	xParray = [];
	Marray = [];
	xMarray = [];
	w1array = [];
	xw1array = [];
	w2array = [];
	xw2array = [];
	Tarray = [];
	ParrayT = [];
	xParrayT = [];
	MarrayT = [];
	xMarrayT = [];
}

function deleteData() {
	clearInputs();
	erasecanvas();
	eraseLoadData();
	document.getElementById('draw').disabled = false;
	document.getElementById('Lbeam').disabled = false;
	document.getElementById('Axcoord').disabled = false;
	document.getElementById('Bxcoord').disabled = false;
	document.getElementById('support1').disabled = false;
	document.getElementById('support2').disabled = false;
	document.getElementById('addLoad').disabled = true;
	document.getElementById('test').disabled = true;
	document.getElementById('delete').disabled = true;
	document.getElementById('removeLoads').disabled = true;
	erasecanvas2();
	var XValues0 = [];
	var SValues0 = [];
	var MValues0 = [];
	for (var k = 0; k < L1; k += L1 / 400) {
		XValues0.push(k.toFixed(2));
		SValues0.push(0);
		MValues0.push(0);
	}
	drawShear(XValues0, SValues0);
	drawMoment(XValues0, MValues0);
}

function deleteLoads() {
	eraseLoadData();
	erasecanvas();
	drawbeam();
	erasecanvas2();
	var XValues0 = [];
	var SValues0 = [];
	var MValues0 = [];
	for (var k = 0; k < L1; k += L1 / 400) {
		XValues0.push(k.toFixed(2));
		SValues0.push(0);
		MValues0.push(0);
	}
	drawShear(XValues0, SValues0);
	drawMoment(XValues0, MValues0);
}

function erasecanvas2() {
	var ctx = document.getElementById('FreeBody').getContext('2d');
	ctx.clearRect(0, 0, diagram.width, diagram.height);
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(20, 260);
	ctx.lineTo(20, 340);
	ctx.moveTo(20, 260);
	ctx.lineTo(16, 269);
	ctx.moveTo(5, 325);
	ctx.lineTo(85, 325);
	ctx.moveTo(20, 260);
	ctx.lineTo(24, 269);
	ctx.moveTo(5, 325);
	ctx.lineTo(14, 321);
	ctx.moveTo(5, 325);
	ctx.lineTo(14, 329);
	ctx.moveTo(20, 340);
	ctx.lineTo(16, 331);
	ctx.moveTo(20, 340);
	ctx.lineTo(24, 331);
	ctx.moveTo(85, 325);
	ctx.lineTo(76, 321);
	ctx.moveTo(85, 325);
	ctx.lineTo(76, 329);
	ctx.fillStyle = 'Black';
	ctx.font = '12px Arial';
	ctx.fillText('x', 75, 315);
	ctx.font = '12px Arial';
	ctx.fillText('z', 30, 270);
	ctx.stroke();
}

function ReactionsPinA() {
	var FMoment = 0;
	var FPunctual = 0;
	var FDistributed = 0;
	var i = 0;
	var K = 0;
	var FyPunctual = 0;
	var FyDistributed = 0;
	var FxPunctual = 0;

	for (i = 0; i < Marray.length; i++) {
		FMoment = Marray[i] / (xb1 - xa1) + FMoment;
	}

	for (i = 0; i < Parray.length; i++) {
		var Py = Parray[i] * Math.abs(Math.sin((Tarray[i] * Math.PI) / 180));
		var Px = Parray[i] * Math.abs(Math.cos((Tarray[i] * Math.PI) / 180));
		FPunctual = (-1 * Py * (xParray[i] - xa1)) / (xb1 - xa1) + FPunctual;
		FyPunctual = -1 * Py + FyPunctual;
		var Kdir = 1;
		if (Tarray[i] > 90 && Py < 0) {
			Kdir = -1;
		} else if (Tarray[i] > 90 && Py > 0) {
			Kdir = -1;
		}
		FxPunctual = Kdir * Px + FxPunctual;
	}

	for (i = 0; i < w1array.length; i++) {
		var wmin1 = Math.min(Math.abs(w1array[i]), Math.abs(w2array[i]));
		var wT = ((w1array[i] + w2array[i]) * (xw2array[i] - xw1array[i])) / 2;
		var lwD = xw2array[i] - xw1array[i];
		if (Math.abs(w1array[i]) < Math.abs(w2array[i])) {
			K = 2 / 3;
		} else {
			K = 1 / 3;
		}
		var wArm =
			(lwD ** 2 / (2 * Math.abs(wT))) *
			(wmin1 + K * Math.abs(w1array[i] - w2array[i]));
		FDistributed =
			(-1 * wT * (xw1array[i] - xa1 + wArm)) / (xb1 - xa1) + FDistributed;
		FyDistributed = -1 * wT + FyDistributed;
	}

	RBy = FPunctual + FDistributed + FMoment;
	RAy = FyPunctual + FyDistributed - RBy;
	RBx = FxPunctual;
	RAx = FxPunctual;

	drawReactions();
	ParrayT = Parray;
	ParrayT.push(RAy);
	ParrayT.push(RBy);
	xParrayT = xParray;
	xParrayT.push(xa1);
	xParrayT.push(xb1);
	MarrayT = Marray;
	xMarrayT = xMarray;
}

function ReactionsFix() {
	var FMoment = 0;
	var FMPunctual = 0;
	var FMDistributed = 0;
	var i = 0;
	var K = 0;
	var FyPunctual = 0;
	var FyDistributed = 0;
	var FxPunctual = 0;
	var xF = 0;
	if (RTa == 'fixed') {
		xF = xa1;
	} else {
		xF = xb1;
	}
	for (i = 0; i < Marray.length; i++) {
		FMoment = Marray[i] + FMoment;
	}

	for (i = 0; i < Parray.length; i++) {
		var Py = Parray[i] * Math.abs(Math.sin((Tarray[i] * Math.PI) / 180));
		var Px = Parray[i] * Math.abs(Math.cos((Tarray[i] * Math.PI) / 180));
		FMPunctual = -1 * Py * (xParray[i] - xF) + FMPunctual;
		FyPunctual = -1 * Py + FyPunctual;
		var Kdir = 1;
		if (Tarray[i] > 90 && Py < 0) {
			Kdir = -1;
		} else if (Tarray[i] > 90 && Py > 0) {
			Kdir = -1;
		}
		FxPunctual = Kdir * Px + FxPunctual;
	}

	for (i = 0; i < w1array.length; i++) {
		var wmin1 = Math.min(Math.abs(w1array[i]), Math.abs(w2array[i]));
		var wT = ((w1array[i] + w2array[i]) * (xw2array[i] - xw1array[i])) / 2;
		var lwD = xw2array[i] - xw1array[i];
		if (Math.abs(w1array[i]) < Math.abs(w2array[i])) {
			K = 2 / 3;
		} else {
			K = 1 / 3;
		}
		var wArm =
			(lwD ** 2 / (2 * Math.abs(wT))) *
			(wmin1 + K * Math.abs(w1array[i] - w2array[i]));
		FMDistributed = -1 * wT * (xw1array[i] - xF + wArm) + FMDistributed;
		FyDistributed = -1 * wT + FyDistributed;
	}

	FRAy = FyPunctual + FyDistributed;
	FRBy = FyPunctual + FyDistributed;
	FMA = -1 * (FMPunctual + FMDistributed + FMoment);
	FMB = -1 * (FMPunctual + FMDistributed + FMoment);
	FRAx = FxPunctual;
	FRBx = FxPunctual;

	drawReactionsFix();

	ParrayT = Parray;
	ParrayT.push(FRAy);
	xParrayT = xParray;
	xParrayT.push(xF);
	MarrayT = Marray;
	MarrayT.push(FMA);
	xMarrayT = xMarray;
	xMarrayT.push(xF);
}

function drawaxesFB() {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx2.moveTo(20, 260);
	ctx2.lineTo(20, 340);
	ctx2.moveTo(20, 260);
	ctx2.lineTo(16, 269);
	ctx2.moveTo(5, 325);
	ctx2.lineTo(85, 325);
	ctx2.moveTo(20, 260);
	ctx2.lineTo(24, 269);
	ctx2.moveTo(5, 325);
	ctx2.lineTo(14, 321);
	ctx2.moveTo(5, 325);
	ctx2.lineTo(14, 329);
	ctx2.moveTo(20, 340);
	ctx2.lineTo(16, 331);
	ctx2.moveTo(20, 340);
	ctx2.lineTo(24, 331);
	ctx2.moveTo(85, 325);
	ctx2.lineTo(76, 321);
	ctx2.moveTo(85, 325);
	ctx2.lineTo(76, 329);
	ctx2.fillStyle = 'black';
	ctx2.font = '12px Arial';
	ctx2.fillText('x', 75, 315);
	ctx2.font = '12px Arial';
	ctx2.fillText('z', 30, 270);
	ctx2.stroke();
}

function drawBDistanceFB(qxa, qxb) {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	ctx2.beginPath();
	ctx2.strokeStyle = 'black';
	ctx2.moveTo(105, 145 + 135);
	ctx2.lineTo(545, 145 + 135);
	ctx2.moveTo(105 + 1, 145 + 135 - 5);
	ctx2.lineTo(105 - 1, 145 + 135 + 5);
	ctx2.moveTo(545 + 1, 145 + 135 - 5);
	ctx2.lineTo(545 - 1, 145 + 135 + 5);
	if (xa1 > 0) {
		ctx2.moveTo(105 + qxa + 1, 145 + 135 - 5);
		ctx2.lineTo(105 + qxa - 1, 145 + 135 + 5);
		ctx2.fillStyle = 'black';
		ctx2.font = '12px Arial';
		ctx2.fillText(xa1.toFixed(1) + 'm', 105 + qxa / 2 - 10, 145 + 135 - 10);
	}
	if (xb1 != L1) {
		ctx2.moveTo(105 + qxb + 1, 145 + 135 - 5);
		ctx2.lineTo(105 + qxb - 1, 145 + 135 + 5);
		ctx2.fillStyle = 'black';
		ctx2.font = '12px Arial';
		ctx2.fillText(
			(L1 - xb1).toFixed(1) + 'm',
			105 + qxb + (440 - qxb) / 2 - 10,
			145 + 135 - 10
		);
	}
	ctx2.fillStyle = 'black';
	ctx2.font = '12px Arial';
	ctx2.fillText(
		(xb1 - xa1).toFixed(1) + 'm',
		105 + qxa + (qxb - qxa) / 2 - 10,
		145 + 135 - 10
	);
	if (RTa == 'fixed') {
		ctx2.fillStyle = 'black';
		ctx2.font = '12px Arial';
		ctx2.fillText(
			(L1 - xa1).toFixed(1) + 'm',
			105 + qxa + (440 - qxa) / 2 - 10,
			145 + 135 - 10
		);
	}
	if (RTb == 'fixed' && xb1 != 0) {
		ctx2.fillStyle = 'black';
		ctx2.font = '12px Arial';
		ctx2.fillText(
			xb1.toFixed(1) + 'm',
			105 + qxb + (L1 - qxb) / 2 - 10,
			145 + 135 - 10
		);
	}
	ctx2.stroke();
}

function distanceLDistanceFB() {
	var i = 0;
	var xLoads2 = [];
	var j = 0;
	xLoads2 = xParray.concat(xMarray, xw1array, xw2array);

	if (xa1 != 0) {
		xLoads2.push(xa1);
	}
	if (xb1 != L1 && xb1 != 0) {
		xLoads2.push(xb1);
	}

	xLoads2.sort(function (a, b) {
		return a - b;
	});

	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	ctx2.clearRect(90, 10, 500, 75);
	ctx2.beginPath();
	ctx2.strokeStyle = 'black';
	ctx2.moveTo(105, 145 - 95);
	ctx2.lineTo(545, 145 - 95);
	ctx2.moveTo(105 + 1, 145 - 95 - 5);
	ctx2.lineTo(105 - 1, 145 - 95 + 5);
	ctx2.moveTo(545 + 1, 145 - 95 - 5);
	ctx2.lineTo(545 - 1, 145 - 95 + 5);

	for (i = 0; i < xLoads2.length; i++) {
		var qxi = 440 * (xLoads2[i] / L1);
		ctx2.moveTo(105 + qxi + 1, 145 - 95 - 5);
		ctx2.lineTo(105 + qxi - 1, 145 - 95 + 5);
	}

	ctx2.fillStyle = 'black';
	ctx2.font = '12px Arial';
	if (xLoads2[0] > 0) {
		ctx2.fillText(
			xLoads2[0].toFixed(1) + 'm',
			105 + (440 * xLoads2[0]) / L1 / 2 - 10,
			145 - 95 - 10
		);
	}
	for (i = 1; i < xLoads2.length; i++) {
		var xi = xLoads2[i] - xLoads2[i - 1];
		var qxi = (440 * (xLoads2[i - 1] + (xLoads2[i] - xLoads2[i - 1]) / 2)) / L1;
		ctx2.fillStyle = 'black';
		ctx2.font = '12px Arial';
		if (xi > 0) {
			ctx2.fillText(xi.toFixed(1) + 'm', 105 + qxi - 10, 145 - 95 - 10);
		}
		j = i;
	}

	var xif = xLoads2[j] + (L1 - xLoads2[j]) / 2;
	var qxif = (440 * xif) / L1;
	if (L1 - xLoads2[j] > 0) {
		ctx2.fillText(
			(L1 - xLoads2[j]).toFixed(1) + 'm',
			105 + qxif - 10,
			145 - 95 - 10
		);
	}
	ctx2.stroke();
}

function drawLoadsFB() {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	for (let i = 0; i < Parray.length; i++) {
		if (Parray[i] < 0) {
			var qxp = 440 * (xParray[i] / L1);
			var tarad = (Tarray[i] * Math.PI) / 180;
			var v = Math.cos(tarad) * 40;
			var u = Math.sin(tarad) * 40;
			var vx1 = Math.cos(tarad - 0.5586) * 9.434;
			var uy1 = Math.sin(tarad - 0.5586) * 9.434;
			var vx2 = Math.cos(tarad + 0.5586) * 9.434;
			var uy2 = Math.sin(tarad + 0.5586) * 9.434;
			ctx2.beginPath();
			ctx2.strokeStyle = '#ED0F0F';
			ctx2.moveTo(105 + qxp, 145);
			ctx2.lineTo(105 + qxp - v, 145 - u);
			ctx2.moveTo(105 + qxp, 145);
			ctx2.lineTo(105 + qxp - vx1, 145 - uy1);
			ctx2.moveTo(105 + qxp, 145);
			ctx2.lineTo(105 + qxp - vx2, 145 - uy2);
			ctx2.fillStyle = '#ED0F0F';
			ctx2.font = '12px Arial';
			ctx2.fillText(Math.abs(Parray[i]) + 'kN', 105 + qxp - v, 145 - u - 2);
			ctx2.stroke();
		} else {
			var qxp = 440 * (xParray[i] / L1);
			var tarad = (Tarray[i] * Math.PI) / 180;
			var v = Math.cos(tarad) * 40;
			var u = Math.sin(tarad) * 40;
			var vx1 = Math.cos(tarad - 0.5586) * 9.434;
			var uy1 = Math.sin(tarad - 0.5586) * 9.434;
			var vx2 = Math.cos(tarad + 0.5586) * 9.434;
			var uy2 = Math.sin(tarad + 0.5586) * 9.434;
			ctx2.beginPath();
			ctx2.strokeStyle = '#ED0F0F';
			ctx2.moveTo(105 + qxp, 155);
			ctx2.lineTo(105 + qxp + v, 155 + u);
			ctx2.moveTo(105 + qxp, 155);
			ctx2.lineTo(105 + qxp + vx1, 155 + uy1);
			ctx2.moveTo(105 + qxp, 155);
			ctx2.lineTo(105 + qxp + vx2, 155 + uy2);
			ctx2.fillStyle = '#ED0F0F';
			ctx2.font = '12px Arial';
			ctx2.fillText(Math.abs(Parray[i]) + 'kN', 105 + qxp + v, 155 + u + 10);
			ctx2.stroke();
		}
	}
}

function drawMomentsFB() {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	for (let i = 0; i < Marray.length; i++) {
		if (Marray[i] < 0) {
			var qxm = 440 * (xMarray[i] / L1);
			ctx2.beginPath();
			ctx2.strokeStyle = '#635D5D';
			ctx2.arc(105 + qxm, 150, 20, Math.PI / 2, (3 / 2) * Math.PI);
			ctx2.lineWidth = 1;
			ctx2.moveTo(105 + qxm, 150 - 20);
			ctx2.lineTo(105 + qxm - 4, 150 - 20 - 4);
			ctx2.moveTo(105 + qxm, 150 - 20);
			ctx2.lineTo(105 + qxm - 4, 150 - 20 + 4);
			ctx2.stroke();
			ctx2.closePath();
			ctx2.beginPath();
			ctx2.arc(105 + qxm, 150, 2, 0, 2 * Math.PI);
			ctx2.fillStyle = '#635D5D';
			ctx2.fill();
			ctx2.lineWidth = 1;
			ctx2.strokeStyle = '#635D5D';
			ctx2.fillStyle = '#635D5D';
			ctx2.font = '12px Arial';
			ctx2.fillText(math.abs(Marray[i]) + 'kN-m', 110 + qxm, 150 - 15);
			ctx2.stroke();
		} else {
			var qxm = 440 * (xMarray[i] / L1);
			ctx2.beginPath();
			ctx2.strokeStyle = '#635D5D';
			ctx2.arc(105 + qxm, 150, 20, -Math.PI / 2, (-3 / 2) * Math.PI);
			ctx2.lineWidth = 1;
			ctx2.moveTo(105 + qxm, 150 - 20);
			ctx2.lineTo(105 + qxm + 4, 150 - 20 - 4);
			ctx2.moveTo(105 + qxm, 150 - 20);
			ctx2.lineTo(105 + qxm + 4, 150 - 20 + 4);
			ctx2.stroke();
			ctx2.closePath();
			ctx2.beginPath();
			ctx2.arc(105 + qxm, 150, 2, 0, 2 * Math.PI);
			ctx2.fillStyle = '#635D5D';
			ctx2.fill();
			ctx2.lineWidth = 1;
			ctx2.strokeStyle = '#635D5D';
			ctx2.fillStyle = '#635D5D';
			ctx2.font = '12px Arial';
			ctx2.fillText(Math.abs(Marray[i]) + 'kN-m', 123 + qxm, 150 - 15);
			ctx2.stroke();
		}
	}
}

function drawDistributedFB() {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	for (let i = 0; i < w1array.length; i++) {
		var w1 = w1array[i];
		var w2 = w2array[i];
		var x1 = xw1array[i];
		var x2 = xw2array[i];

		if (w1 <= 0 && w2 <= 0) {
			var wmax = Math.max(Math.abs(w1), Math.abs(w2));
			var wmin = Math.min(Math.abs(w1), Math.abs(w2));
			var qwmax = 35;
			var qwmin = 35 * (wmin / wmax);
			var qx1 = 440 * (x1 / L1);
			var qx2 = 440 * (x2 / L1);
			var qxl = qx2 - qx1;
			if (Math.abs(w1) >= Math.abs(w2)) {
				ctx2.beginPath();
				ctx2.strokeStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1, 145 - 35);
				ctx2.lineTo(105 + qx1 + qxl, 145 - qwmin);
				ctx2.lineTo(105 + qx1 + qxl, 145);
				ctx2.closePath();
				ctx2.fillStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.fill();
				ctx2.closePath();
				ctx2.beginPath();
				ctx2.strokeStyle = 'black';
				ctx2.moveTo(105 + qx1, 145 - 35);
				ctx2.lineTo(105 + qx1 + qxl, 145 - qwmin);
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1, 145 - 35);
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1 - 3, 145 - 4);
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1 + 3, 145 - 4);
				ctx2.moveTo(105 + qx1 + qxl, 145);
				ctx2.lineTo(105 + qx1 + qxl, 145 - qwmin);
				ctx2.moveTo(105 + qx1 + qxl, 145);
				ctx2.lineTo(105 + qx1 + qxl - 3 * (w2 / w1), 145 - 4 * (w2 / w1));
				ctx2.moveTo(105 + qx1 + qxl, 145);
				ctx2.lineTo(105 + qx1 + qxl + 3 * (w2 / w1), 145 - 4 * (w2 / w1));
				ctx2.fillStyle = 'black';
				ctx2.font = '12px Arial';
				ctx2.fillText(Math.abs(w1) + 'kN/m', 105 + qx1 - 8, 145 - 35 - 8);
				if (w2 != 0 && w1 != w2) {
					ctx2.fillText(
						Math.abs(w2) + 'kN/m',
						105 + qx1 + qxl - 35,
						145 - qwmin - 8
					);
				}
				ctx2.stroke();
			} else {
				ctx2.beginPath();
				ctx2.strokeStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1, 145 - qwmin);
				ctx2.lineTo(105 + qx1 + qxl, 145 - 35);
				ctx2.lineTo(105 + qx1 + qxl, 145);
				ctx2.closePath();
				ctx2.fillStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.fill();
				ctx2.closePath();
				ctx2.beginPath();
				ctx2.strokeStyle = 'black';
				ctx2.moveTo(105 + qx1, 145 - qwmin);
				ctx2.lineTo(105 + qx1 + qxl, 145 - 35);
				ctx2.moveTo(105 + qx1 + qxl, 145);
				ctx2.lineTo(105 + qx1 + qxl, 145 - 35);
				ctx2.moveTo(105 + qx1 + qxl, 145);
				ctx2.lineTo(105 + qx1 + qxl - 3, 145 - 4);
				ctx2.moveTo(105 + qx1 + qxl, 145);
				ctx2.lineTo(105 + qx1 + qxl + 3, 145 - 4);
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1, 145 - qwmin);
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1 - 3 * (w1 / w2), 145 - 4 * (w1 / w2));
				ctx2.moveTo(105 + qx1, 145);
				ctx2.lineTo(105 + qx1 + 3 * (w1 / w2), 145 - 4 * (w1 / w2));
				ctx2.fillStyle = 'black';
				ctx2.font = '12px Arial';
				if (w1 != 0 && w1 != w2) {
					ctx2.fillText(Math.abs(w1) + 'kN/m', 105 + qx1 - 35, 145 - qwmin - 8);
				}
				ctx2.fillText(Math.abs(w2) + 'kN/m', 105 + qx1 + qxl - 8, 145 - 35 - 8);
				ctx2.stroke();
			}
		} else if (0 <= w1 && 0 <= w2) {
			var wmax = Math.max(Math.abs(w1), Math.abs(w2));
			var wmin = Math.min(Math.abs(w1), Math.abs(w2));
			var qwmax = 35;
			var qwmin = 35 * (wmin / wmax);
			var qx1 = 440 * (x1 / L1);
			var qx2 = 440 * (x2 / L1);
			var qxl = qx2 - qx1;
			if (Math.abs(w1) >= Math.abs(w2)) {
				ctx2.beginPath();
				ctx2.strokeStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1, 155 + 35);
				ctx2.lineTo(105 + qx1 + qxl, 155 + qwmin);
				ctx2.lineTo(105 + qx1 + qxl, 155);
				ctx2.closePath();
				ctx2.fillStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.fill();
				ctx2.closePath();
				ctx2.beginPath();
				ctx2.strokeStyle = 'black';
				ctx2.moveTo(105 + qx1, 155 + 35);
				ctx2.lineTo(105 + qx1 + qxl, 155 + qwmin);
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1, 155 + 35);
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1 - 3, 155 + 4);
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1 + 3, 155 + 4);
				ctx2.moveTo(105 + qx1 + qxl, 155);
				ctx2.lineTo(105 + qx1 + qxl, 155 + qwmin);
				ctx2.moveTo(105 + qx1 + qxl, 155);
				ctx2.lineTo(105 + qx1 + qxl - 3 * (w2 / w1), 155 + 4 * (w2 / w1));
				ctx2.moveTo(105 + qx1 + qxl, 155);
				ctx2.lineTo(105 + qx1 + qxl + 3 * (w2 / w1), 155 + 4 * (w2 / w1));
				ctx2.fillStyle = 'black';
				ctx2.font = '12px Arial';
				ctx2.fillText(Math.abs(w1) + 'kN/m', 105 + qx1 - 8, 155 + 35 + 12);
				if (w2 != 0 && w1 != w2) {
					ctx2.fillText(
						Math.abs(w2) + 'kN/m',
						105 + qx1 + qxl - 35,
						155 + qwmin + 12
					);
				}
				ctx2.stroke();
			} else {
				ctx2.beginPath();
				ctx2.strokeStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1, 155 + qwmin);
				ctx2.lineTo(105 + qx1 + qxl, 155 + 35);
				ctx2.lineTo(105 + qx1 + qxl, 155);
				ctx2.closePath();
				ctx2.fillStyle = 'rgba(235, 235, 235, 0.5)';
				ctx2.fill();
				ctx2.closePath();
				ctx2.beginPath();
				ctx2.strokeStyle = 'black';
				ctx2.moveTo(105 + qx1, 155 + qwmin);
				ctx2.lineTo(105 + qx1 + qxl, 155 + 35);
				ctx2.moveTo(105 + qx1 + qxl, 155);
				ctx2.lineTo(105 + qx1 + qxl, 155 + 35);
				ctx2.moveTo(105 + qx1 + qxl, 155);
				ctx2.lineTo(105 + qx1 + qxl - 3, 155 + 4);
				ctx2.moveTo(105 + qx1 + qxl, 155);
				ctx2.lineTo(105 + qx1 + qxl + 3, 155 + 4);
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1, 155 + qwmin);
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1 - 3 * (w1 / w2), 155 + 4 * (w1 / w2));
				ctx2.moveTo(105 + qx1, 155);
				ctx2.lineTo(105 + qx1 + 3 * (w1 / w2), 155 + 4 * (w1 / w2));
				ctx2.fillStyle = 'black';
				ctx2.font = '12px Arial';
				if (w1 != 0 && w1 != w2) {
					ctx2.fillText(
						Math.abs(w1) + 'kN/m',
						105 + qx1 - 35,
						155 + qwmin + 12
					);
				}
				ctx2.fillText(
					Math.abs(w2) + 'kN/m',
					105 + qx1 + qxl - 8,
					155 + 35 + 12
				);
				ctx2.stroke();
			}
		}
	}
}

function drawReactions() {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	var qxa = (440 * xa1) / L1;
	var qxb = (440 * xb1) / L1;
	var qx = 0;
	var Rx = 0;
	if (RAy >= 0) {
		ctx2.beginPath();
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxa, 155 + 60);
		ctx2.lineTo(105 + qxa - 3, 155 + 60 + 4);
		ctx2.lineTo(105 + qxa + 3, 155 + 60 + 4);
		ctx2.lineTo(105 + qxa, 155 + 60);
		ctx2.closePath();
		ctx2.fillStyle = 'black';
		ctx2.fill();
		ctx2.moveTo(105 + qxa, 155 + 60 + 4);
		ctx2.lineTo(105 + qxa, 155 + 85 + 4);
		ctx2.stroke();
	} else {
		ctx2.beginPath();
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxa, 155 + 85);
		ctx2.lineTo(105 + qxa - 3, 155 + 85 - 4);
		ctx2.lineTo(105 + qxa + 3, 155 + 85 - 4);
		ctx2.lineTo(105 + qxa, 155 + 85);
		ctx2.closePath();
		ctx2.fillStyle = 'black';
		ctx2.fill();
		ctx2.moveTo(105 + qxa, 155 + 85 - 4);
		ctx2.lineTo(105 + qxa, 155 + 60 - 4);
		ctx2.stroke();
	}

	function checkFx(Tang) {
		return Tang != 90;
	}
	var THarray = [];
	THarray = Tarray.find(checkFx);

	if (typeof THarray != 'undefined') {
		if (RTa == 'pin') {
			qx = qxa;
			Rx = 'RAx';
		} else if (RTa == 'roller') {
			qx = qxb;
			Rx = 'RBx';
		}
		if (RAx >= 0) {
			ctx2.beginPath();
			ctx2.strokeStyle = 'black';
			ctx2.lineWidth = 4;
			ctx2.moveTo(105 + qx + 14.5, 155 + 100);
			ctx2.lineTo(105 + qx + 14.5 - 4, 155 + 100 - 4);
			ctx2.lineTo(105 + qx + 14.5 - 4, 155 + 100 + 4);
			ctx2.lineTo(105 + qx + 14.5, 155 + 100);
			ctx2.closePath();
			ctx2.fillStyle = 'black';
			ctx2.fill();
			ctx2.moveTo(105 + qx + 14.5, 155 + 100);
			ctx2.lineTo(105 + qx - 14.5, 155 + 100);
			ctx2.stroke();
		} else {
			ctx2.beginPath();
			ctx2.strokeStyle = 'black';
			ctx2.lineWidth = 4;
			ctx2.moveTo(105 + qx - 14.5, 155 + 100);
			ctx2.lineTo(105 + qx - 14.5 + 4, 155 + 100 - 3);
			ctx2.lineTo(105 + qx - 14.5 + 4, 155 + 100 + 3);
			ctx2.lineTo(105 + qx - 14.5, 155 + 100);
			ctx2.closePath();
			ctx2.fillStyle = 'black';
			ctx2.fill();
			ctx2.moveTo(105 + qx - 14.5, 155 + 100);
			ctx2.lineTo(105 + qx + 14.5, 155 + 100);
			ctx2.stroke();
		}
		ctx2.lineWidth = 3;
		ctx2.fillStyle = 'black';
		ctx2.font = '13px Arial';
		ctx2.fontStyle = 'bold';
		ctx2.fillText(
			Rx + ' = ' + Math.abs(RAx.toFixed(2)) + 'kN',
			105 + qx - 50,
			155 + 100 + 25
		);
	}

	if (RBy >= 0) {
		ctx2.beginPath();
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxb, 155 + 60);
		ctx2.lineTo(105 + qxb - 3, 155 + 60 + 4);
		ctx2.lineTo(105 + qxb + 3, 155 + 60 + 4);
		ctx2.lineTo(105 + qxb, 155 + 60);
		ctx2.closePath();
		ctx2.fillStyle = 'black';
		ctx2.fill();
		ctx2.moveTo(105 + qxb, 155 + 60 + 4);
		ctx2.lineTo(105 + qxb, 155 + 85 + 4);
		ctx2.stroke();
	} else {
		ctx2.beginPath();
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxb, 155 + 85);
		ctx2.lineTo(105 + qxb - 3, 155 + 85 - 4);
		ctx2.lineTo(105 + qxb + 3, 155 + 85 - 4);
		ctx2.lineTo(105 + qxb, 155 + 85);
		ctx2.closePath();
		ctx2.fillStyle = 'black';
		ctx2.fill();
		ctx2.moveTo(105 + qxb, 155 + 85 - 4);
		ctx2.lineTo(105 + qxb, 155 + 60 - 4);
		ctx2.stroke();
	}
	ctx2.lineWidth = 3;
	ctx2.fillStyle = 'black';
	ctx2.font = '13px Arial';
	ctx2.fontStyle = 'bold';
	ctx2.fillText(
		'RAz = ' + Math.abs(RAy.toFixed(2)) + 'kN',
		105 + qxa + 10,
		155 + 60 + 20
	);
	ctx2.fillText(
		'RBz = ' + Math.abs(RBy.toFixed(2)) + 'kN',
		105 + qxb + 10,
		155 + 60 + 20
	);

	ctx2.lineWidth = 1;
}

function drawReactionsFix() {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	var Rx = '';
	var qx = 0;
	var Mx = '';
	if (RTa == 'fixed') {
		Rx = 'RA';
		Mx = 'MA';
		qxF = (440 * xa1) / L1;
	} else if (RTb == 'fixed') {
		Rx = 'RB';
		Mx = 'MB';
		qxF = (440 * xb1) / L1;
	}
	if (FRAy >= 0) {
		ctx2.beginPath();
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxF, 173 + 60);
		ctx2.lineTo(105 + qxF - 3, 173 + 60 + 4);
		ctx2.lineTo(105 + qxF + 3, 173 + 60 + 4);
		ctx2.lineTo(105 + qxF, 173 + 60);
		ctx2.closePath();
		ctx2.fillStyle = 'black';
		ctx2.fill();
		ctx2.moveTo(105 + qxF, 173 + 60 + 4);
		ctx2.lineTo(105 + qxF, 173 + 85 + 4);
		ctx2.stroke();
	} else {
		ctx2.beginPath();
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxF, 173 + 85);
		ctx2.lineTo(105 + qxF - 3, 173 + 85 - 4);
		ctx2.lineTo(105 + qxF + 3, 173 + 85 - 4);
		ctx2.lineTo(105 + qxF, 173 + 85);
		ctx2.closePath();
		ctx2.fillStyle = 'black';
		ctx2.fill();
		ctx2.moveTo(105 + qxF, 173 + 85 - 4);
		ctx2.lineTo(105 + qxF, 173 + 60 - 4);
		ctx2.stroke();
	}
	ctx2.lineWidth = 3;
	ctx2.fillStyle = 'black';
	ctx2.font = '13px Arial';
	ctx2.fontStyle = 'bold';
	ctx2.fillText(
		Rx + 'z = ' + Math.abs(FRAy.toFixed(2)) + 'kN',
		105 + qxF + 10,
		173 + 60 + 20
	);

	function checkFx(Tang) {
		return Tang != 90;
	}
	var THarray = [];
	THarray = Tarray.find(checkFx);

	if (typeof THarray != 'undefined') {
		if (RTa == 'pin') {
			qxF = qxa;
			Rx = 'RAx';
		} else if (RTa == 'roller') {
			qxF = qxb;
			Rx = 'RBx';
		}
		if (FRAx >= 0) {
			ctx2.beginPath();
			ctx2.strokeStyle = 'black';
			ctx2.lineWidth = 4;
			ctx2.moveTo(105 + qxF + 14.5, 173 + 110);
			ctx2.lineTo(105 + qxF + 14.5 - 4, 173 + 110 - 4);
			ctx2.lineTo(105 + qxF + 14.5 - 4, 173 + 110 + 4);
			ctx2.lineTo(105 + qxF + 14.5, 173 + 110);
			ctx2.closePath();
			ctx2.fillStyle = 'black';
			ctx2.fill();
			ctx2.moveTo(105 + qxF + 14.5, 173 + 110);
			ctx2.lineTo(105 + qxF - 14.5, 173 + 110);
			ctx2.stroke();
		} else {
			ctx2.beginPath();
			ctx2.strokeStyle = 'black';
			ctx2.lineWidth = 4;
			ctx2.moveTo(105 + qxF - 14.5, 173 + 110);
			ctx2.lineTo(105 + qxF - 14.5 + 4, 173 + 110 - 3);
			ctx2.lineTo(105 + qxF - 14.5 + 4, 173 + 110 + 3);
			ctx2.lineTo(105 + qxF - 14.5, 173 + 110);
			ctx2.closePath();
			ctx2.fillStyle = 'black';
			ctx2.fill();
			ctx2.moveTo(105 + qxF - 14.5, 173 + 110);
			ctx2.lineTo(105 + qxF + 14.5, 173 + 110);
			ctx2.stroke();
		}
		ctx2.lineWidth = 3;
		ctx2.fillStyle = 'black';
		ctx2.font = '13px Arial';
		ctx2.fontStyle = 'bold';
		ctx2.fillText(
			Rx + 'x = ' + Math.abs(FRAx.toFixed(2)) + 'kN',
			105 + qxF - 50,
			173 + 110 + 25
		);
	}

	if (FMA > 0) {
		ctx2.beginPath();
		ctx2.lineWidth = 4;
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.arc(105 + qxF - 10, 168 + 80, 20, Math.PI / 2, (3 / 2) * Math.PI);
		ctx2.stroke();
		ctx2.closePath();
		ctx2.beginPath();
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxF - 10 + 4, 168 + 60);
		ctx2.lineTo(105 + qxF - 10 + 4 - 8, 168 + 60 - 8);
		ctx2.lineTo(105 + qxF - 10 + 4 - 8, 168 + 60 + 8);
		ctx2.lineTo(105 + qxF - 10 + 4, 168 + 60);
		ctx2.fill();
		ctx2.closePath();
		ctx2.beginPath();
		ctx2.lineWidth = 4;
		ctx2.strokeStyle = 'black';
		ctx2.fillStyle = 'black';
		ctx2.font = '13px Arial';
		ctx2.fontStyle = 'bold';
		ctx2.fillText(
			Mx + ' = ' + Math.abs(FMA).toFixed(2) + 'kN-m',
			110 + qxF - 58,
			168 - 15 + 65
		);
		ctx2.stroke();
	} else {
		ctx2.beginPath();
		ctx2.lineWidth = 4;
		ctx2.strokeStyle = 'black';
		ctx2.lineWidth = 4;
		ctx2.arc(105 + qxF - 10, 168 + 80, 20, Math.PI / 2, (3 / 2) * Math.PI);
		ctx2.stroke();
		ctx2.closePath();
		ctx2.beginPath();
		ctx2.lineWidth = 4;
		ctx2.moveTo(105 + qxF - 10 + 4, 168 + 100);
		ctx2.lineTo(105 + qxF - 10 - 8 + 4, 168 + 100 - 8);
		ctx2.lineTo(105 + qxF - 10 - 8 + 4, 168 + 100 + 8);
		ctx2.lineTo(105 + qxF - 10 + 4, 168 + 100);
		ctx2.fill();
		ctx2.closePath();
		ctx2.beginPath();
		ctx2.lineWidth = 4;
		ctx2.strokeStyle = 'black';
		ctx2.fillStyle = 'black';
		ctx2.font = '13px Arial';
		ctx2.fontStyle = 'bold';
		ctx2.fillText(
			Mx + ' = ' + Math.abs(FMA).toFixed(2) + 'kN-m',
			110 + qxF - 58,
			168 - 15 + 65
		);
		ctx2.stroke();
	}
	ctx2.lineWidth = 1;
}

function drawFreeBody() {
	var ctx2 = document.getElementById('FreeBody').getContext('2d');
	ctx2.clearRect(0, 0, FreeBody.width, FreeBody.height);
	ctx2.beginPath();
	ctx2.fillStyle = '#AD1F00';
	ctx2.fillRect(105, 145, 440, 10);
	drawaxesFB();
	distanceLDistanceFB();
	drawBDistanceFB(qxa2, qxb2);
	drawDistributedFB();
	drawLoadsFB();
	drawMomentsFB();
	if (RTb == 'fixed' || RTa == 'fixed') {
		ReactionsFix();
	} else {
		ReactionsPinA();
	}
	ShearDiagram();
}

function ShearDiagram() {
	if (xParrayT.indexOf(0) == -1) {
		xParrayT.unshift(0);
		ParrayT.unshift(0);
	}
	if (xParrayT.indexOf(L1) == -1) {
		xParrayT.push(L1);
	}

	var PXmatrix = [];
	for (var i = 0; i < ParrayT.length; i++) {
		PXmatrix.push([ParrayT[i], xParrayT[i]]);
	}

	PXmatrix.sort(compareSecondColumn);

	function compareSecondColumn(a, b) {
		if (a[1] === b[1]) {
			return 0;
		} else {
			return a[1] < b[1] ? -1 : 1;
		}
	}

	var ShearValues = [];
	var ShearFunctions = [];
	var XValues = [];

	for (var k = 0; k < L1; k += L1 / 400) {
		XValues.push(k.toFixed(2));
	}
	xParrayT.sort(function (a, b) {
		return a - b;
	});

	var Vx1 = String(PXmatrix[0][0]);
	ShearFunctions.push(Vx1);
	var Vxi = Vx1;

	for (var i = 1; i < PXmatrix.length; i++) {
		Vxi = String(Vxi + '+' + PXmatrix[i][0]);
		ShearFunctions.push(Vxi);
	}

	ShearFunctions.push(0);

	for (var j = 1; j < ShearFunctions.length; j++) {
		for (var k = xParrayT[j - 1]; k <= xParrayT[j]; k += L1 / 400) {
			var Vval = 0;
			const parser = math.parser();
			Vval = parser.eval(ShearFunctions[j - 1]);
			ShearValues.push(Vval.toFixed(2));
		}
	}

	var ShearValuesWT = [];

	for (var k = 0; k <= L1; k += L1 / 400) {
		ShearValuesWT.push(0);
	}

	for (var g = 0; g < w1array.length; g++) {
		var w1arri = [];
		var w2arri = [];
		var xw1arri = [];
		var xw2arri = [];

		w1arri.push(w1array[g]);
		w2arri.push(w2array[g]);
		xw1arri.push(xw1array[g]);
		xw2arri.push(xw2array[g]);

		if (xw1array[g] != 0) {
			xw2arri.unshift(xw1array[g]);
			xw1arri.unshift(0);
			w1arri.unshift(0);
			w2arri.unshift(0);
		}
		if (xw2array[g] != L1) {
			xw1arri.push(xw2array[g]);
			xw2arri.push(L1);
			w1arri.push(0);
			w2arri.push(0);
		}

		var ShearValuesW = [];
		var ShearFunctionsW = [];

		if (w1array[g] != w2array[g]) {
			var wterm1 = (w1arri[0] + w2arri[0]) / 2;
			var wterm2 = ((w1arri[0] + w2arri[0]) * xw1arri[0]) / 2;
			var VxiW = String(
				w1arri[0] +
					'*(x-' +
					xw1arri[0] +
					')+(' +
					w2arri[0] +
					'-' +
					w1arri[0] +
					')*(x-' +
					xw1arri[0] +
					')^2/(2*(' +
					xw2arri[0] +
					'-' +
					xw1arri[0] +
					'))'
			);
			ShearFunctionsW.push(VxiW);

			for (var i = 1; i < w1arri.length; i++) {
				var wTi =
					((w1arri[i - 1] + w2arri[i - 1]) *
						(xw2arri[i - 1] - xw1arri[i - 1])) /
					2;
				VxiW = String(
					wTi +
						'+' +
						w1arri[i] +
						'*(x-' +
						xw1arri[i] +
						')+(' +
						w2arri[i] +
						'-' +
						w1arri[i] +
						')*(x-' +
						xw1arri[i] +
						')^2/(2*(' +
						xw2arri[i] +
						'-' +
						xw1arri[i] +
						'))'
				);
				ShearFunctionsW.push(VxiW);
			}

			for (var j = 0; j < ShearFunctionsW.length; j++) {
				for (var k = xw1arri[j]; k <= xw2arri[j]; k += L1 / 400) {
					var Vvalw = 0;
					const parser = math.parser();
					parser.eval('f(x) =' + ShearFunctionsW[j]);
					Vvalw = parser.eval('f(' + k + ')');
					ShearValuesW.push(Vvalw.toFixed(2));
				}
			}

			for (var i = 0; i < ShearValuesWT.length; i++) {
				const parser = math.parser();
				var u = parser.eval(ShearValuesWT[i] + '+' + ShearValuesW[i]);
				ShearValuesWT[i] = u;
			}
		} else {
			var wterm1 = (w1arri[0] + w2arri[0]) / 2;
			var wterm2 = ((w1arri[0] + w2arri[0]) * xw1arri[0]) / 2;
			var VxiW = String(wterm1 + '*x-' + wterm2);
			ShearFunctionsW.push(VxiW);

			for (var i = 1; i < w1arri.length; i++) {
				var wTi =
					((w1arri[i - 1] + w2arri[i - 1]) *
						(xw2arri[i - 1] - xw1arri[i - 1])) /
					2;
				var wterm1i = (w1arri[i] + w2arri[i]) / 2;
				var wterm2i = ((w1arri[i] + w2arri[i]) * xw1arri[i]) / 2;
				VxiW = String(wTi + '+' + wterm1i + '*x-' + wterm2i);
				ShearFunctionsW.push(VxiW);
			}

			for (var j = 0; j < ShearFunctionsW.length; j++) {
				for (var k = xw1arri[j]; k <= xw2arri[j]; k += L1 / 400) {
					var Vvalw = 0;
					const parser = math.parser();
					parser.eval('f(x) =' + ShearFunctionsW[j]);
					Vvalw = parser.eval('f(' + k + ')');
					ShearValuesW.push(Vvalw.toFixed(2));
				}
			}

			for (var i = 0; i < ShearValuesWT.length; i++) {
				const parser = math.parser();
				var u = parser.eval(ShearValuesWT[i] + '+' + ShearValuesW[i]);
				ShearValuesWT[i] = u;
			}
		}
	}

	var ShearValuesT = [];

	for (var i = 0; i < ShearValuesWT.length; i++) {
		const parser = math.parser();
		var u = parser.eval(ShearValuesWT[i] + '+' + ShearValues[i]);
		ShearValuesT.push(u.toFixed(2));
	}

	drawShear(XValues, ShearValuesT);
	MomentDiagram(PXmatrix, XValues);
}

function drawShear(XValues, ShearValuesT) {
	let coords = XValues.map((v, i) => ({
		x: v,
		y: ShearValuesT[i],
	}));

	// document.getElementById('ShearContainer').innerHTML = '&nbsp;';
	document.getElementById('ShearContainer').innerHTML =
		'<h4 class="section__subtitle">Shear Diagram</h4><canvas id="Shear"></canvas>';

	var ctxS = document.getElementById('Shear').getContext('2d');

	var chart = new Chart(ctxS, {
		// The type of chart we want to create
		type: 'scatter',

		// The data for our dataset
		data: {
			datasets: [
				{
					label: 'Shear',
					lineTension: 0,
					backgroundColor: '#dd4a49',
					borderColor: '#AD1F00',
					data: coords,
					fill: 'origin', // 0: fill to 'origin'
					fill: '+2', // 1: fill to dataset 3
					fill: 1, // 2: fill to dataset 1
					fill: false, // 3: no fill
					fill: '-2', // 4: fill to dataset 2
				},
			],
		},

		// Configuration options go here
		options: {
			responsive: true,
			scales: {
				yAxes: [
					{
						scaleLabel: {
							display: true,
							labelString: 'V (kN)',
						},
					},
				],
				xAxes: [
					{
						scaleLabel: {
							display: true,
							labelString: 'x (m)',
						},
					},
				],
			},
			legend: {
				display: false,
			},
			elements: {
				point: {
					radius: 0,
					hitRadius: 2,
				},
			},
		},
	});
}
function drawMoment(XValues, MomentValuesT) {
	let coordsM = XValues.map((v, i) => ({
		x: v,
		y: MomentValuesT[i],
	}));

	document.getElementById('MomentContainer').innerHTML = '&nbsp;';
	document.getElementById('MomentContainer').innerHTML =
		'<h4 class="section__subtitle">Moment Diagram</h4><canvas id="MomentD"></canvas>';

	var ctxM = document.getElementById('MomentD').getContext('2d');

	var Moment = new Chart(ctxM, {
		// The type of chart we want to create
		type: 'scatter',

		// The data for our dataset
		data: {
			datasets: [
				{
					label: 'Moment',
					lineTension: 0,
					backgroundColor: '#E8E7E6',
					borderColor: '#989898',
					data: coordsM,
					fill: 'origin', // 0: fill to 'origin'
					fill: '+2', // 1: fill to dataset 3
					fill: 1, // 2: fill to dataset 1
					fill: false, // 3: no fill
					fill: '-2', // 4: fill to dataset 2
				},
			],
		},

		// Configuration options go here
		options: {
			responsive: true,
			scales: {
				yAxes: [
					{
						scaleLabel: {
							display: true,
							labelString: 'M (kN-m)',
						},
						ticks: {
							reverse: true,
						},
					},
				],
				xAxes: [
					{
						scaleLabel: {
							display: true,
							labelString: 'x (m)',
						},
					},
				],
			},
			legend: {
				display: false,
			},
			elements: {
				point: {
					radius: 0,
					hitRadius: 2,
				},
			},
		},
	});
}

function MomentDiagram(PXmatrix, XValues) {
	if (XValues.length > 400) {
		XValues.splice(-1);
	}

	if (xMarrayT.indexOf(0) == -1) {
		xMarrayT.unshift(0);
		MarrayT.unshift(0);
	}
	if (xMarrayT.indexOf(L1) == -1) {
		xMarrayT.push(L1);
	}

	var MXmatrix = [];
	for (var i = 0; i < MarrayT.length; i++) {
		MXmatrix.push([MarrayT[i], xMarrayT[i]]);
	}

	MXmatrix.sort(compareSecondColumn);

	function compareSecondColumn(a, b) {
		if (a[1] === b[1]) {
			return 0;
		} else {
			return a[1] < b[1] ? -1 : 1;
		}
	}

	xMarrayT.sort(function (a, b) {
		return a - b;
	});

	var MomentValues = [];
	var MomentFunctions = [];

	var Mx1 = String(MXmatrix[0][0]);
	MomentFunctions.push(Mx1);
	var Mxi = Mx1;

	for (var i = 1; i < MXmatrix.length; i++) {
		Mxi = String(Mxi + '+' + MXmatrix[i][0]);
		MomentFunctions.push(Mxi);
	}

	MomentFunctions.push(0);

	for (var j = 1; j < MomentFunctions.length; j++) {
		for (var k = xMarrayT[j - 1]; k <= xMarrayT[j]; k += L1 / 400) {
			var Mval = 0;
			const parser = math.parser();
			Mval = parser.eval(MomentFunctions[j - 1]);
			MomentValues.push(Mval.toFixed(2) * -1);
		}
	}

	var MomentValuesP = [];
	var MomentFunctionsP = [];

	var Mx1P = String(PXmatrix[0][0] + '*(x-' + xParrayT[0] + ')');
	MomentFunctionsP.push(Mx1P);
	var MxiP = Mx1P;

	for (var i = 1; i < PXmatrix.length; i++) {
		MxiP = String(MxiP + '+' + PXmatrix[i][0] + '*(x-' + xParrayT[i] + ')');
		MomentFunctionsP.push(MxiP);
	}

	MomentFunctionsP.push(0 + '*x');

	var XValuesMP = [];

	for (var j = 1; j < MomentFunctionsP.length; j++) {
		for (var k = 0; k < XValues.length; k++) {
			if (XValues[k] >= xParrayT[j - 1] && XValues[k] < xParrayT[j]) {
				var MvalP = 0;
				const parser = math.parser();
				parser.eval('f(x) =' + MomentFunctionsP[j - 1]);
				MvalP = parser.eval('f(' + XValues[k] + ')');
				MomentValuesP.push(MvalP.toFixed(2) * -1);
				XValuesMP.push(XValues[k]);
			}
		}
	}

	var MomentValuesWT = [];

	for (var k = 0; k < L1; k += L1 / 400) {
		MomentValuesWT.push(0);
	}
	if (MomentValuesWT.length > 400) {
		MomentValuesWT.splice(-1);
	}

	if (w1array.length > 0) {
		for (var g = 0; g < w1array.length; g++) {
			var w1arri = [];
			var w2arri = [];
			var xw1arri = [];
			var xw2arri = [];

			w1arri.push(w1array[g]);
			w2arri.push(w2array[g]);
			xw1arri.push(xw1array[g]);
			xw2arri.push(xw2array[g]);

			if (xw1array[g] != 0) {
				xw2arri.unshift(xw1array[g]);
				xw1arri.unshift(0);
				w1arri.unshift(0);
				w2arri.unshift(0);
			}
			if (xw2array[g] != L1) {
				xw1arri.push(xw2array[g]);
				xw2arri.push(L1);
				w1arri.push(0);
				w2arri.push(0);
			}

			var MomentValuesW = [];
			var MomentFunctionsW = [];

			var wterm1 = (w1arri[0] + w2arri[0]) / 2;
			var wterm2 = ((w1arri[0] + w2arri[0]) * xw1arri[0]) / 2;
			var MxiW = String(
				w1arri[0] +
					'*(x-' +
					xw1arri[0] +
					')^2/2+(' +
					w2arri[0] +
					'-' +
					w1arri[0] +
					')*(x-' +
					xw1arri[0] +
					')^3/(6*(' +
					xw2arri[0] +
					'-' +
					xw1arri[0] +
					'))'
			);
			MomentFunctionsW.push(MxiW);

			for (var i = 1; i < w1arri.length; i++) {
				var wTi =
					((w1arri[i - 1] + w2arri[i - 1]) *
						(xw2arri[i - 1] - xw1arri[i - 1])) /
					2;
				var cdgW = 0;
				let cdwW;
				if (wTi == 0) {
					cdwW = 0;
				} else {
					cdgW =
						((xw2arri[i - 1] - xw1arri[i - 1]) *
							((2 * w1arri[i - 1]) / 3 + w2arri[i - 1] / 3)) /
						(w1arri[i - 1] + w2arri[i - 1]);
				}

				MxiW = String(
					wTi +
						'*(x-' +
						xw2arri[i - 1] +
						'+' +
						cdgW +
						') +' +
						w1arri[i] +
						'*(x-' +
						xw1arri[i] +
						')^2/2+(' +
						w2arri[i] +
						'-' +
						w1arri[i] +
						')*(x-' +
						xw1arri[i] +
						')^3/(6*(' +
						xw2arri[i] +
						'-' +
						xw1arri[i] +
						'))'
				);
				MomentFunctionsW.push(MxiW);
			}

			var XValuesMW = [];

			for (var j = 0; j < MomentFunctionsW.length; j++) {
				for (var k = 0; k < XValues.length; k++) {
					if (XValues[k] >= xw1arri[j] && XValues[k] < xw2arri[j]) {
						var Mvalw = 0;
						const parser = math.parser();
						parser.eval('f(x) =' + MomentFunctionsW[j]);
						Mvalw = parser.eval('f(' + XValues[k] + ')');
						MomentValuesW.push(Mvalw.toFixed(2) * -1);
						XValuesMW.push(XValues[k]);
					}
				}
			}

			for (var i = 0; i < MomentValuesWT.length; i++) {
				const parser = math.parser();
				var u = parser.eval(MomentValuesWT[i] + '+' + MomentValuesW[i]);
				MomentValuesWT[i] = u;
			}
		}
	}
	var MomentValuesT = [];

	for (var i = 0; i < XValues.length; i++) {
		const parser = math.parser();
		var u = parser.eval(
			MomentValues[i] + '+' + MomentValuesP[i] + '+' + MomentValuesWT[i]
		);
		MomentValuesT.push(u.toFixed(2) * -1);
	}

	drawMoment(XValues, MomentValuesT);
}
