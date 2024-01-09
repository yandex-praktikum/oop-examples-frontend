import ContentSwitcher from './ContentSwitcher';
import Modal from '../PopUp/Modal';

class Gallery extends ContentSwitcher {
	protected nameWidget: string = 'gallery';

	protected addBehavior(
		switchContent: HTMLElement[],
		allTriggers: HTMLElement[]
	): void {
		const triggerImgs = allTriggers as HTMLImageElement[];

		const modal = new Modal();
		const img = document.querySelector(
			'[data-gallery-modal]>img'
		) as HTMLImageElement;

		triggerImgs.forEach((trigger) => {
			modal.init(trigger, '[data-content-gallery]');
			trigger.addEventListener('click', (e) => {
				img.src = trigger.src;
				img.alt = trigger.alt;
			});
		});
	}
}

export default Gallery;
