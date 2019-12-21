import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import React from 'react';
import qaList from './media/qaList';


function QA() {
	return <div>
	<Grid>
		<Row >
			<Col md={6} style={{ '--scheme': '#500' }}  className="calculator-container">
				<h3>S&amp;K PROMO</h3>
				<ol style={{textAlign: "left", margin:"2em"}}>
					<li>Promo Berlaku untuk semua jenis pemesanan Aplikasi dan Media Digital</li>
					<li>Promo Berlaku untuk semua pemesanan dari 21 Desember 2019 hingga 20 Januari 2020 23:59 Waktu WIB terhitung dari chat pertama</li>
					<li>Promo Berlaku untuk pemesanan via Website trudigi.id</li>
					<li>Promo Hanya Berlaku untuk pemesanan pertama individu/institusi/lembaga terkait</li>
				</ol>
			</Col>
			<Col md={6} className="App-qa">
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
	</div>
}

export { QA }