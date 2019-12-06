import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Media';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, Submit } from './BaseWidget';
import { MediaFrameworks, MediaInteractivity, MediaGraphics } from './BaseMetrics';

class Media extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { framework, interactivity, graphics, revisi, kilat } = state.pesanan
			const media = MediaFrameworks[framework]
			const interact = MediaInteractivity[interactivity]
			const fx = MediaGraphics[graphics]
			return {
				// eslint-disable-next-line
				harga: (media.harga + interact.harga + fx.harga + revisi * (fx.revisi + interact.revisi)) * (kilat ? 2 : 1),
				durasi: {
					desain: Math.floor((media.durasi + interact.durasi + fx.durasi) / (kilat ? 2 : 1)),
					revisi: Math.floor(Math.sqrt(kilat ? revisi * (interact.durasi + fx.durasi) + 1 : revisi * (interact.durasi + fx.durasi) * 2 + 2)),
				}
			}
		})
	};

	konten() {
		return {
			title: "Media Interaktif",
			deskripsi: "Pembuatan Media Digital Interaktif",
			color: "hsl(180, 100%, 20%)",
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
				<Option value={pesanan} event={this.setPesananProp} name="framework" options={MediaFrameworks} />
				<Option value={pesanan} event={this.setPesananProp} name="interactivity" options={MediaInteractivity} />
				<Option value={pesanan} event={this.setPesananProp} name="graphics" options={MediaGraphics} />
				<Slider value={pesanan} event={this.setPesananProp} name="revisi" min={2} max={10} />
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