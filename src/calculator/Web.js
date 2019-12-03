import React from 'react';
import BaseCalculator from './BaseCalculator';
import Paket from './paket/Web';
import { Slider, Checkbox, Listing, ListingPrice, Option, SchemeList } from './PesananWidget';

const frameworks = {
	'none': {
		nama: "Statis",
		deskripsi: "Website yang hanya menyediakan konten. Cocok untuk pembuatan CV dan Landing Page",
		harga: 50000,
		durasi: 14
	},
	'php': {
		nama: "PHP (CodeIgniter)",
		deskripsi: "Website konvensional, LAMP stack. Cocok untuk pembuatan website apapun dengan model CMS",
		harga: 200000,
		durasi: 21,
	},
	'node': {
		nama: "NodeJS (Express)",
		deskripsi: "Website modern, MERN stack. Cocok untuk pembuatan website kompleks dengan model PWA",
		harga: 300000,
		durasi: 21,
	},
}

const databases = {
	'none': {
		nama: "Tanpa Database",
		deskripsi: "Website statis tanpa ada data masuk/keluar",
		harga: 0,
		durasi: 0
	},
	'mini': {
		nama: "Mini",
		deskripsi: "Database dengan 1-3 tabel cocok untuk website login admin atau mengumpulkan survey sederhana",
		harga: 50000,
		durasi: 2,
	},
	'regular': {
		nama: "Regular",
		deskripsi: "Database dengan 3-7 tabel cocok untuk website dengan login admin dan pengguna",
		harga: 100000,
		durasi: 7,
	},
	'complex': {
		nama: "Kompleks",
		deskripsi: "Database kompleks untuk website yang mengelola beragam jenis konten dan pengguna.",
		harga: 400000,
		durasi: 14,
	},
	'mega': {
		nama: "Forensik",
		deskripsi: "Database super kompleks lengkap dengan laporan, data ekspor, dan analisa statis.",
		harga: 1000000,
		durasi: 21,
	},
}

class Web extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { framework, database, revisi, kilat, keamanan } = state.pesanan
			return {
				// eslint-disable-next-line
				harga: (frameworks[framework].harga + databases[database].harga * (keamanan ? 2 : 1) + revisi * 50000) * (kilat ? 2 : 1),
				durasi: {
					desain: Math.ceil((frameworks[framework].durasi + databases[database].durasi) / (kilat ? 2 : 1)) + (keamanan ? 7 : 0),
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
				<h4 className="calculator-head">Website</h4>
				<div className="calculator-body">
					<SchemeList list={this.state.paket} event={this.setSchemeProp}/>
					<div className="control-group">
						<Option value={pesanan} event={this.setPesananProp} name="framework" label="Framework" options={frameworks} />
						<Option value={pesanan} event={this.setPesananProp} name="database" label="Database" options={databases} />
						<Slider value={pesanan} event={this.setPesananProp} name="revisi" label="Revisi" min="2" max="10" />
						<Checkbox value={pesanan} event={this.setPesananProp} name="kilat" label="Kilat" />
						<Checkbox value={pesanan} event={this.setPesananProp} name="keamanan" label="Keamanan" />
						<ListingPrice value={this.state.harga} label="Harga" />
						<Listing value={`${durasi.desain - 1}-${durasi.desain + 1} Hari`} label="Waktu Pengerjaan" />
						<Listing value={`${durasi.revisi - 1}-${durasi.revisi + 1} Hari`} label="Durasi Revisi" />
					</div>
				</div>
			</div>
		);
	}
}

export default Web;