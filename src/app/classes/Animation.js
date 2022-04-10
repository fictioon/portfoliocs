export default class Animation {
	constructor(element, delay, margin = "0%") {
		this.element = element
		this.delay = delay
		this.margin = margin
		this.createObserver()
	}

	createObserver() {
		this.observer = new window.IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.animateIn(this.delay)
				} else {
					this.animateOut()
				}
			})
		}, {
			rootMargin: this.margin,
		})

		this.observer.observe(this.element)
	}

	animateIn() {}

	animateOut() {}
}
