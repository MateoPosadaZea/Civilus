// ! ========= SEND EMAIL =========
const enviar = document.querySelector('#enviar');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#message');
const modal = document.querySelector('.modal');
const modal__error = document.querySelector('.modal__error');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const modal__title_error = document.querySelector('.modal__title-error');
const openModal = function (error, flag = 0) {
	if (flag) {
		modal__title_error.textContent = 'Thank you!';
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
	console.log('entra');

	if (nombre.value === '' || email.value === '' || mensaje.value === '') {
		// swal({
		// 	title: 'Error',
		// 	text: 'Input fields are required...',
		// 	icon: 'error',
		// });
		openModal('Input fields are required...');
	} else {
		sendMail(nombre.value, email.value, mensaje.value);
		openModal('Your email has been succesfully send!', 1);

		nombre.value = '';
		email.value = '';
		mensaje.value = '';
	}
});

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
