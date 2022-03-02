// ! ========= SEND EMAIL =========
const enviar = document.querySelector('#enviar');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#message');
enviar.addEventListener('click', (e) => {
	e.preventDefault();

	if (nombre.value === '' || email.value === '' || mensaje.value === '') {
		swal({
			title: 'Error',
			text: 'Input fields are required...',
			icon: 'error',
		});
	} else {
		sendMail(nombre.value, email.value, mensaje.value);
		swal({
			title: 'Thank you!',
			text: 'Your email has been succesfully send!',
			icon: 'success',
		});

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
// console.log(window.screen.width);
let width = document.body.clientWidth;
if (width <= 900) {
	video.classList.remove('hidden');
	videoPhoto.classList.add('hidden');
} else if (width > 900) {
	video.classList.add('hidden');
	videoPhoto.classList.remove('hidden');
}

// const cont = () => {
// 	console.log('entra');
// 	const counters = document.querySelectorAll('.learners__span');

// 	if (document.body.clientHeight)

// 	for (let n of counters) {
// 		const updateCount = () => {
// 			const target = +n.getAttribute('data-target');
// 			const count = +n.innerText;
// 			const speed = 5000; // change animation speed here
// 			const inc = target / speed;
// 			if (count < target) {
// 				n.innerText = Math.ceil(count + inc);
// 				setTimeout(updateCount, 1);
// 			} else {
// 				n.innerText = target;
// 			}
// 		};
// 		updateCount();
// 	}
// };

// function reveal() {
// 	var counters = document.querySelectorAll('.learners__span');
// 	let bandera = false;
// 	for (var i = 0; i < counters.length; i++) {
// 		var windowHeight = window.innerHeight;
// 		var elementTop = counters[i].getBoundingClientRect().top;
// 		var elementVisible = 150;
// 		// console.log(elementTop);
// 		// console.log(windowHeight - elementVisible);

// 		if (elementTop < windowHeight - elementVisible) {
// 			bandera = true;
// 			counters.forEach((count) => {
// 				count.textContent = 0;
// 			});
// 			for (let n of counters) {
// 				const updateCount = () => {
// 					const target = +n.getAttribute('data-target');
// 					const count = +n.innerText;
// 					const speed = 5000; // change animation speed here
// 					const inc = target / speed;
// 					if (count < target) {
// 						n.innerText = Math.ceil(count + inc);
// 						setTimeout(updateCount, 1);
// 					} else {
// 						n.innerText = target;
// 					}
// 				};
// 				updateCount();
// 			}
// 		}
// 	}
// }

// window.addEventListener('scroll', reveal);

// window.addEventListener('scroll', cont);
