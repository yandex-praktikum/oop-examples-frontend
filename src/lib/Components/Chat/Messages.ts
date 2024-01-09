import Message from './Message';

class Messages {
	private containerMessages: HTMLElement;

	constructor(container: HTMLElement) {
		this.containerMessages = container;
	}

	renderContainerMessages(
		messages: { message: string; user: string }[],
		currentUser: string
	) {
		this.containerMessages.replaceChildren();
		messages.forEach((message) => {
			const msg = new Message(message);
			msg.renderMessage(this.containerMessages, currentUser);
		});
	}
}

export default Messages;
