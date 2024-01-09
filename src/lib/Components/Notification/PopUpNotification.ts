import NotificationElement from './NotificationElement';
import Queue from './Queue';

export default class PopUpNotification {
	private queue: Queue<HTMLElement>;

	constructor() {
		this.queue = new Queue();
	}

	addNotification(message: string) {
		const element = new NotificationElement(
			message
		).createElementNotification();
		this.queue.add(element);
	}

	renderNotification() {
		const body = document.body;
		let container = document.querySelector('.notification-container');

		if (!container) {
			container = document.createElement('div');
			container.classList.add('notification-container');

			body.append(container);
		}

		while (this.queue.size() > 0) {
			let notification = this.queue.remove();
			container.append(notification);
			setTimeout(() => {
				notification.remove();
				notification = null;
			}, 300000);
		}
	}
}
