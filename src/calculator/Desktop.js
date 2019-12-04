import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Desktop';
import { Slider, Checkbox, ListingDuration, ListingPrice, Option, SchemeList } from './PesananWidget';
import { DesktopFrameworks, Databases } from './BaseMetrics';

class Desktop extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { framework, database, revisi, kilat, keamanan } = state.pesanan
			return {
				// eslint-disable-next-line
				harga: (DesktopFrameworks[framework].harga + Databases[database].harga * (keamanan ? 2 : 1) + revisi * 50000) * (kilat ? 2 : 1),
				durasi: {
					desain: Math.ceil((DesktopFrameworks[framework].durasi + Databases[database].durasi) / (kilat ? 2 : 1)) + (keamanan ? 7 : 0),
					revisi: (2),
				}
			}
		})
	};

	render() {
		const pesanan = this.state.pesanan;
		const durasi = this.state.durasi;
		return (
			<div className="calculator-container">
				<h4 className="calculator-head">Desktop</h4>
				<div className="calculator-body">
					<SchemeList list={this.state.paket} event={this.setSchemeProp}/>
					<form className="control-group">
						<Option value={pesanan} event={this.setPesananProp} name="framework" label="Framework" options={DesktopFrameworks} />
						<Option value={pesanan} event={this.setPesananProp} name="database" label="Database" options={Databases} />
						<Slider value={pesanan} event={this.setPesananProp} name="revisi" label="Revisi" min="2" max="10" />
						<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" label="Kilat" />
						<Checkbox value={pesanan} event={this.setPesananProp} name="keamanan" label="Keamanan" />
						<ListingPrice value={this.state.harga} label="Harga" />
						<ListingDuration value={durasi.desain} label="Waktu Pengerjaan" />
						<ListingDuration value={durasi.revisi} label="Durasi Revisi" />
					</form>
				</div>
			</div>
		);
	}
}

export default Desktop;