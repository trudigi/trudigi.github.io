import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Mobile';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, Submit } from './BaseWidget';
import { MobileFrameworks, Databases } from './BaseMetrics';

class Mobile extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { framework, database, revisi, kilat, keamanan } = state.pesanan
			return {
				// eslint-disable-next-line
				harga: (MobileFrameworks[framework].harga + Databases[database].harga *
					(keamanan ? 2 : 1) + revisi * 50000) * (kilat ? 2 : 1),
				durasi: {
					desain: Math.floor((MobileFrameworks[framework].durasi +
						Databases[database].durasi * (keamanan ? 2 : 1)) / (kilat ? 2 : 1)),
					revisi: (kilat ? revisi * 3 + 1 : revisi * 7 + 2),
				}
			}
		})
	};



	konten() {
		return {
			title: "Aplikasi Mobile",
			deskripsi: "Pembuatan Aplikasi untuk Perangkat Mobile",
			color: "hsl(300, 100%, 20%)",
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
				<Option value={pesanan} event={this.setPesananProp} name="framework" options={MobileFrameworks} />
				<Option value={pesanan} event={this.setPesananProp} name="database" options={Databases} />
				<Slider value={pesanan} event={this.setPesananProp} name="revisi" min={2} max={10} />
				<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" />
				<Checkbox value={pesanan} event={this.setPesananProp} name="keamanan" />
				<ListingPrice value={this.state.harga} label="Harga" />
				<ListingDuration value={durasi.desain} label="Waktu Pengerjaan" />
				<ListingDuration value={durasi.revisi} label="Durasi Revisi" />
				<Submit event={this.submitPesanan}/>
			</form>
		);
	}
}

export default Mobile;