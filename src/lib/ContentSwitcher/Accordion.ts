import ContentSwitcher from './ContentSwitcher';
import { capitalizeFirst } from '../utils/utils';

class Accordion extends ContentSwitcher {
	protected override nameWidget: string = 'accordion';

	protected override addBehavior(
		switchContent: HTMLElement[],
		allTriggers: HTMLElement[]
	): void {
		allTriggers.forEach((trigger) => {
			// trigger.classList.add('trigger');
			trigger.addEventListener('click', (e) => {
				e.preventDefault();

				const currentAccordion = switchContent.find((contentAccordion) => {
					return (
						contentAccordion.id ===
						trigger.dataset[`trigger${capitalizeFirst(this.nameWidget)}`]
					);
				});
				const isShow = currentAccordion?.classList.contains('widget_hidden');

				allTriggers.forEach((trigger) => {
					trigger.classList.remove('accordion__icon_wrapper_open');
				});

				switchContent.forEach((contentAccordion) => {
					this.hide(contentAccordion);
					contentAccordion.classList.remove('accordion__content_active');
				});

				if (isShow) {
					this.show(currentAccordion!);
					currentAccordion.classList.add('accordion__content_active');
					trigger.classList.add('accordion__icon_wrapper_open');
				}
			});
		});
	}
}

export default Accordion;
