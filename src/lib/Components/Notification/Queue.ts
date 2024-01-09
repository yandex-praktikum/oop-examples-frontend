export default class Queue<T> {
	private queue: Array<T>;
	constructor() {
		this.queue = [];
	}

	add(el: T) {
		this.queue.push(el);
	}

	remove(): T {
		const remEl = this.queue.shift();
		return remEl;
	}

	size(): number {
		return this.queue.length;
	}

	get(): Array<T> {
		return [...this.queue];
	}
}
