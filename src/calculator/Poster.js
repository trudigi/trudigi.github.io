import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Poster';
import { Slider, Checkbox, ListingPrice, ListingDuration, SchemeList } from './PesananWidget';

class Poster extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { desain, revisi, kilat } = state.pesanan
			return {
				harga: (desain * 10000 + revisi * 5000) * (kilat ? 2 : 1),
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
					<form className="control-group">
						<Slider value={pesanan} event={this.setPesananProp} name="desain" min="1" max="10" />
						<Slider value={pesanan} event={this.setPesananProp} name="revisi" min="2" max="5" />
						<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" />
						<ListingPrice value={this.state.harga} label="Harga" />
						<ListingDuration value={durasi.desain} label="Waktu Pengerjaan" />
						<ListingDuration value={durasi.revisi} label="Durasi Revisi" />
					</form>
				</div>
			</div>
		);
	}
}

export default Poster;