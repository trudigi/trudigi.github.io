import {
	Component
} from 'react';

class BaseCalculator extends Component {
	constructor() {
		super();

		this.state = {
			paket: this.listPaket(),
			pesanan: {
				...this.listPaket()[0].pesanan
			},
			harga: 0,
			durasi: {
				desain: 0,
				revisi: 0,
			}
		}

	}
	componentWillMount() {
		this.calculate();
	}
	setPesananProp = (e) => {
		const delta = {
			[e.target.name]: e.target.name !== 'kilat' ? e.target.value : e.target.checked
		}
		this.setState((state) => {
			const pesanan = state.pesanan
			return {
				pesanan: {
					...pesanan,
					...delta
				}

			}
		})
		this.calculate();
	};
	listPaket() {
		return []
	}
	calculate() {
	}
}

export default BaseCalculator;