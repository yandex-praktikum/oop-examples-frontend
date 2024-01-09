class Message {
	private message: string;
	private user: string;

	constructor(message: { message: string; user: string }) {
		this.message = message.message;
		this.user = message.user;
	}

	renderMessage(container: HTMLElement, currentUser: string) {
		const div = document.createElement('div');
		div.classList.add('message');
		currentUser === this.user && div.classList.add('right');
		const span = document.createElement('span');
		span.textContent = this.message;
		const nameUser = document.createElement('span');
		nameUser.textContent = currentUser === this.user ? 'Вы' : this.user;
		nameUser.classList.add('right', 'message__user');

		div.append(span);
		div.append(nameUser);
		container.append(div);
	}
}

export default Message;
