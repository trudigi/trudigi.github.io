import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Poster';
import {Slider, Checkbox, Listing} from './PesananWidget';

class Poster extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const pesanan = state.pesanan
			return {
				// eslint-disable-next-line
				harga: (pesanan.desain * 10000 * (pesanan.kilat ? 2 : 1) + pesanan.revisi * 5000),
				durasi: {
					desain: (pesanan.kilat ? Math.floor(pesanan.desain / 2) + 2 : Math.floor(pesanan.desain * 1) + 6),
					revisi: (pesanan.kilat ? Math.floor(pesanan.revisi / 2) + 1 : Math.floor(pesanan.revisi) + 2),
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

				<div className="control-group">

					<Slider value={pesanan} event={this.setPesananProp} name="desain" label="Desain" min="1" max="10"/>
					<Slider value={pesanan} event={this.setPesananProp} name="revisi" label="Revisi" min="2" max="5"/>
					<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" label="Kilat"/>
					<Listing value={this.state.harga.toLocaleString('id-ID', {
						style: 'currency',
						currency: 'IDR',
					})} label="Harga"/>
					<Listing value={`${durasi.desain-1}-${durasi.desain+1} Hari`} label="Waktu Pengerjaan"/>
					<Listing value={`${durasi.revisi-1}-${durasi.revisi+1} Hari`} label="Durasi Revisi"/>
				</div>
			</div>
		);
	}
}

export default Poster;