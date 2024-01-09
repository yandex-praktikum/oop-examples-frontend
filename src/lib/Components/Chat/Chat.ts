interface SettingsChat {
	nameFile: string;
	widthWindow: number;
	heightWindow: number;
	form: HTMLFormElement;
}

interface UserWindow {
	name: string;
	popup: Window;
}

interface Message {
	message: string;
	user: string;
}

class Chat {
	private state: {
		users: UserWindow[];
		messages: Message[];
	};
	private fileName: string;
	private paramsWindow: string;
	private form: HTMLFormElement;

	constructor(settings: SettingsChat) {
		this.fileName = settings.nameFile;
		this.paramsWindow = `width=${settings.widthWindow},height=${settings.heightWindow}`;
		this.form = settings.form;

		this.state = {
			users: [],
			messages: [],
		};

		this.init(this.form);
	}

	private init(form: HTMLFormElement) {
		const username = form.querySelector('input') as HTMLInputElement;
		const btnNewUser = form.querySelector('button');

		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const nameUser = username.value;
			username.value = '';

			if (nameUser) {
				const popupWindow = window.open(
					`${this.fileName}?nameuser=${nameUser}`,
					'',
					this.paramsWindow
				) as Window;
				this.state.users.push({
					name: nameUser,
					popup: popupWindow,
				});
				setTimeout(() => {
					popupWindow.postMessage(this.state.messages, '*');
				}, 500);
			}
		});

		window.addEventListener('message', (e) => {
			const message = e.data;

			this.state.messages.push(message);
			this.state.users.forEach((user) => {
				user.popup.postMessage(this.state.messages, '*');
			});
		});
	}
}

export default Chat;
