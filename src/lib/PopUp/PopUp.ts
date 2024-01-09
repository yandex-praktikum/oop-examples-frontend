import UILib, { SelectorElement } from '../UILib';
import { ensureElement, capitalizeFirst } from '../utils/utils';

export interface PositionInterface {
	top: string;
	left: string;
}

/**
 * Реализация базового класса для любого всплывающего окна
 */
abstract class PopUp extends UILib {
	protected readonly nameWidget: string = 'popup';

	initAll(): void {
		const allTrigger = Array.from(
			document.querySelectorAll(`[data-trigger-${this.nameWidget}]`)
		) as HTMLElement[];

		allTrigger.forEach((trigger) => {
			const popup = document.querySelector(
				`#${trigger.dataset[`trigger${capitalizeFirst(this.nameWidget)}`]}`
			) as HTMLElement;

			if (popup) {
				this.init(trigger, popup);
			}
		});
	}

	init(trigger: SelectorElement, popup: SelectorElement): void {
		if (typeof trigger === 'function') {
			trigger = trigger();
			document.body.append(trigger);
		}
		if (typeof popup === 'function') {
			popup = popup();
			document.body.append(popup);
		}
		const triggerEl = ensureElement(trigger);
		const popupEl = ensureElement(popup);

		popupEl.classList.add(`${this.nameWidget}`, 'widget_hidden');
		triggerEl.classList.add('trigger');

		this.addBehavior(triggerEl, popupEl);
	}

	protected determineСoords(trigger: HTMLElement, popup: HTMLElement): void {
		const coords = trigger.getBoundingClientRect();

		this.show(popup);

		const positionStr = trigger.dataset[`${this.nameWidget}Position`] as string;
		const popupSize = popup.getBoundingClientRect();
		const { top, left } = this.positioningElement(
			positionStr,
			coords,
			popupSize
		);

		popup.style.top = top;
		popup.style.left = left;
	}

	protected positioningElement(
		positionStr: string,
		coords: DOMRect,
		popupSize: DOMRect
	): PositionInterface {
		const { top, left, height, width } = coords;

		const position: PositionInterface = {
			top: top + height + 'px',
			left: left + 'px',
		};

		switch (positionStr) {
			case 'top':
				position.top = top - popupSize.height - 2 + 'px';
				position.left = left + 'px';
				break;
			case 'right':
				position.top = top + 'px';
				position.left = left + width + 4 + 'px';
				break;
			case 'left':
				position.top = top + 'px';
				position.left = left - popupSize.width - 2 + 'px';
				break;

			default:
				position.top = top + height + 2 + 'px';
				position.left = left + 'px';
				break;
		}

		return position;
	}

	protected abstract addBehavior(
		trigger: HTMLElement,
		popup: HTMLElement
	): void;
}

export default PopUp;
