// ! ========= SEND EMAIL =========
const enviar = document.querySelector('#enviar');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#message');
const modal = document.querySelector('.modal');
const modal__error = document.querySelector('.modal__error-mail');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.modal__btn');
const modal__title_error = document.querySelector('.modal__title-mail');
const modal__img = document.querySelector('.modal__img');
const openModal = function (error, flag = 0) {
	if (flag === 0) {
		modal__img.src = './assets/icons/closeIcon.svg';
		modal__title_error.textContent = 'Error';
	} else {
		modal__img.src = './assets/icons/checkIcon.svg';
		modal__title_error.textContent = 'Thank you';
	}
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
enviar.addEventListener('click', (e) => {
	e.preventDefault();

	if (nombre.value === '' || email.value === '' || mensaje.value === '') {
		openModal('Input fields are required...', 0);
	} else {
		if (validateEmail(email.value)) {
			sendMail(nombre.value, email.value, mensaje.value);
			openModal('Your email has been succesfully send!', 1);
		} else {
			openModal('Incorrect email!', 0);
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

const video = document.querySelector('.video');
const videoPhoto = document.querySelector('.video--photo');
let onresize = function () {
	let width = document.body.clientWidth;
	if (width <= 900) {
		video.classList.remove('hidden');
		videoPhoto.classList.add('hidden');
	} else if (width > 900) {
		video.classList.add('hidden');
		videoPhoto.classList.remove('hidden');
	}
};
window.addEventListener('resize', onresize);
let width = document.body.clientWidth;
if (width <= 900) {
	video.classList.remove('hidden');
	videoPhoto.classList.add('hidden');
} else if (width > 900) {
	video.classList.add('hidden');
	videoPhoto.classList.remove('hidden');
}
