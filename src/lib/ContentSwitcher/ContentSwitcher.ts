import UILib, { SelectorElement } from '../UILib';
import { ensureElement } from '../utils/utils';

/**
 * Реализация базового класса для любого переключателя
 */
abstract class ContentSwitcher extends UILib {
	protected nameWidget: string = 'switch';

	override initAll(): void {
		const allSwitchs = Array.from(
			document.querySelectorAll(`[data-${this.nameWidget}]`)
		) as HTMLElement[];

		allSwitchs.forEach((contentSwitcher) => {
			this.init(contentSwitcher);
		});
	}

	override init(contentSwitcher: SelectorElement): void {
		if (typeof contentSwitcher === 'function') {
			contentSwitcher = contentSwitcher();
			document.body.append(contentSwitcher);
		}

		const switchEl = ensureElement(contentSwitcher);

		const allTriggers = Array.from(
			switchEl.querySelectorAll(`[data-trigger-${this.nameWidget}]`)
		) as HTMLElement[];
		const allContentSwitchers = Array.from(
			switchEl.querySelectorAll(`[data-content-${this.nameWidget}]`)
		) as HTMLElement[];

		allContentSwitchers.forEach((contentSwitcher) => {
			this.hide(contentSwitcher);
		});

		this.addBehavior(allContentSwitchers, allTriggers);
	}

	protected abstract addBehavior(
		switchContent: HTMLElement[],
		allTriggers: HTMLElement[]
	): void;
}

export default ContentSwitcher;
