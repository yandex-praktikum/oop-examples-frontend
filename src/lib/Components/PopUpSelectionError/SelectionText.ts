export default class SelectionText {
	private selectedText: string;

	constructor() {
		this.selectedText = '';
		document.addEventListener('mouseup', this.getSelection);
	}

	private getSelection = () => {
		const selection = window.getSelection();
		this.selectedText = selection ? selection.toString() : '';
	};

	getSelectedText = () => {
		return this.selectedText;
	};
}
