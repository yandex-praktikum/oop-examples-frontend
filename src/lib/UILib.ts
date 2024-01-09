export type SelectorElement = HTMLElement | string | (() => HTMLElement);

/**
 * Абстрактный класс для всех библиотек UI.
 */
abstract class UILib {
	// Инициализация полная...
	abstract initAll(): void;

	// ... и отдельно для каждого элемента
	abstract init(
		widget: SelectorElement | SelectorElement[],
		trigger: SelectorElement | SelectorElement[]
	): void;

	// Общие для всех виджетов методы
	protected toggle(popup: HTMLElement): void {
		popup.classList.toggle('widget_hidden');
	}

	protected show(popup: HTMLElement): void {
		popup.classList.remove('widget_hidden');
	}

	protected hide(popup: HTMLElement): void {
		popup.classList.add('widget_hidden');
	}
}

export default UILib;
