import ContentSwitcher from './ContentSwitcher';

class Slider extends ContentSwitcher {
	protected override nameWidget: string = 'slider';
	private activeSliderIndex: number = 0;

	protected override addBehavior(
		switchContent: HTMLElement[],
		allTriggers: HTMLElement[]
	): void {
		allTriggers[0].classList.add(`${this.nameWidget}_active`);
		this.show(switchContent[0]);

		const dots = allTriggers.filter((trigger) => trigger.dataset.triggerSlider);
		const btnPrev = document.querySelector('[data-btn-prev]');
		const btnNext = document.querySelector('[data-btn-next]');

		const slidersCount = switchContent.length;
		this.showSlider(dots, switchContent, this.activeSliderIndex);

		btnPrev.addEventListener('click', (e) => {
			e.preventDefault();

			this.activeSliderIndex = (this.activeSliderIndex - 1) % slidersCount;
			this.activeSliderIndex =
				this.activeSliderIndex < 0 ? slidersCount - 1 : this.activeSliderIndex;
			this.showSlider(dots, switchContent, this.activeSliderIndex);
		});

		btnNext.addEventListener('click', (e) => {
			e.preventDefault();

			this.activeSliderIndex = (this.activeSliderIndex + 1) % slidersCount;
			this.showSlider(dots, switchContent, this.activeSliderIndex);
		});

		dots.forEach((dot, index) => {
			dot.addEventListener('click', (e) => {
				e.preventDefault();

				this.activeSliderIndex = index;
				this.showSlider(dots, switchContent, this.activeSliderIndex);
			});
		});
	}

	setSliderIndex(index: number): void {
		this.activeSliderIndex = index;
	}

	private showSlider(
		dots: HTMLElement[],
		switchContent: HTMLElement[],
		sliderIndex: number
	): void {
		if (dots.length > 0) {
			dots.forEach((dot) => {
				dot.classList.remove('active');
			});
			dots[sliderIndex].classList.add('active');
		}

		switchContent.forEach((slide, index) => {
			if (index === sliderIndex) {
				this.show(slide);
			} else {
				this.hide(slide);
			}
		});
	}
}

export default Slider;
