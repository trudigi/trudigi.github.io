import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Poster';
import { Slider, Checkbox, Listing, ListingPrice, SchemeList } from './PesananWidget';

class Poster extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { desain, revisi, kilat } = state.pesanan
			return {
				harga: (desain * 10000 * (kilat ? 2 : 1) + revisi * 5000),
				durasi: {
					desain: (kilat ? Math.floor(desain / 2) + 2 : desain + 4),
					revisi: (kilat ? Math.floor(revisi / 2) + 1 : revisi + 2),
				}
			}
		})
	};

	render() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<div className="calculator-container">
				<h4 className="calculator-head">Poster</h4>
				<div className="calculator-body">
					<SchemeList list={this.state.paket} event={this.setSchemeProp}/>
					<div className="control-group">
						<Slider value={pesanan} event={this.setPesananProp} name="desain" label="Desain" min="1" max="10" />
						<Slider value={pesanan} event={this.setPesananProp} name="revisi" label="Revisi" min="2" max="5" />
						<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" label="Kilat" />
						<ListingPrice value={this.state.harga} label="Harga" />
						<Listing value={`${durasi.desain - 1}-${durasi.desain + 1} Hari`} label="Waktu Pengerjaan" />
						<Listing value={`${durasi.revisi - 1}-${durasi.revisi + 1} Hari`} label="Durasi Revisi" />
					</div>
				</div>
			</div>
		);
	}
}

export default Poster;