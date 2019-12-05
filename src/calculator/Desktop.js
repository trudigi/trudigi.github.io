import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Desktop';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, Submit } from './BaseWidget';
import { DesktopFrameworks, Databases } from './BaseMetrics';

class Desktop extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { framework, database, revisi, kilat, keamanan, installer } = state.pesanan
			return {
				// eslint-disable-next-line
				harga: (DesktopFrameworks[framework].harga + Databases[database].harga *
					(keamanan ? 2 : 1) + revisi * 50000 + (installer ? 50000 : 0)) * (kilat ? 2 : 1),
				durasi: {
					desain: Math.floor((DesktopFrameworks[framework].durasi +
						Databases[database].durasi) / (kilat ? 2 : 1)) + (keamanan ? 7 : 0),
					revisi: (kilat ? revisi * 3 + 1 : revisi * 7 + 2),
				}
			}
		})
	};



	konten() {
		return {
			title: "Aplikasi Desktop",
			deskripsi: "Pembuatan Aplikasi untuk PC",
			color: "hsl(120, 100%, 20%)",
		}
	}
	renderControls() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<form className="control-group">
				<Option value={pesanan} event={this.setPesananProp} name="framework" options={DesktopFrameworks} />
				<Option value={pesanan} event={this.setPesananProp} name="database" options={Databases} />
				<Slider value={pesanan} event={this.setPesananProp} name="revisi" min="2" max="10" />
				<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" />
				<Checkbox value={pesanan} event={this.setPesananProp} name="keamanan" />
				<Checkbox value={pesanan} event={this.setPesananProp} name="installer" />
				<ListingPrice value={this.state.harga} label="Harga" />
				<ListingDuration value={durasi.desain} label="Waktu Pengerjaan" />
				<ListingDuration value={durasi.revisi} label="Durasi Revisi" />
				<Submit event={this.submitPesanan}/>
			</form>
		);
	}
}

export default Desktop;