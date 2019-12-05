import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Media';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, Submit } from './BaseWidget';
import { MediaFrameworks, MediaInteractivity } from './BaseMetrics';

class Media extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { framework, interactivity, revisi, kilat } = state.pesanan
			return {
				// eslint-disable-next-line
				harga: (MediaFrameworks[framework].harga + MediaInteractivity[interactivity].harga + revisi * 50000) * (kilat ? 2 : 1),
				durasi: {
					desain: Math.floor((MediaFrameworks[framework].durasi + MediaInteractivity[interactivity].durasi) / (kilat ? 2 : 1)),
					revisi: (kilat ? revisi * 3 + 1 : revisi * 7 + 2),
				}
			}
		})
	};

	konten() {
		return {
			title: "Media Interaktif",
			deskripsi: "Pembuatan Media Digital Interaktif",
			color: "hsl(180, 100%, 20%)",
		}
	}
	renderControls() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<form className="control-group">
				<Option value={pesanan} event={this.setPesananProp} name="framework" options={MediaFrameworks} />
				<Option value={pesanan} event={this.setPesananProp} name="interactivity" options={MediaInteractivity} />
				<Slider value={pesanan} event={this.setPesananProp} name="revisi" min="2" max="10" />
				<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" />
				<ListingPrice value={this.state.harga} label="Harga" />
				<ListingDuration value={durasi.desain} label="Waktu Pengerjaan" />
				<ListingDuration value={durasi.revisi} label="Durasi Revisi" />
				<Submit event={this.submitPesanan}/>
			</form>
		);
	}
}

export default Media;