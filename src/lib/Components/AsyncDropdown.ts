import Dropdown from '../PopUp/Dropdown';

class AsyncDropdown extends Dropdown {
	words: string[];
	trigger: HTMLInputElement;

	constructor(words: string[]) {
		super();
		this.words = words;
	}
	private searchValues = (searchElement: string): string[] => {
		return this.words.filter((str) =>
			str.toUpperCase().startsWith(this.trigger.value.toUpperCase())
		);
	};

	fnSearch = this.cashFunction(this.searchValues);

	protected override addBehavior(
		trigger: HTMLElement,
		popup: HTMLElement
	): void {
		this.trigger = trigger as HTMLInputElement;
		this.renderSearch(this.words, popup);

		trigger.addEventListener('input', (e) => {
			e.preventDefault();

			const valueSearch = this.fnSearch(this.trigger.value);
			this.renderSearch(valueSearch, popup);
			popup.classList.remove('widget_hidden');
			this.renderSearch(valueSearch, popup);
		});
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

	private cashFunction(fn: Function): Function {
		let cash: Record<string, string[]> = {};
		return function (n: string) {
			if (cash[n]) {
				return cash[n];
			}
			let result = fn(n);
			cash[n] = result;
			return result;
		};
	}

	private renderSearch(list: string[], parentElement: HTMLElement): void {
		parentElement.innerHTML = '';

		const ul = document.createElement('ul');
		parentElement.append(ul);

		list.forEach((element) => {
			const li = document.createElement('li');
			li.textContent = element;
			ul.append(li);

			li.addEventListener('click', (e) => {
				this.trigger.value = li.textContent;
				this.trigger.focus();
			});
		});
	}
}

export default AsyncDropdown;
