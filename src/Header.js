import React from 'react';
import { ReactComponent as Logo } from './media/brandTrudigiLong.svg'
import Countdown from 'react-countdown-now';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

function Header() {
	return <header className="App-header">
		<div>

				<Logo className="App-logo" />
				<h1>Trunojoyo Digital Freelancer</h1>
				<div className="sale-countdown">
					<Grid>
						<Row>
							<Col md={12}>
								<h2>PROMO GRAND LAUNCHING</h2>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<h4>Project Digital UP TO 20%!</h4>
								<h5>Pesan sebelum 21 Januari 2020.<br/> SK Berlaku.</h5>
							</Col>
							<Col md={6} className="countdown">
								<Countdown date='2020-01-21T00:00:00'/>
							</Col>
						</Row>
					</Grid>



				</div>
				</div>

		</header>
}


export { Header }