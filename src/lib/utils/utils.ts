export function isSelector(x: any): x is string {
	return typeof x === 'string' && x.length > 0;
}

export function ensureAllElements<T extends HTMLElement>(
	selectorElement: string | NodeListOf<Element> | T[]
): T[] {
	if (isSelector(selectorElement)) {
		return Array.from(document.querySelectorAll(selectorElement));
	}
	if (selectorElement instanceof NodeList) {
		return Array.from(selectorElement) as T[];
	}
	if (Array.isArray(selectorElement)) {
		return selectorElement;
	}
	throw new Error(`Unknown selector element`);
}

export function ensureElement<T extends HTMLElement>(
	selectorElement: T | string
): T {
	if (isSelector(selectorElement)) {
		const elements = ensureAllElements<T>(selectorElement);
		if (elements.length > 1) {
			console.warn(`selector ${selectorElement} return more then one element`);
		}
		if (elements.length === 0) {
			throw new Error(`selector ${selectorElement} return nothing`);
		}
		return elements[0] as T;
	}
	if (selectorElement instanceof HTMLElement) {
		return selectorElement as T;
	}
	throw new Error('Unknown selector element');
}

export function capitalizeFirst(str: string): string {
	if (!str) return str;

	return str[0]!.toUpperCase() + str.slice(1);
}
