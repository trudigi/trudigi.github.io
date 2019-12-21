import React, {
	Component
} from 'react';

import lz from 'lz-string';

class BaseCalculator extends Component {
	tracePesanan(id) {
		try {
			const o = JSON.parse(lz.decompressFromEncodedURIComponent(new URLSearchParams(window.location.search).get('invoice')))
			if (o.context === id) {
				let oriP =  { ...this.listPaket()[0].pesanan }
				Object.keys(oriP).forEach(k => oriP[k] = o.hasOwnProperty(k) ? o[k] : oriP[k])
				return oriP;
			}
		} catch (error) {
		}
		return { ...this.listPaket()[0].pesanan }
	}
	constructor() {
		super();
		const id = this.konten().title.replace(' ', '').toLowerCase()
		this.state = {
			konten: {
				...this.konten(),
				id
			},
			paket: this.listPaket(),
			pesanan: {
				...this.tracePesanan(id)
			},
			listing: {
				price: 0,
				duration: 0,
				revision: 0,
			},
			uri: window.location.search.includes('invoice') ? window.location.href : '',
		}
	}
	componentDidMount() {
		this.calculate();
	}
	setSchemeProp = (i) => {

		if (window.location.search.includes('invoice')) return;

		this.setState((state) => {
			return {
				pesanan: { ...state.paket[i].pesanan },
			}
		})
		this.calculate();
	}
	setPesananProp = (e) => {

		if (window.location.search.includes('invoice')) return;

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
	checkout() {
		return {

		}
	}
	renderControls() {
		return <div></div>
	}
	submitPesanan = (e) => {
		if (window.location.search.includes('invoice')) {
			this.clearCheckout(e);
			this.setState((state) => {
				return {
					uri: ''
				}
			})
		} else {
			window.location.hash = '#checkout'
			window.history.replaceState('checkout', 'Checkout', '?invoice='+lz.compressToEncodedURIComponent(JSON.stringify({
				context: this.state.konten.id,
				...this.state.pesanan
			}))+'#'+this.state.konten.id);
			e.preventDefault();
			this.setState((state) => {
				return {
					uri: window.location.href
				}
			})
		}
	}
	clearCheckout = (e) => {
		window.history.replaceState('checkout', 'Checkout', '/');
	}
}

export default BaseCalculator;