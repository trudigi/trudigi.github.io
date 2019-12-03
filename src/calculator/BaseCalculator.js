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
	componentDidMount() {
		this.calculate();
	}
	setSchemeProp = (i) => {
		this.setState((state) => {
			return {
				pesanan:  { ...state.paket[i].pesanan },
			}
		})
		this.calculate();
	}
	setPesananProp = (e) => {
		let delta = {};

		if (e.target.type === 'radio') {
			// Radio button
			if (e.target.checked) delta[e.target.name] = e.target.value;
		} else if (e.target.type === 'checkbox') {
			// Checkbox
			delta[e.target.name] = e.target.checked
		} else {
			// Regular input
			delta[e.target.name] = e.target.value
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