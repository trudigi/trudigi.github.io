import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Poster';
import { Slider, Checkbox, ListingPrice, ListingDuration, Submit } from './BaseWidget';

class Poster extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { desain, revisi, kilat } = state.pesanan
			return {
				harga: (desain * 10000 + revisi * 2500) * (kilat ? 2 : 1),
				durasi: {
					desain: (kilat ? Math.floor(desain / 4) + 2 : Math.floor(desain / 2) + 4),
					revisi: (kilat ? Math.floor(revisi / 4) + 1 : Math.floor(revisi / 2) + 2),
				}
			}
		})
	};

	konten() {
		return {
			title: "Media Grafis",
			deskripsi: "Pembuatan Poster, Banner, Pamflet, dsb.",
			color: "hsl(240, 100%, 20%)",
			contact: {
				name: 'Julius',
				whatsapp: '62852572841'+72
			}
		}
	}
	renderControls() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<form className="control-group">
				<Slider value={pesanan} event={this.setPesananProp} name="desain" min={1} max={10} />
				<Slider value={pesanan} event={this.setPesananProp} name="revisi" min={4} max={20} />
				<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" />
				<ListingPrice value={this.state.harga} label="Harga" />
				<ListingDuration value={durasi.desain} label="Waktu Pengerjaan" />
				<ListingDuration value={durasi.revisi} label="Durasi Revisi" />
				<Submit event={this.submitPesanan}/>
			</form>
		);
	}
}

export default Poster;