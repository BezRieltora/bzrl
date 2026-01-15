namespace $.$$ {
	interface ApartmentData {
		id: string
		district: string
		photo: string
		area: string
		floor: string
		price: string
	}

	export class $bog_bzrl_app extends $.$bog_bzrl_app {
		@$mol_mem
		apartments_data(): ApartmentData[] {
			return [
				{
					id: '1',
					district: 'vahitovsky',
					photo: 'https://picsum.photos/400/300?random=1',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
				},
				{
					id: '2',
					district: 'sovetsky',
					photo: 'https://picsum.photos/400/300?random=2',
					area: 'квартира 42,8 м²',
					floor: '3/5 эт.',
					price: '42 000 ₽/мес',
				},
				{
					id: '3',
					district: 'novo_savinovsky',
					photo: 'https://picsum.photos/400/300?random=3',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
				},
				{
					id: '4',
					district: 'vahitovsky',
					photo: 'https://picsum.photos/400/300?random=4',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
				},
				{
					id: '5',
					district: 'sovetsky',
					photo: 'https://picsum.photos/400/300?random=5',
					area: 'квартира 42,8 м²',
					floor: '3/5 эт.',
					price: '42 000 ₽/мес',
				},
				{
					id: '6',
					district: 'novo_savinovsky',
					photo: 'https://picsum.photos/400/300?random=6',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '35 000 ₽/мес',
				},
				{
					id: '7',
					district: 'vahitovsky',
					photo: 'https://picsum.photos/400/300?random=7',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '35 000 ₽/мес',
				},
				{
					id: '8',
					district: 'sovetsky',
					photo: 'https://picsum.photos/400/300?random=8',
					area: 'квартира 42,8 м²',
					floor: '3/5 эт.',
					price: '42 000 ₽/мес',
				},
				{
					id: '9',
					district: 'novo_savinovsky',
					photo: 'https://picsum.photos/400/300?random=9',
					area: 'квартира 35,1 м²',
					floor: '20/29 эт.',
					price: '36 000 ₽/мес',
				},
			]
		}

		@$mol_mem
		apartment_rows() {
			return this.apartments_data().map(apt => this.Apartment(apt.id))
		}

		@$mol_mem_key
		apartment_data(id: string) {
			return this.apartments_data().find(a => a.id === id)!
		}

		@$mol_mem_key
		apartment_district(id: string) {
			return this.apartment_data(id).district
		}

		@$mol_mem_key
		apartment_photo(id: string) {
			return this.apartment_data(id).photo
		}

		@$mol_mem_key
		apartment_area(id: string) {
			return this.apartment_data(id).area
		}

		@$mol_mem_key
		apartment_floor(id: string) {
			return this.apartment_data(id).floor
		}

		@$mol_mem_key
		apartment_price(id: string) {
			return this.apartment_data(id).price
		}
	}
}
