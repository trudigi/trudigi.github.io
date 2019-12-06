import React, {
	Component
} from 'react';
import { SchemeList } from './BaseWidget';

class Checkout extends Component {
	constructor() {
		super();

		this.state = {
			konten: {
				...this.konten(),
				id: this.konten().title.replace(' ', '').toLowerCase()
			},
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
				pesanan: { ...state.paket[i].pesanan },
			}
		})
		this.calculate();
		return false;
	}
	setPesananProp = (e) => {
		let delta = {};

		if (e.target.type === 'radio') {
			// Radio button
			if (e.target.checked) delta[e.target.name] = e.target.value;
		} else if (e.target.type === 'checkbox') {
			// Checkbox
			delta[e.target.name] = e.target.checked
		} else if (e.target.type === 'range' || e.target.type === 'number') {
			// Number input
			delta[e.target.name] = Number(e.target.value)
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
	konten() {
		return {
			title: "Title",
			deskripsi: "Lorem Ipsum",
			color: "gray",
		}
	}
	calculate() {
	}
	renderControls() {
		return <div></div>
	}
	submitPesanan = (e) => {
		window.location.hash = '#checkout';
		window.history.replaceState('checkout', 'Checkout', '?invoice='+btoa(JSON.stringify({
			...this.state.pesanan
		}))+'#checkout');
		e.preventDefault();
	}
	render() {
		return (
			<div style={{'--scheme':this.state.konten.color}} className="calculator-container" id={this.state.konten.id}>
				<div className="calculator-hero">
					<h3>{this.state.konten.title}</h3>
					<p>{this.state.konten.deskripsi}</p>
					<a className="hero-go" href={'#'+this.state.konten.id}>Pesan</a>
				</div>
				<div className="calculator-body">
					<SchemeList list={this.state.paket} event={this.setSchemeProp} />
					{this.renderControls()}
				</div>
			</div>)
	}
}

export default Checkout;