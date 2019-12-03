import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Poster';
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
				<div className="calculator-body">
					Desain:
					<input name="desain" type="range" min="1" max="10" value={pesanan.desain} onChange={this.setPesananProp} />
					<input name="desain" type="number" min="1" max="10" value={pesanan.desain} onChange={this.setPesananProp} />
					<br />
					Revisi:
					<input name="revisi" type="range" min="2" max="5" value={pesanan.revisi} onChange={this.setPesananProp} />
					<input name="revisi" type="number" min="2" max="5" value={pesanan.revisi} onChange={this.setPesananProp} />
					<br />
					Kilat?:
					<input name="kilat" type="checkbox" checked={pesanan.kilat} onChange={this.setPesananProp} />
					<br />
					{this.state.harga.toLocaleString('id-ID', {
						style: 'currency',
						currency: 'IDR',
					})}
					<br /> Waktu Pengerjaan {durasi.desain-1}-{durasi.desain+1} Hari;
						Durasi Revisi {durasi.revisi-1}-{durasi.revisi+1} Hari
				</div>
			</div>
		);
	}
}

export default Poster;