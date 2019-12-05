import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Media';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, SchemeList } from './PesananWidget';
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

	render() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<div className="calculator-container">
				<h4 className="calculator-head">Media Interaktif</h4>
				<div className="calculator-body">
					<SchemeList list={this.state.paket} event={this.setSchemeProp}/>
					<form className="control-group">
						<Option value={pesanan} event={this.setPesananProp} name="framework" options={MediaFrameworks} />
						<Option value={pesanan} event={this.setPesananProp} name="interactivity" options={MediaInteractivity} />
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

export default Media;