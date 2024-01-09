import PopUpNotification from '../../../lib/Components/Notification/PopUpNotification';

const popupNotification = new PopUpNotification();
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', (e) => {
	popupNotification.addNotification('Событие 1 клик');
	setTimeout(() => {
		popupNotification.renderNotification();
	}, 2000);
});

btn2.addEventListener('click', (e) => {
	popupNotification.addNotification('Событие 2 клик');
	setTimeout(() => {
		popupNotification.renderNotification();
	}, 2000);
});

btn3.addEventListener('click', (e) => {
	popupNotification.addNotification('Событие 3 клик');
	setTimeout(() => {
		popupNotification.renderNotification();
	}, 2000);
});
