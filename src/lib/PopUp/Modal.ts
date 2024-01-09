import PopUp, { PositionInterface } from './PopUp';

class Modal extends PopUp {
	protected override nameWidget: string = 'modal';

	protected override addBehavior(
		trigger: HTMLElement,
		popup: HTMLElement
	): void {
		trigger.addEventListener('click', (e) => {
			e.preventDefault();

			this.show(popup);
			popup.classList.add('display_flex');
		});

		const elementCloses = Array.from(
			popup.querySelectorAll('[data-modal-close]')
		);

		elementCloses.forEach((element) => {
			element.addEventListener('click', (e) => {
				e.preventDefault();

				this.hide(popup);
				popup.classList.remove('display_flex');
			});
		});
	}
}

export default Modal;
