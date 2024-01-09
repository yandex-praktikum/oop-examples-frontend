class HeaderWindow {
	private header: HTMLElement;

	constructor(header: HTMLElement) {
		this.header = header;
	}

	renderHeader(nameUser: string) {
		this.header.textContent = `${nameUser}, вы онлайн`;
	}
}

export default HeaderWindow;
