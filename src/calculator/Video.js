import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Video';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, SchemeList } from './PesananWidget';
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

	render() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<div className="calculator-container">
				<h4 className="calculator-head">Video Editing</h4>
				<div className="calculator-body">
					<SchemeList list={this.state.paket} event={this.setSchemeProp}/>
					<form className="control-group">
						<Option value={pesanan} event={this.setPesananProp} name="editing" options={VideoEditing} />
						<Slider value={pesanan} event={this.setPesananProp} name="length" min="1" max="30" />
						<Slider value={pesanan} event={this.setPesananProp} name="revisi" min="2" max="10" />
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

export default Video;