import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import React from 'react';
import qaList from './media/qaList';


function QA() {
	return <div>
	<Grid>
		<Row >
			<Col md={6} style={{ '--scheme': '#500' }}  className="calculator-container">
				<h3>PROMO</h3>
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