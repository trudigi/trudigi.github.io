import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Video';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, Submit } from './BaseWidget';
import { VideoEditing } from './BaseMetrics';

class Video extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { editing, length, revisi, kilat } = state.pesanan
			return {
				// eslint-disable-next-line
				harga: (VideoEditing[editing].harga + VideoEditing[editing].multi * length +
					revisi * VideoEditing[editing].harga / 5) * (kilat ? 2 : 1),
				durasi: {
					desain: Math.floor((VideoEditing[editing].durasi +
						VideoEditing[editing].sprint * length)
						 / (kilat ? 2 : 1)),
					revisi: (kilat ? revisi * 3 + 1 : revisi * 7 + 2),
				}
			}
		})
	};



	konten() {
		return {
			title: "Video Editing",
			deskripsi: "Editing dan Komposisi Video Footage",
			color: "hsl(0, 100%, 20%)",
		}
	}
	renderControls() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<form className="control-group">
				<Option value={pesanan} event={this.setPesananProp} name="editing" options={VideoEditing} />
				<Slider value={pesanan} event={this.setPesananProp} name="length" min="1" max="30" />
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

export default Video;