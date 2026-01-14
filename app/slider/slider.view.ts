namespace $.$$ {
	export class $bog_bzrl_app_slider extends $.$bog_bzrl_app_slider {

		@$mol_mem
		slides_data() {
			return [
				'https://picsum.photos/800/400?random=20',
				'https://picsum.photos/800/400?random=21',
				'https://picsum.photos/800/400?random=22',
				'https://picsum.photos/800/400?random=23',
			]
		}

		@$mol_mem
		current_index(next?: number) {
			if (next !== undefined) return next
			return 0
		}

		@$mol_action
		prev() {
			const current = this.current_index()
			const total = this.slides_data().length
			this.current_index((current - 1 + total) % total)
		}

		@$mol_action
		next() {
			const current = this.current_index()
			const total = this.slides_data().length
			this.current_index((current + 1) % total)
		}

		@$mol_mem_key
		slide_uri(index: number) {
			return this.slides_data()[index] ?? ''
		}

		@$mol_mem
		dots() {
			return this.slides_data().map((_, i) => this.Dot(i))
		}

		@$mol_mem_key
		dot_active(index: number) {
			return index === this.current_index()
		}

	}
}
