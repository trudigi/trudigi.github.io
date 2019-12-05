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
				harga: (desain * 10000 + revisi * 5000) * (kilat ? 2 : 1),
				durasi: {
					desain: (kilat ? Math.floor(desain / 2) + 2 : desain + 4),
					revisi: (kilat ? Math.floor(revisi / 2) + 1 : revisi + 2),
				}
			}
		})
	};



	konten() {
		return {
			title: "Media Poster",
			deskripsi: "Pembuatan Media Grafis Poster",
			color: "hsl(240, 100%, 20%)",
		}
	}
	renderControls() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<form className="control-group">
				<Slider value={pesanan} event={this.setPesananProp} name="desain" min="1" max="10" />
				<Slider value={pesanan} event={this.setPesananProp} name="revisi" min="2" max="5" />
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