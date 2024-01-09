import UILib, { SelectorElement } from '../UILib';
import { ensureElement } from '../utils/utils';

type ButtonSubmit = HTMLButtonElement | HTMLInputElement | null;

class FormValidator extends UILib {
	protected nameWidget: string = 'form';

	override initAll(): void {
		const allForms = Array.from(
			document.querySelectorAll(`[data-${this.nameWidget}]`)
		) as HTMLElement[];

		allForms.forEach((form) => {
			this.init(form);
		});
	}

	override init(form: SelectorElement): void {
		if (typeof form === 'function') {
			form = form();
			document.body.append(form);
		}

		const formEl = ensureElement(form) as HTMLFormElement;

		const inputList = Array.from(
			formEl.querySelectorAll('.form__input')
		) as HTMLInputElement[];

		const buttonSubmit: ButtonSubmit = this.searchBtnSubmit(formEl);

		this.toogleButtonState(inputList, buttonSubmit);

		inputList.forEach((input) => {
			input.addEventListener('input', (e) => {
				this.inputValidation(formEl, input);

				this.toogleButtonState(inputList, buttonSubmit);
			});
		});
	}

	searchBtnSubmit(form: HTMLFormElement): ButtonSubmit {
		let buttonSubmit: ButtonSubmit = null;

		buttonSubmit =
			form!.querySelector('[type="submit"]') ||
			form!.querySelector('button') ||
			null;

		return buttonSubmit;
	}

	toogleButtonState(
		inputList: HTMLInputElement[],
		btnSubmit: ButtonSubmit
	): void {
		if (this.hasInvalidInput(inputList)) {
			btnSubmit.classList.add('button_disabled');
			btnSubmit!.disabled = true;
		} else {
			btnSubmit.classList.remove('button_disabled');
			btnSubmit!.disabled = false;
		}
	}

	hasInvalidInput(inputsList: HTMLInputElement[]): boolean {
		return inputsList.some((input) => {
			return !input.validity.valid;
		});
	}

	showError(input: HTMLInputElement, errorMessage: string): void {
		const parentEl = input.parentElement;

		const errorElement = parentEl?.querySelector('.form__help_error');

		errorElement!.textContent = errorMessage;
		errorElement!.classList.remove('field__error_hidden');
	}

	hideError(input: HTMLInputElement): void {
		const parentEl = input.parentElement;

		const errorElement = parentEl?.querySelector('.form__help_error');

		errorElement!.textContent = '';
		errorElement!.classList.add('field__error_hidden');
	}

	inputValidation(form: HTMLFormElement, input: HTMLInputElement): void {
		if (input.validity.patternMismatch) {
			input.setCustomValidity(input.dataset['errorMessage'] || '');
		} else {
			input.setCustomValidity('');
		}

		if (!input.validity.valid) {
			this.showError(input, input.validationMessage);
		} else {
			this.hideError(input);
		}
	}
}

export default FormValidator;
