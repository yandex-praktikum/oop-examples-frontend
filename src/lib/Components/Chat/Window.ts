import HeaderWindow from './HeaderWindow';
import Messages from './Messages';

class Window {
	private header: HeaderWindow;
	private messages: Messages;
	private formSend: HTMLFormElement;
	private source: null | MessageEventSource;
	private messagesList: { message: string; user: string }[];
	private currentUser: string;

	constructor(
		header: HTMLElement,
		containerMessages: HTMLElement,
		formSend: HTMLFormElement
	) {
		this.header = new HeaderWindow(header);
		this.messages = new Messages(containerMessages);
		this.formSend = formSend;
		this.source = null;
		this.messagesList = [];
		this.currentUser = location.search.split('=')[1];
		this.init();
	}

	init() {
		this.addBehavior();
	}

	render(messagesList: { message: string; user: string }[]) {
		this.header.renderHeader(this.currentUser);
		this.messages.renderContainerMessages(messagesList, this.currentUser);
	}

	addBehavior() {
		window.addEventListener('message', (e) => {
			if (Array.isArray(e.data)) {
				this.messagesList = e.data.reverse();
			}
			this.source = e.source as WindowProxy;

			this.render(this.messagesList);
		});

		const inpSend = this.formSend.querySelector('#inpSend') as HTMLInputElement;

		this.formSend.addEventListener('submit', (e) => {
			e.preventDefault();

			const message = {
				message: inpSend.value,
				user: this.currentUser,
			};
			inpSend.value = '';
			this.source.postMessage(message, { targetOrigin: '*' });
		});
	}
}

export default Window;
