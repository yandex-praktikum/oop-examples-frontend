import PopUp from './PopUp';

class Dropdown extends PopUp {
	protected override nameWidget: string = 'dropdown';

	protected override addBehavior(
		trigger: HTMLElement,
		popup: HTMLElement
	): void {
		trigger.addEventListener('click', (e) => {
			e.preventDefault();

			const isShow = popup.classList.contains('widget_hidden');

			if (isShow) {
				this.determineСoords(trigger, popup);
			} else {
				this.hide(popup);
			}
		});

		document.addEventListener('click', (e) => {
			const target = e.target;
			if (
				!popup.contains(target as HTMLElement) &&
				!trigger.contains(target as HTMLElement)
			)
				this.hide(popup);
		});
	}
}

export default Dropdown;
