import ContentSwitcher from './ContentSwitcher';
import { capitalizeFirst } from '../utils/utils';

class Tabs extends ContentSwitcher {
	protected override nameWidget: string = 'tab';

	protected override addBehavior(
		switchContent: HTMLElement[],
		allTriggers: HTMLElement[]
	): void {
		allTriggers[0].classList.add(`${this.nameWidget}_active`);
		this.show(switchContent[0]);

		allTriggers.forEach((trigger) => {
			trigger.addEventListener('click', (e) => {
				e.preventDefault();

				allTriggers.forEach((triggerHide) => {
					triggerHide.classList.remove('tab_active');
				});

				trigger.classList.add('tab_active');
				const currentTab = switchContent.find((contentTab) => {
					return (
						contentTab.id ===
						trigger.dataset[`trigger${capitalizeFirst(this.nameWidget)}`]
					);
				});

				switchContent.forEach((contentTab) => {
					this.hide(contentTab);
				});
				if (currentTab) {
					this.show(currentTab);
				}
			});
		});
	}
}

export default Tabs;
