'use strict';

// * ========= DOM ELEMENTS ========= //

const rectangular = 'Rectangular';
const circular = 'Circular';
const rectangularH = 'RectangularH';
const circularH = 'CircularH';
const iSection = 'I-Section';
const tSection = 'T-Section';
const angle = 'Angle';
const channel = 'Channel';

const section__img = document.querySelector('.section__img');
const section__title = document.querySelector('.section__title');
const section__span = document.querySelectorAll('.section__span');

const select = document.querySelector('.select');
const selectUnits = document.querySelector('.selectUnits');
const section__unit = document.querySelector('.section__unit');

const modal = document.querySelector('.modal');
const modal__error = document.querySelector('.modal__error');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const results__angle = document.querySelectorAll('.results__angle');
const results__movil_row = document.querySelectorAll('.results__movil-row');
const results__movil_row2 = document.querySelectorAll('.results__movil-row-2');
const arrowUp = document.querySelectorAll('.arrowUp');
const arrowDown = document.querySelectorAll('.arrowDown');
results__movil_row.forEach((element, i) => {
	element.addEventListener('click', () => {
		element.classList.toggle('click');
		results__movil_row2[i].classList.toggle('hidden');
		arrowUp[i].classList.toggle('hidden');
		arrowDown[i].classList.toggle('hidden');
	});
});
// * ========= FUNCTIONS ========= //
function drawcdg(yc, zc) {
	var ctx1 = document.getElementById('diagram').getContext('2d');
	ctx1.beginPath();
	ctx1.arc(yc + 22, zc + 58, 4, 0, 2 * Math.PI);
	ctx1.fillStyle = '#041129';
	ctx1.fill();
	ctx1.lineWidth = 1;
	ctx1.strokeStyle = '#041129';
	ctx1.stroke();
	ctx1.moveTo(yc + 22, zc + 58);
	ctx1.lineTo(yc + 22, zc + 58 - 100);
	ctx1.moveTo(yc + 22, zc + 58 - 100);
	ctx1.lineTo(yc + 22 - 4, zc + 58 - 100 + 9);
	ctx1.moveTo(yc + 22, zc + 58 - 100);
	ctx1.lineTo(yc + 22 + 4, zc + 58 - 100 + 9);
	ctx1.moveTo(yc + 22, zc + 58);
	ctx1.lineTo(yc + 22 + 100, zc + 58);
	ctx1.moveTo(yc + 22 + 100, zc + 58);
	ctx1.lineTo(yc + 22 + 100 - 9, zc + 58 - 4);
	ctx1.moveTo(yc + 22 + 100, zc + 58);
	ctx1.lineTo(yc + 22 + 100 - 9, zc + 58 + 4);
	ctx1.fillStyle = '#041129';
	ctx1.font = '12px Arial';
	ctx1.fillText('z', yc + 22 + 10, zc + 58 - 100 + 10);
	ctx1.font = '12px Arial';
	ctx1.fillText('y', yc + 22 + 100 - 10, zc + 58 - 10);
	ctx1.stroke();
}

function drawcdgangle(yc, zc, v, u) {
	var ctx1 = document.getElementById('diagram').getContext('2d');
	ctx1.beginPath();
	ctx1.arc(yc + 22, zc + 58, 4, 0, 2 * Math.PI);
	ctx1.fillStyle = 'black';
	ctx1.fill();
	ctx1.lineWidth = 1;
	ctx1.strokeStyle = 'black';
	ctx1.stroke();
	ctx1.moveTo(yc + 22, zc + 58);
	ctx1.lineTo(yc + 22 + u, zc + 58 - 100 + v);
	ctx1.moveTo(yc + 22 + u, zc + 58 - 100 + v);
	ctx1.lineTo(yc + 22 + u - 4, zc + 58 - 100 + v + 9);
	ctx1.moveTo(yc + 22 + u, zc + 58 - 100 + v);
	ctx1.lineTo(yc + 22 + u + 4, zc + 58 - 100 + v + 9);
	ctx1.moveTo(yc + 22, zc + 58);
	ctx1.lineTo(yc + 22 + 100 - v, zc + 58 + u);
	ctx1.moveTo(yc + 22 + 100 - v, zc + 58 + u);
	ctx1.lineTo(yc + 22 + 100 - v - 9, zc + 58 + u - 4);
	ctx1.moveTo(yc + 22 + 100 - v, zc + 58 + u);
	ctx1.lineTo(yc + 22 + 100 - v - 9, zc + 58 + u + 4);
	ctx1.fillStyle = 'black';
	ctx1.font = '12px Arial';
	ctx1.fillText("z '", yc + 22 + u + 10, zc + 58 - 100 + v + 10);
	ctx1.font = '12px Arial';
	ctx1.fillText("y '", yc + 22 + 100 - v - 10, zc + 58 + u - 10);
	ctx1.stroke();
}

const openModal = function (error) {
	modal__error.textContent = error;
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
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
const error =
	'All data have to be correctly typed to proceed to calculus. Please check input values.';
function calculate() {
	var erase = document.getElementById('diagram').getContext('2d');
	erase.clearRect(0, 0, diagram.width, diagram.height);

	var A = 0;
	var y = 0;
	var z = 0;
	var Iy = 0;
	var Iz = 0;
	var Qy = 0;
	var Qz = 0;
	var Sy = 0;
	var Sz = 0;
	var Zy = 0;
	var Zz = 0;
	var J = 0;
	var Ta = 0;
	var Iyp = 0;
	var Izp = 0;
	var yc = 0;
	var zc = 0;

	if (select.value == rectangular) {
		drawaxes();
		var h = parseFloat(document.getElementById('height').value);
		var b = parseFloat(document.getElementById('base').value);
		var y1 = 0;
		var x2 = 0;
		var y2 = 0;
		var coef = b - h;
		y = b / 2;
		z = h / 2;

		if (
			document.getElementById('height').value == '' ||
			document.getElementById('base').value == '' ||
			document.getElementById('height').value == 0 ||
			document.getElementById('base').value == 0
		) {
			openModal(error);
		} else {
			if (coef < 0) {
				x2 = 210 * (b / h); // 210
				yc = 210 * (y / h); // 210
				zc = 210 * (z / h); // 210
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#C21320';
				ctx1.fillRect(22, 58, x2, 210); // 210
				drawcdg(yc, zc);
				var a = h / 2;
				var c = b / 2;
				J =
					a *
					c *
					c *
					c *
					(16 / 3 -
						((3.36 * c) / a) * (1 - (c * c * c * c) / (12 * a * a * a * a)));
			} else {
				y1 = 268 - 210 * (h / b); // 268
				y2 = 210 * (h / b); // 310
				yc = 210 * (y / b); // 210
				zc = 210 * (z / b); //210
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, y1, 210, y2); // 210
				drawcdg(yc, zc - 58 + y1);
				var a = b / 2;
				var c = h / 2;
				J =
					a *
					c *
					c *
					c *
					(16 / 3 -
						((3.36 * c) / a) * (1 - (c * c * c * c) / (12 * a * a * a * a)));
			}

			A = h * b;
			Iy = (b * h * h * h) / 12;
			Iz = (h * b * b * b) / 12;
			Qy = (5 / 6) * b * h;
			Qz = (5 / 6) * b * h;
			Sy = (b * h * h) / 6;
			Sz = (h * b * b) / 6;
			Zy = (b * h * h) / 4;
			Zz = (h * b * b) / 4;
			J = J;

			putresults();
		}
	} else if (select.value == circular) {
		drawaxes();
		var r = parseFloat(document.getElementById('radius').value);

		if (
			document.getElementById('radius').value == '' ||
			document.getElementById('radius').value == 0
		) {
			openModal(error);
		} else {
			var ctx1 = document.getElementById('diagram').getContext('2d');
			ctx1.beginPath();
			ctx1.arc(101, 188, 80, 0, 2 * Math.PI);
			ctx1.fillStyle = '#c21320';
			ctx1.fill();
			ctx1.lineWidth = 1;
			ctx1.strokeStyle = '#c21320';
			ctx1.stroke();
			drawcdg(101 - 22, 188 - 58);

			A = r * r * Math.PI;
			y = (r * 2) / 2;
			z = (r * 2) / 2;
			Iy = (Math.PI / 4) * r * r * r * r;
			Iz = (Math.PI / 4) * r * r * r * r;
			Qy = 0.9 * Math.PI * r * r;
			Qz = 0.9 * Math.PI * r * r;
			Sy = (Math.PI / 4) * r * r * r;
			Sz = (Math.PI / 4) * r * r * r;
			Zy = (r * 2 * (r * 2) * (r * 2)) / 6;
			Zz = (r * 2 * (r * 2) * (r * 2)) / 6;
			J = Iy + Iz;

			putresults();
		}
	} else if (select.value == rectangularH) {
		drawaxes();
		var h = parseFloat(document.getElementById('height').value);
		var b = parseFloat(document.getElementById('base').value);
		var t = parseFloat(document.getElementById('thick').value);
		var y1 = 0;
		var x2 = 0;
		var y2 = 0;
		var tx1 = 0;
		var ty1 = 0;
		var tx2 = 0;
		var ty2 = 0;
		var coef = b - h;
		var b1 = b - 2 * t;
		var h1 = h - 2 * t;
		y = b / 2;
		z = h / 2;

		if (
			document.getElementById('height').value == '' ||
			document.getElementById('base').value == '' ||
			document.getElementById('thick').value == '' ||
			document.getElementById('height').value == 0 ||
			document.getElementById('base').value == 0 ||
			document.getElementById('thick').value == 0
		) {
			openModal(error);
		} else if (h / 2 <= t) {
			openModal(
				'Section thickness (t) cannot be greater than or equal to half of height (h).'
			);
		} else if (b / 2 <= t) {
			openModal(
				'Section thickness (t) cannot be greater than or equal to half of widht (b).'
			);
		} else {
			if (coef < 0) {
				x2 = 210 * (b / h);
				tx1 = 22 + 210 * (t / h);
				ty1 = 58 + 210 * (t / h);
				tx2 = x2 - 420 * (t / h);
				ty2 = 210 - 420 * (t / h);
				yc = 210 * (y / h);
				zc = 210 * (z / h);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 58, x2, 210);
				ctx1.fillStyle = '#fff';
				ctx1.fillRect(tx1, ty1, tx2, ty2);
				drawcdg(yc, zc);
			} else {
				y1 = 268 - 210 * (h / b);
				y2 = 210 * (h / b);
				tx1 = 22 + 210 * (t / b);
				ty1 = y1 + 210 * (t / b);
				tx2 = 210 - 420 * (t / b);
				ty2 = y2 - 420 * (t / b);
				yc = 210 * (y / b);
				zc = 210 * (z / b);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, y1, 210, y2);
				ctx1.fillStyle = 'white';
				ctx1.fillRect(tx1, ty1, tx2, ty2);
				drawcdg(yc, zc - 58 + y1);
			}

			A = b * h - (b - 2 * t) * (h - 2 * t);
			Iy = (b * h * h * h) / 12 - (b1 * h1 * h1 * h1) / 12;
			Iz = (h * b * b * b) / 12 - (h1 * b1 * b1 * b1) / 12;
			Qy = 2 * b * t;
			Qz = 2 * h * t;
			Sy = (b * h * h) / 6 - (b1 * h1 * h1 * h1) / (6 * h);
			Sz = (h * b * b) / 6 - (h1 * b1 * b1 * b1) / (6 * b);
			Zy = (b * h * h) / 4 - (b - 2 * t) * (h / 2 - t) * (h / 2 - t);
			Zz = (h * b * b) / 4 - (h - 2 * t) * (b / 2 - t) * (b / 2 - t);
			J =
				(2 * t ** 2 * (b - t) ** 2 * (h - t) ** 2) /
				(b * t + h * t - 2 * t ** 2);

			putresults();
		}
	} else if (select.value == circularH) {
		drawaxes();
		var r = parseFloat(document.getElementById('radius').value);
		var t = parseFloat(document.getElementById('thick').value);
		var tr = 80 - 80 * (t / r);
		var r1 = r - t;

		if (
			document.getElementById('radius').value == '' ||
			document.getElementById('thick').value == '' ||
			document.getElementById('radius').value == 0 ||
			document.getElementById('thick').value == 0
		) {
			openModal(error);
		} else if (r <= t) {
			openModal(
				'Section thickness (t) cannot be greater than or equal to radius (r).'
			);
		} else {
			var ctx1 = document.getElementById('diagram').getContext('2d');
			ctx1.beginPath();
			ctx1.arc(101, 188, 80, 0, 2 * Math.PI);
			ctx1.fillStyle = '#c21320';
			ctx1.fill();
			ctx1.lineWidth = 1;
			ctx1.strokeStyle = '#ffff';
			ctx1.stroke();
			ctx1.beginPath();
			ctx1.arc(101, 188, tr, 0, 2 * Math.PI);
			ctx1.fillStyle = '#ffff';
			ctx1.fill();
			ctx1.lineWidth = 1;
			ctx1.strokeStyle = '#fff';
			ctx1.stroke();
			drawcdg(101 - 22, 188 - 58);

			A = r * r * Math.PI - r1 * r1 * Math.PI;
			y = (r * 2) / 2;
			z = (r * 2) / 2;
			Iy = (Math.PI / 4) * (r * r * r * r - r1 * r1 * r1 * r1);
			Iz = (Math.PI / 4) * (r * r * r * r - r1 * r1 * r1 * r1);
			Qy = Math.PI * (r - t / 2) * t;
			Qz = Math.PI * (r - t / 2) * t;
			Sy = (Math.PI / (4 * r)) * (r * r * r * r - r1 * r1 * r1 * r1);
			Sz = (Math.PI / (4 * r)) * (r * r * r * r - r1 * r1 * r1 * r1);
			Zy = (r * 2 * (r * 2) * (r * 2) - r1 * 2 * (r1 * 2) * (r1 * 2)) / 6;
			Zz = (r * 2 * (r * 2) * (r * 2) - r1 * 2 * (r1 * 2) * (r1 * 2)) / 6;
			J = Iy + Iz;

			putresults();
		}
	} else if (select.value == iSection) {
		drawaxes();
		var h = parseFloat(document.getElementById('height').value);
		var tw = parseFloat(document.getElementById('thickw').value);
		var tf1 = parseFloat(document.getElementById('thickf1').value);
		var tf2 = parseFloat(document.getElementById('thickf2').value);
		var bf1 = parseFloat(document.getElementById('basef1').value);
		var bf2 = parseFloat(document.getElementById('basef2').value);
		var qh = 0;
		var qtw = 0;
		var qtf1 = 0;
		var qtf2 = 0;
		var qbf1 = 0;
		var qbf2 = 0;
		var coef1 = h - bf1;
		var coef2 = h - bf2;
		var coef3 = bf1 - bf2;
		var hw = h - tf1 - tf2;
		var y1 = 0;

		if (
			document.getElementById('height').value == '' ||
			document.getElementById('basef1').value == '' ||
			document.getElementById('basef2').value == '' ||
			document.getElementById('thickf1').value == '' ||
			document.getElementById('thickf2').value == '' ||
			document.getElementById('thickw').value == '' ||
			document.getElementById('height').value == 0 ||
			document.getElementById('basef1').value == 0 ||
			document.getElementById('basef2').value == 0 ||
			document.getElementById('thickf1').value == 0 ||
			document.getElementById('thickf2').value == 0 ||
			document.getElementById('thickw').value == 0
		) {
			openModal(error);
		} else if (bf1 <= tw) {
			openModal(
				'Web thickness (tw) cannot be greater than or equal to bottom flange width (bf1).'
			);
		} else if (bf2 <= tw) {
			openModal(
				'Web thickness (tw) cannot be greater than or equal to top flange width (bf2).'
			);
		} else if (h <= tf1 + tf2) {
			openModal(
				'Flange thicknes (tf1) + flange thickness (tf2) cannot be greater than or equal to height (h).'
			);
		} else {
			A = bf1 * tf1 + bf2 * tf2 + (h - tf1 - tf2) * tw;

			if (A / 2 < bf1 * tf1) {
				y1 = A / (2 * bf1);
			} else if (A / 2 < bf2 * tf2) {
				y1 = h - A / (2 * bf2);
			} else {
				y1 = (A / 2 - bf1 * tf1) / tw + tf1;
			}
			y =
				(bf1 * tf1 * (tf1 / 2) +
					(h - tf1 - tf2) * tw * (h - hw - tf2 + hw / 2) +
					bf2 * tf2 * (h - tf2 / 2)) /
				A;
			z = Math.max(bf1, bf2) / 2;

			if ((coef2 <= 0) & (coef3 <= 0)) {
				qh = 210 * (h / bf2);
				qtw = 210 * (tw / bf2);
				qtf1 = 210 * (tf1 / bf2);
				qtf2 = 210 * (tf2 / bf2);
				qbf1 = 210 * (bf1 / bf2);
				qbf2 = 210;
				yc = 210 * (z / bf2);
				zc = 210 * (y / bf2);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qbf2, qtf2);
				ctx1.fillRect(22 + 0.5 * (qbf2 - qbf1), 268 - qtf1, qbf1, qtf1);
				ctx1.fillRect(
					22 + 0.5 * (qbf2 - qtw),
					268 - qh + qtf2,
					qtw,
					qh - qtf1 - qtf2
				);
				drawcdg(qbf2 / 2, 268 - zc - 58);
			} else if ((coef1 <= 0) & (coef3 >= 0)) {
				qh = 210 * (h / bf1);
				qtw = 210 * (tw / bf1);
				qtf1 = 210 * (tf1 / bf1);
				qtf2 = 210 * (tf2 / bf1);
				qbf1 = 210;
				qbf2 = 210 * (bf2 / bf1);
				yc = 210 * (z / bf1);
				zc = 210 * (y / bf1);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22 + 0.5 * (qbf1 - qbf2), 268 - qh, qbf2, qtf2);
				ctx1.fillRect(22, 268 - qtf1, qbf1, qtf1);
				ctx1.fillRect(
					22 + 0.5 * (qbf1 - qtw),
					268 - qh + qtf2,
					qtw,
					qh - qtf1 - qtf2
				);
				drawcdg(qbf1 / 2, 268 - zc - 58);
			} else if ((coef1 > 0) & (coef2 > 0) & (coef3 >= 0)) {
				qh = 210;
				qtw = 210 * (tw / h);
				qtf1 = 210 * (tf1 / h);
				qtf2 = 210 * (tf2 / h);
				qbf1 = 210 * (bf1 / h);
				qbf2 = 210 * (bf2 / h);
				yc = 210 * (z / h);
				zc = 210 * (y / h);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22 + 0.5 * (qbf1 - qbf2), 268 - qh, qbf2, qtf2);
				ctx1.fillRect(22, 268 - qtf1, qbf1, qtf1);
				ctx1.fillRect(
					22 + 0.5 * (qbf1 - qtw),
					268 - qh + qtf2,
					qtw,
					qh - qtf1 - qtf2
				);
				drawcdg(qbf1 / 2, 268 - zc - 58);
			} else if ((coef1 > 0) & (coef2 > 0) & (coef3 < 0)) {
				qh = 210;
				qtw = 210 * (tw / h);
				qtf1 = 210 * (tf1 / h);
				qtf2 = 210 * (tf2 / h);
				qbf1 = 210 * (bf1 / h);
				qbf2 = 210 * (bf2 / h);
				yc = 210 * (z / h);
				zc = 210 * (y / h);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qbf2, qtf2);
				ctx1.fillRect(22 + 0.5 * (qbf2 - qbf1), 268 - qtf1, qbf1, qtf1);
				ctx1.fillRect(
					22 + 0.5 * (qbf2 - qtw),
					268 - qh + qtf2,
					qtw,
					qh - qtf1 - qtf2
				);
				drawcdg(qbf2 / 2, 268 - zc - 58);
			}

			A = bf1 * tf1 + bf2 * tf2 + (h - tf1 - tf2) * tw;
			Iy =
				(1 / 12) * tw * hw ** 3 +
				tw * hw * (hw / 2 + tf1 - y) ** 2 +
				((1 / 12) * bf2 * tf2 ** 3 + bf2 * tf2 * (h - y - tf2 / 2) ** 2) +
				((1 / 12) * bf1 * tf1 ** 3 + bf1 * tf1 * (y - tf1 / 2) ** 2);
			Iz = (1 / 12) * (hw * tw ** 3 + tf2 * bf2 ** 3 + tf1 * bf1 ** 3);
			Qy = (5 / 6) * (bf1 * tf1 + bf2 * tf2);
			Qz = h * tw;
			if (y > h / 2) {
				Sy = Iy / y;
			} else {
				Sy = Iy / (h - y);
			}
			Sz = Iz / z;
			if (y1 < tf1) {
				Zy =
					(y1 ** 2 / 2) * bf1 +
					((tf1 - y1) ** 2 / 2) * bf1 +
					hw * tw * (hw / 2 + tf1 - y1) +
					tf2 * bf2 * (tf2 / 2 + hw + tf1 - y1);
			} else if (y1 > hw + tf1) {
				Zy =
					bf1 * tf1 * (y1 - tf1 / 2) +
					hw * tw * (hw / 2 + y1 - hw - tf1) +
					((y1 - hw - tf1) ** 2 / 2) * bf2 +
					((h - y1) ** 2 / 2) * bf2;
			} else {
				Zy =
					bf2 * tf2 * (h - y1 - tf2 / 2) +
					(tw * (hw + tf1 - y1) * (hw + tf1 - y1)) / 2 +
					(tw * (y1 - tf1) * (y1 - tf1)) / 2 +
					bf1 * tf1 * (y1 - tf1 / 2);
			}
			Zz = (1 / 4) * (bf2 * bf2 * tf2 + hw * tw * tw + bf1 * bf1 * tf1);
			J =
				(bf1 * tf1 ** 3 + bf2 * tf2 ** 3 + (hw + (tf1 + tf2) / 2) * tw ** 3) /
				3;

			putresults();
		}
	} else if (select.value == tSection) {
		drawaxes();
		var h = parseFloat(document.getElementById('height').value);
		var tw = parseFloat(document.getElementById('thickw').value);
		var tf = parseFloat(document.getElementById('thickf').value);
		var bf = parseFloat(document.getElementById('basef').value);
		var qh = 0;
		var qtw = 0;
		var qtf = 0;
		var qbf = 0;
		var coef1 = h - bf;
		var hw = h - tf;
		var Aw = hw * tw;
		var Af = bf * tf;
		var y1 = 0;
		var tfa = 0;
		A = tw * (h - tf) + tf * bf;

		if (A / 2 < Aw) {
			y1 = A / 2 / tw;
		} else {
			tfa = (A / 2 - Aw) / bf;
			y1 = tfa + hw;
		}

		var hw1 = hw - y1;
		y = ((tw * hw * hw) / 2 + bf * tf * (h - tf / 2)) / A;
		z = bf / 2;

		if (
			document.getElementById('height').value == '' ||
			document.getElementById('basef').value == '' ||
			document.getElementById('thickf').value == '' ||
			document.getElementById('thickw').value == '' ||
			document.getElementById('height').value == 0 ||
			document.getElementById('basef').value == 0 ||
			document.getElementById('thickf').value == 0 ||
			document.getElementById('thickw').value == 0
		) {
			openModal(error);
		} else if (h <= tf) {
			openModal(
				'Flange thickness (tf) cannot be greater than or equal to height (h).'
			);
		} else if (bf <= tw) {
			openModal(
				'Web thickness (tw) cannot be greater than or equal to flange width (bf).'
			);
		} else {
			if (coef1 <= 0) {
				qh = 210 * (h / bf);
				qtw = 210 * (tw / bf);
				qtf = 210 * (tf / bf);
				qbf = 210;
				yc = 210 * (z / bf);
				zc = 210 * (y / bf);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qbf, qtf);
				ctx1.fillRect(22 + 0.5 * (qbf - qtw), 268 - qh + qtf, qtw, qh - qtf);
				drawcdg(qbf / 2, 268 - zc - 58);
			} else {
				qh = 210;
				qtw = 210 * (tw / h);
				qtf = 210 * (tf / h);
				qbf = 210 * (bf / h);
				yc = 210 * (z / h);
				zc = 210 * (y / h);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qbf, qtf);
				ctx1.fillRect(22 + 0.5 * (qbf - qtw), 268 - qh + qtf, qtw, qh - qtf);
				drawcdg(qbf / 2, 268 - zc - 58);
			}

			A = tw * (h - tf) + tf * bf;
			Iy =
				(bf * tf ** 3) / 12 +
				bf * tf * (h - y - tf / 2) ** 2 +
				(tw * (h - tf) ** 3) / 12 +
				tw * (h - tf) * (y - (h - tf) / 2) ** 2;
			Iz = (1 / 12) * ((h - tf) * tw ** 3 + tf * bf ** 3);
			Qy = (5 / 6) * bf * tf;
			Qz = h * tw;
			Sy = Iy / y;
			Sz = (2 * Iz) / ((bf * 2) / 2);
			if (y1 < hw) {
				Zy =
					bf * tf * (tf / 2 + hw1) + (tw * hw1 ** 2) / 2 + (tw * y1 ** 2) / 2;
			} else {
				Zy =
					(bf * (h - y1) ** 2) / 2 +
					(bf * (y1 - hw) ** 2) / 2 +
					tw * hw * (y1 - hw / 2);
			}
			Zz = (1 / 4) * (tf * bf ** 2 + (h - tf) * tw ** 2);
			J = (1 / 3) * (bf * tf ** 3 + (h - tf / 2) * tw ** 3);

			putresults();
		}
	} else if (select.value == angle) {
		drawaxes();
		var h = parseFloat(document.getElementById('height').value);
		var t = parseFloat(document.getElementById('thick').value);
		var b = parseFloat(document.getElementById('base').value);
		var qh = 0;
		var qt = 0;
		var qb = 0;
		var coef1 = h - b;
		var hw = h - 2 * t;
		var z1 = 0;
		var y1 = 0;
		var bf = b - t;
		A = b * t + (h - t) * t;

		if (A / 2 > t * b) {
			y1 = h - A / (2 * t);
		} else {
			y1 = A / (2 * b);
		}

		if (A / 2 > t * h) {
			z1 = b - A / (2 * t);
		} else {
			z1 = A / (2 * h);
		}

		z = ((t / 2) * (b ** 2 + h * t - t ** 2)) / A;
		y = ((t / 2) * (h ** 2 + b * t - t ** 2)) / A;

		if (
			document.getElementById('height').value == '' ||
			document.getElementById('base').value == '' ||
			document.getElementById('thick').value == '' ||
			document.getElementById('height').value == 0 ||
			document.getElementById('base').value == 0 ||
			document.getElementById('thick').value == 0
		) {
			openModal(error);
		} else if (h <= t) {
			openModal(
				'Section thickness (t) cannot be greater than or equal to height (h).'
			);
		} else if (b <= t) {
			openModal(
				'Section thickness (t) cannot be greater than or equal to width (b).'
			);
		} else {
			if (coef1 <= 0) {
				qh = 210 * (h / b);
				qt = 210 * (t / b);
				qb = 210;
				yc = 210 * (z / b);
				zc = 210 * (y / b);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qt, qh);
				ctx1.fillRect(22, 268 - qt, qb, qt);
			} else {
				qh = 210;
				qt = 210 * (t / h);
				qb = 210 * (b / h);
				yc = 210 * (z / h);
				zc = 210 * (y / h);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qt, qh);
				ctx1.fillRect(22, 268 - qt, qb, qt);
			}

			A = b * t + (h - t) * t;
			Iy =
				(h ** 3 * t) / 12 +
				h * t * (h / 2 - y) ** 2 +
				(bf * t ** 3) / 12 +
				bf * t * (y - t / 2) ** 2;
			Iz = (t / 3) * (h * t ** 2 + b ** 3 - t ** 3) - A * z ** 2;
			Qy = b * t;
			Qz = h * t;
			Sy = Iy / (h - y);
			Sz = Iz / (b - z);
			if (y1 > t) {
				Zy =
					b * t * (y1 - t / 2) +
					(t * (y1 - t) ** 2) / 2 +
					(t * (h - y1) ** 2) / 2;
			} else {
				Zy =
					(y1 ** 2 / 2) * b +
					((t - y1) ** 2 / 2) * b +
					(h - t) * t * ((h - t) / 2 + t - y1);
			}
			if (z1 > t) {
				Zz =
					h * t * (z1 - t / 2) +
					(t * (z1 - t) ** 2) / 2 +
					(t * (b - z1) ** 2) / 2;
			} else {
				Zz =
					(z1 ** 2 / 2) * h +
					((t - z1) ** 2 / 2) * h +
					(b - t) * t * ((b - t) / 2 + t - z1);
			}
			J = ((h + b - t) * t ** 3) / 3;
			var Ixy = (t ** 2 / 4) * (b ** 2 + h ** 2 - t ** 2) - A * y * z;
			var CD = (1 / 2) * (Iy - Iz);
			var Rp = Math.sqrt((2 * Ixy) ** 2 + (Iy - Iz) ** 2) / 2;
			Ta = Math.atan(Ixy / CD) / 2;
			if (h > b) {
				Izp = Iz - Rp * (1 - Math.cos(2 * Ta));
				Iyp = Izp + 2 * Rp;
			} else {
				Iyp = Iy - Rp * (1 - Math.cos(2 * Ta));
				Izp = Iyp + 2 * Rp;
			}

			var c = 2 * 100 * Math.sin(Ta / 2);
			var Ba = Math.asin((100 * Math.sin(Ta)) / c);
			var v = Math.cos(Ba) * c;
			var u = Math.sin(Ba) * c;
			drawcdgangle(yc, 268 - zc - 58, v, u);

			putresults();
		}
	} else if (select.value == channel) {
		drawaxes();
		var h = parseFloat(document.getElementById('height').value);
		var tw = parseFloat(document.getElementById('thickw').value);
		var tf = parseFloat(document.getElementById('thickf').value);
		var b = parseFloat(document.getElementById('basef').value);
		var qh = 0;
		var qtw = 0;
		var qtf = 0;
		var qb = 0;
		var coef1 = h - b;
		var hw = h - 2 * tf;
		var bf = b - tw;
		var z1 = 0;

		A = b * tf * 2 + (h - 2 * tf) * tw;

		if (A / 2 > h * tw) {
			z1 = b - A / (4 * tf);
		} else {
			z1 = A / (2 * h);
		}

		y = h / 2;
		z = (2 * ((b * tf * b) / 2) + ((h - 2 * tf) * tw * tw) / 2) / A;

		if (
			document.getElementById('height').value == '' ||
			document.getElementById('basef').value == '' ||
			document.getElementById('thickf').value == '' ||
			document.getElementById('thickw').value == '' ||
			document.getElementById('height').value == 0 ||
			document.getElementById('basef').value == 0 ||
			document.getElementById('thickf').value == 0 ||
			document.getElementById('thickw').value == 0
		) {
			openModal(error);
		} else if (h / 2 <= tf) {
			openModal(
				'Flanges thickness (tf) cannot be greater than or equal to half of height (h).'
			);
		} else if (b <= tw) {
			openModal(
				'Web thickness (tw) cannot be greater than or equal to flanges width (bf).'
			);
		} else {
			if (coef1 <= 0) {
				qh = 210 * (h / b);
				qtw = 210 * (tw / b);
				qtf = 210 * (tf / b);
				qb = 210;
				yc = 210 * (z / b);
				zc = 210 * (y / b);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qb, qtf);
				ctx1.fillRect(22, 268 - qh, qtw, qh);
				ctx1.fillRect(22, 268 - qtf, qb, qtf);
				drawcdg(yc, qh / 2);
			} else {
				qh = 210;
				qtw = 210 * (tw / h);
				qtf = 210 * (tf / h);
				qb = 210 * (b / h);
				yc = 210 * (z / h);
				zc = 210 * (y / h);
				var ctx1 = document.getElementById('diagram').getContext('2d');
				ctx1.beginPath();
				ctx1.fillStyle = '#c21320';
				ctx1.fillRect(22, 268 - qh, qb, qtf);
				ctx1.fillRect(22, 268 - qh, qtw, qh);
				ctx1.fillRect(22, 268 - qtf, qb, qtf);
				drawcdg(yc, qh / 2);
			}

			A = b * tf * 2 + (h - 2 * tf) * tw;
			Iy =
				2 * ((b * tf ** 3) / 12 + b * tf * (h / 2 - tf / 2) ** 2) +
				(hw ** 3 * tw) / 12;
			Iz = (2 * tf * b ** 3 + hw * tw ** 3) / 3 - A * z ** 2;
			Qy = 2 * b * tf;
			Qz = h * tw;
			Sy = (b * h ** 2) / 6 - ((b - tw) * hw ** 3) / (6 * h);
			Sz = Iz / (b - z);
			Zy = (hw ** 2 * tw) / 4 + 2 * b * tf * (tf / 2 + hw / 2);
			if (z1 > tw) {
				Zz = (b - z1) ** 2 * tf + (z1 - tw) ** 2 * tf + h * tw * (z1 - tw / 2);
			} else {
				Zz =
					(z1 ** 2 / 2) * h +
					((tw - z1) ** 2 / 2) * h +
					2 * (bf * tf * (bf / 2 + tw - z1));
			}
			J = (1 / 3) * (2 * (b - tw / 2) * tf ** 3 + hw * tw ** 3);

			putresults();
		}
	}

	function outputnum(out) {
		if (out > 9999999) {
			out = out.toExponential(3);
		} else if (9999999 > out && out % 1 == 0) {
			out = out.toFixed(1);
		} else if (9999999 > out && out % 1 != 0 && out >= 100) {
			out = out.toFixed(1);
		} else if (100 > out && out % 1 != 0 && out >= 10) {
			out = out.toFixed(2);
		} else if (10 > out && out % 1 != 0 && out >= 0.01) {
			out = out.toFixed(3);
		} else if (0.01 > out) {
			out = out.toExponential(3);
		}
		return out;
	}

	function putresults() {
		let Ao = outputnum(A);
		let yo = outputnum(y);
		let zo = outputnum(z);
		let Iyo = outputnum(Iy);
		let Izo = outputnum(Iz);
		let Qyo = outputnum(Qy);
		let Qzo = outputnum(Qz);
		let Syo = outputnum(Sy);
		let Szo = outputnum(Sz);
		let Zyo = outputnum(Zy);
		let Zzo = outputnum(Zz);
		let Jo = outputnum(J);
		let Iypo = outputnum(Iyp);
		let Izpo = outputnum(Izp);
		let Tao = (Ta * 180) / Math.PI;
		document.querySelectorAll('.Ao').forEach((element) => {
			element.textContent = Ao;
		});
		document.querySelectorAll('.yo').forEach((element) => {
			element.textContent = yo;
		});
		document.querySelectorAll('.zo').forEach((element) => {
			element.textContent = zo;
		});
		document.querySelectorAll('.Iyo').forEach((element) => {
			element.textContent = Iyo;
		});
		document.querySelectorAll('.Izo').forEach((element) => {
			element.textContent = Izo;
		});
		document.querySelectorAll('.Qyo').forEach((element) => {
			element.textContent = Qyo;
		});
		document.querySelectorAll('.Qzo').forEach((element) => {
			element.textContent = Qzo;
		});
		document.querySelectorAll('.Syo').forEach((element) => {
			element.textContent = Syo;
		});
		document.querySelectorAll('.Szo').forEach((element) => {
			element.textContent = Szo;
		});
		document.querySelectorAll('.Zzo').forEach((element) => {
			element.textContent = Zyo;
		});
		document.querySelectorAll('.Jo').forEach((element) => {
			element.textContent = Jo;
		});
		document.querySelectorAll('.Zz').forEach((element) => {
			element.textContent = Zzo;
		});
		document.querySelectorAll('.Iyp').forEach((element) => {
			element.textContent = Iypo;
		});
		document.querySelectorAll('.Izp').forEach((element) => {
			element.textContent = Izpo;
		});
		document.querySelectorAll('.Teta').forEach((element) => {
			element.textContent = Tao.toFixed(2);
		});
	}
}

// * ========= MAIN ========= //
const seccion = () => {
	if (select.value === rectangular) {
		console.log('entra');
		section__img.src = './assets/images/Rectangular.svg';
		section__title.textContent = 'Rectangular';
		results__angle.forEach((angle) => {
			console.log('entra');
			angle.classList.add('hidden');
		});
		if (
			document
				.querySelector('.section__units--1')
				.classList.contains('display') ||
			document.querySelector('.section__units--2').classList.contains('display')
		) {
			console.log('sisas');
			//  * REMOVE
			document.querySelector('.section__units--1').classList.remove('display');
			document.querySelector('.section__units--2').classList.remove('display');

			// * ADD
			document.querySelector('.section__units--3').classList.add('display');
			document.querySelector('.section__units--4').classList.add('display');
			document.querySelector('.section__units--5').classList.add('display');
			document.querySelector('.section__units--6').classList.add('display');
			document.querySelector('.section__units--7').classList.add('display');
			document.querySelector('.section__units--8').classList.add('display');
			document.querySelector('.section__units--9').classList.add('display');
			document.querySelector('.section__units--10').classList.add('display');
			document.querySelector('.section__units--11').classList.add('display');
		}
		document.querySelector('.section__units--4').classList.add('display');
	} else if (select.value === circular) {
		section__img.src = './assets/images/circular.svg';
		section__title.textContent = 'Circular';
		results__angle.forEach((angle) => {
			angle.classList.add('hidden');
		});
		if (
			document.querySelector('.section__units--3').classList.contains('display')
		) {
			//  * REMOVE
			document.querySelector('.section__units--3').classList.remove('display');
			// * ADD
			document.querySelector('.section__units--1').classList.add('display');
			document.querySelector('.section__units--2').classList.add('display');
			document.querySelector('.section__units--4').classList.add('display');
			document.querySelector('.section__units--5').classList.add('display');
			document.querySelector('.section__units--6').classList.add('display');
			document.querySelector('.section__units--7').classList.add('display');
			document.querySelector('.section__units--8').classList.add('display');
			document.querySelector('.section__units--9').classList.add('display');
			document.querySelector('.section__units--10').classList.add('display');
			document.querySelector('.section__units--11').classList.add('display');
		}
	} else if (select.value === rectangularH) {
		section__img.src = './assets/images/RectangularHollow.svg';
		section__title.textContent = 'Rectangular Hollow';
		results__angle.forEach((angle) => {
			angle.classList.add('hidden');
		});
		if (
			document
				.querySelector('.section__units--1')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--2')
				.classList.contains('display') ||
			document.querySelector('.section__units--4').classList.contains('display')
		) {
			//  * REMOVE
			document.querySelector('.section__units--1').classList.remove('display');
			document.querySelector('.section__units--2').classList.remove('display');
			document.querySelector('.section__units--4').classList.remove('display');
			// * ADD
			document.querySelector('.section__units--3').classList.add('display');
			document.querySelector('.section__units--5').classList.add('display');
			document.querySelector('.section__units--6').classList.add('display');
			document.querySelector('.section__units--7').classList.add('display');
			document.querySelector('.section__units--8').classList.add('display');
			document.querySelector('.section__units--9').classList.add('display');
			document.querySelector('.section__units--10').classList.add('display');
			document.querySelector('.section__units--11').classList.add('display');
		}
	} else if (select.value === circularH) {
		section__img.src = './assets/images/CircularHollow.svg';
		section__title.textContent = 'Circular Hollow';
		results__angle.forEach((angle) => {
			angle.classList.add('hidden');
		});
		if (
			document
				.querySelector('.section__units--3')
				.classList.contains('display') ||
			document.querySelector('.section__units--4').classList.contains('display')
		) {
			//  * REMOVE
			document.querySelector('.section__units--3').classList.remove('display');
			document.querySelector('.section__units--4').classList.remove('display');
			// * ADD
			document.querySelector('.section__units--1').classList.add('display');
			document.querySelector('.section__units--2').classList.add('display');
			document.querySelector('.section__units--5').classList.add('display');
			document.querySelector('.section__units--6').classList.add('display');
			document.querySelector('.section__units--7').classList.add('display');
			document.querySelector('.section__units--8').classList.add('display');
			document.querySelector('.section__units--9').classList.add('display');
			document.querySelector('.section__units--10').classList.add('display');
			document.querySelector('.section__units--11').classList.add('display');
		}
	} else if (select.value === channel) {
		section__img.src = './assets/images/Channel.svg';
		section__title.textContent = 'Channel';
		results__angle.forEach((angle) => {
			angle.classList.add('hidden');
		});

		if (
			document
				.querySelector('.section__units--2')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--5')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--9')
				.classList.contains('display') ||
			document.querySelector('.section__units--6').classList.contains('display')
		) {
			//  * REMOVE
			document.querySelector('.section__units--2').classList.remove('display');
			document.querySelector('.section__units--5').classList.remove('display');
			document.querySelector('.section__units--9').classList.remove('display');
			document.querySelector('.section__units--6').classList.remove('display');
			// * ADD
			document.querySelector('.section__units--1').classList.add('display');
			document.querySelector('.section__units--4').classList.add('display');
			document.querySelector('.section__units--7').classList.add('display');
			document.querySelector('.section__units--8').classList.add('display');
			document.querySelector('.section__units--10').classList.add('display');
			document.querySelector('.section__units--11').classList.add('display');
		}
	} else if (select.value === iSection) {
		section__img.src = './assets/images/ISection.svg';
		section__title.textContent = 'I - Section';
		results__angle.forEach((angle) => {
			angle.classList.add('hidden');
		});

		if (
			document
				.querySelector('.section__units--2')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--5')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--7')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--8')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--10')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--11')
				.classList.contains('display')
		) {
			//  * REMOVE
			document.querySelector('.section__units--2').classList.remove('display');
			document.querySelector('.section__units--5').classList.remove('display');
			document.querySelector('.section__units--7').classList.remove('display');
			document.querySelector('.section__units--8').classList.remove('display');
			document.querySelector('.section__units--10').classList.remove('display');
			document.querySelector('.section__units--11').classList.remove('display');
			// * ADD
			document.querySelector('.section__units--1').classList.add('display');
			document.querySelector('.section__units--3').classList.add('display');
			document.querySelector('.section__units--6').classList.add('display');
			document.querySelector('.section__units--4').classList.add('display');
			document.querySelector('.section__units--9').classList.add('display');
		}
	} else if (select.value === tSection) {
		section__img.src = './assets/images/TSection.svg';
		section__title.textContent = 'T - Section';
		results__angle.forEach((angle) => {
			angle.classList.add('hidden');
		});

		if (
			document
				.querySelector('.section__units--2')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--5')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--9')
				.classList.contains('display') ||
			document.querySelector('.section__units--6').classList.contains('display')
		) {
			//  * REMOVE
			document.querySelector('.section__units--2').classList.remove('display');
			document.querySelector('.section__units--5').classList.remove('display');
			document.querySelector('.section__units--9').classList.remove('display');
			document.querySelector('.section__units--6').classList.remove('display');
			// * ADD
			document.querySelector('.section__units--1').classList.add('display');
			document.querySelector('.section__units--4').classList.add('display');
			document.querySelector('.section__units--7').classList.add('display');
			document.querySelector('.section__units--8').classList.add('display');
			document.querySelector('.section__units--10').classList.add('display');
			document.querySelector('.section__units--11').classList.add('display');
		}
	} else if (select.value === angle) {
		section__img.src = './assets/images/Angle.svg';
		section__title.textContent = 'Angle';
		results__angle.forEach((angle) => {
			angle.classList.remove('hidden');
		});

		if (
			document
				.querySelector('.section__units--1')
				.classList.contains('display') ||
			document
				.querySelector('.section__units--2')
				.classList.contains('display') ||
			document.querySelector('.section__units--4').classList.contains('display')
		) {
			//  * REMOVE
			document.querySelector('.section__units--1').classList.remove('display');
			document.querySelector('.section__units--2').classList.remove('display');
			document.querySelector('.section__units--4').classList.remove('display');
			// * ADD
			document.querySelector('.section__units--3').classList.add('display');
			document.querySelector('.section__units--5').classList.add('display');
			document.querySelector('.section__units--6').classList.add('display');
			document.querySelector('.section__units--7').classList.add('display');
			document.querySelector('.section__units--8').classList.add('display');
			document.querySelector('.section__units--9').classList.add('display');
			document.querySelector('.section__units--10').classList.add('display');
			document.querySelector('.section__units--11').classList.add('display');
		}
	}
};

select.addEventListener('change', seccion);

const meters = '(m)';
const centimeters = '(cm)';
const milimeters = '(mm)';
const feet = '(ft)';
const inches = '(in)';
console.log(meters.replace(')', ''));
const selectUnit = () => {
	if (selectUnits.value === meters) {
		for (let i = 0; i < section__span.length; i++) {
			section__span[i].textContent = meters.replace(')', '');
		}
		section__unit.textContent = 'meters (m)';
	} else if (selectUnits.value === centimeters) {
		for (let i = 0; i < section__span.length; i++) {
			section__span[i].textContent = centimeters.replace(')', '');
		}
		section__unit.textContent = 'centimeters (cm)';
	} else if (selectUnits.value === milimeters) {
		for (let i = 0; i < section__span.length; i++) {
			section__span[i].textContent = milimeters.replace(')', '');
		}
		section__unit.textContent = 'milimeters (mm)';
	} else if (selectUnits.value === feet) {
		for (let i = 0; i < section__span.length; i++) {
			section__span[i].textContent = feet.replace(')', '');
		}
		section__unit.textContent = 'feet (ft)';
	} else if (selectUnits.value === inches) {
		for (let i = 0; i < section__span.length; i++) {
			section__span[i].textContent = inches.replace(')', '');
		}
		section__unit.textContent = 'inches (in)';
	}
};
selectUnits.addEventListener('change', selectUnit);
