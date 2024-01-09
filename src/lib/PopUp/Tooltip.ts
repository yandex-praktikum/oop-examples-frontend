import PopUp from './PopUp';

class Tooltip extends PopUp {
	protected override readonly nameWidget: string = 'tooltip';

	protected override addBehavior(
		trigger: HTMLElement,
		popup: HTMLElement
	): void {
		const delayShowing = trigger.dataset[`${this.nameWidget}DelayShowing`]
			? Number(trigger.dataset[`${this.nameWidget}DelayShowing`])
			: 0;
		const delay = trigger.dataset[`${this.nameWidget}Delay`]
			? Number(trigger.dataset[`${this.nameWidget}Delay`])
			: 0.3;
		let timerId: NodeJS.Timeout;

		trigger.addEventListener('mouseover', (e) => {
			e.preventDefault();

			timerId = setTimeout(() => {
				this.determineСoords(trigger, popup);
				if (delayShowing) {
					this.hideTooltip(popup, delayShowing);
				}
			}, delay * 1000);
		});

		trigger.addEventListener('mouseout', (e) => {
			e.preventDefault();
			clearTimeout(timerId);
			this.hideTooltip(popup, delayShowing);
		});
	}

	private hideTooltip(tooltip: HTMLElement, delay: number): void {
		setTimeout(() => {
			this.hide(tooltip);
		}, delay * 1000);
	}
}

export default Tooltip;
