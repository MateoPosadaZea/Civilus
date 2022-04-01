// ! ========= SEND EMAIL =========
'use strict';
const enviar = document.querySelector('#enviar');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#message');
const modal_my_mail = document.querySelector('.modal-mail');
const modal__my__error = document.querySelector('.modal__error-mail');
const overlay__mail = document.querySelector('.overlay');
const btnCloseMyModal = document.querySelector('.btn__email');
const modal__title_error = document.querySelector('.modal__title-mail');
const modal__img = document.querySelector('.modal__img');
const openMyModal = function (error, flag = 0) {
	if (flag === 0) {
		modal__img.src = './assets/icons/closeIcon.svg';
		modal__title_error.textContent = 'Error';
	} else {
		modal__img.src = './assets/icons/checkIcon.svg';
		modal__title_error.textContent = 'Thank you';
	}
	modal__my__error.textContent = error;
	modal_my_mail.classList.remove('hidden');
	overlay__mail.classList.remove('hidden');
};
const closeMyModal = function () {
	modal_my_mail.classList.add('hidden');
	overlay__mail.classList.add('hidden');
};
const closeMyModalEscape = function () {
	modal_my_mail.classList.add('hidden');
	overlay__mail.classList.add('hidden');
};

btnCloseMyModal.addEventListener('click', closeMyModal);
btnCloseMyModal.addEventListener('click', closeMyModal);
overlay__mail.addEventListener('click', () => {
	modal_my_mail.classList.add('hidden');
	overlay__mail.classList.add('hidden');
});
addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		modal_my_mail.classList.add('hidden');
		overlay__mail.classList.add('hidden');
	}
});
enviar.addEventListener('click', (e) => {
	e.preventDefault();

	if (nombre.value === '' || email.value === '' || mensaje.value === '') {
		openMyModal('Input fields are required...', 0);
	} else {
		if (validateEmail(email.value)) {
			sendMail(nombre.value, email.value, mensaje.value);
			openMyModal('Your email has been succesfully send!', 1);
		} else {
			openMyModal('Incorrect email!', 0);
		}

		nombre.value = '';
		email.value = '';
		mensaje.value = '';
	}
});

function validateEmail(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}

function sendMail(nombre, email, mensaje) {
	emailjs.send('civilus_email', 'template_e5vxurm', {
		to_name: 'Hector',
		from_name: `${nombre} ${email}`,
		message: mensaje,
	});
}

const my__video = document.querySelector('.video');
const my__videoPhoto = document.querySelector('.video--photo');
let onResize = function () {
	let width = document.body.clientWidth;
	if (width <= 900) {
		my__video.classList.remove('hidden');
		my__videoPhoto.classList.add('hidden');
	} else if (width > 900) {
		my__video.classList.add('hidden');
		my__videoPhoto.classList.remove('hidden');
	}
};
window.addEventListener('resize', onResize);
let width = document.body.clientWidth;
if (width <= 900) {
	my__video.classList.remove('hidden');
	my__videoPhoto.classList.add('hidden');
} else if (width > 900) {
	my__video.classList.add('hidden');
	my__videoPhoto.classList.remove('hidden');
}
