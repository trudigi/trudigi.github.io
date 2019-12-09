import React from 'react';
import { ReactComponent as Logo } from './media/brandTrudigiLong.svg'
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const qaList = [
	// UMUM
	{
		q: "Apa itu TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Siapa yang merintis TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Apa motivasi dibelakang TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Bagaimana cara kerja TRUDIGI?",
		a: "TBD."
	},
	// PEMESANAN
	{
		q: "Bagaimana cara memesan projek di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Bagaimana sistem pembayaran di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Bagaimana alur pengerjaan projek di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Bagaimana penghitungan harga di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Bagaimana penghitungan durasi pengerjaan di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Bagaimana penghitungan durasi revisi di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Bagaimana jika saya butuh lebih banyak revisi diluar pemesanan?",
		a: "TBD."
	},
	{
		q: "Apa itu opsi kilat di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Saya butuh lebih cepat dari opsi kilat. Bisa?",
		a: "TBD."
	},
	{
		q: "Apa itu opsi keamanan di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Apa saja contoh karya TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Dapatkah saya berpartisipasi di TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Apa relasi antara UTM dan TRUDIGI?",
		a: "TBD."
	},
	{
		q: "Kontak yang bisa dihubungi untuk pertanyaan lain?",
		a: "TBD."
	},
]
function Header(props) {
	return <header className="App-header">
		<Grid>
			<Row>
			<Col md={8}>
				<Logo className="App-logo"  />
				<h1>Trunojoyo Digital Freelancer</h1>
				<p>Kami menerima pesanan project digital dari harga ekonomis hingga skala besar</p>
				<p><small><i>Scroll ke bawah untuk melihat jenis pesanan...</i></small></p>
			</Col>
			<Col md={4} className="App-qa">
				<h3>FAQ</h3>
				{
					qaList.map(x => <div className="App-qa-item" key={x.q}>
						<div className="App-qa-q">{x.q}</div>
						<div className="App-qa-a">{x.a}</div>
					</div>)
				}
			</Col>
			</Row>
		</Grid>
		</header>
}

export default Header