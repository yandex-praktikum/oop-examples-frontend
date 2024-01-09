import Modal from '../../PopUp/Modal';
import PopUp from '../../PopUp/PopUp';
import SelectionText from './SelectionText';

export default class PopUpSelectionError extends PopUp {
	protected readonly nameWidget: string = 'popup-selection-error';
	private selection: SelectionText;
	private containerText: HTMLElement;
	private modal: Modal;

	constructor(containerText: HTMLElement) {
		super();
		this.selection = new SelectionText();
		this.containerText = containerText;
		this.modal = new Modal();
	}

	protected addBehavior(trigger: HTMLElement, popup: HTMLElement): void {
		const btnSend = document.querySelector('.btn__error');
		const textErrorModal = document.querySelector('.text__error');
		const textDescriptionModal = document.querySelector('.text__description');
		const comment = document.querySelector('#comment') as HTMLTextAreaElement;

		document.addEventListener('mouseup', (e: MouseEvent) => {
			const selectedText = this.selection.getSelectedText();
			const selectEl = e.target as HTMLElement;

			if (selectedText.length > 0 && !popup.contains(selectEl)) {
				popup.style.left = e.clientX.toString() + 'px';
				popup.style.top = e.clientY.toString() + 'px';
				this.containerText.textContent = selectedText;
				this.show(popup);
			}
		});
		document.addEventListener('mousedown', (e: MouseEvent) => {
			const selectEl = e.target as HTMLElement;
			if (!popup.contains(selectEl)) {
				this.hide(popup);
			}
		});
		btnSend.addEventListener('click', (e) => {
			e.preventDefault();

			textErrorModal.textContent = this.containerText.textContent;
			textDescriptionModal.textContent = comment.value;
		});

		this.modal.init('.btn__error', '#modal-feedback');
	}
}
