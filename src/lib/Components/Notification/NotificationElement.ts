export default class NotificationElement {
	private message: string;

	constructor(message: string) {
		this.message = message;
	}

	createElementNotification(): HTMLElement {
		const div = document.createElement('div');
		div.classList.add('popup');
		const btn = document.createElement('button');
		btn.onclick = () => div.remove();
		div.append(btn);
		const span = document.createElement('span');
		span.classList.add('visually-hidden');
		btn.append(span);
		const p = document.createElement('p');
		p.textContent = this.message;
		div.append(p);

		return div;
	}
}
