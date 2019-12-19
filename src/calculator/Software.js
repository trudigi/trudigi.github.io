import React from 'react';
import Paket from './paket/Software';
import BaseCalculator from './BaseCalculator';
import metrics from './BaseMetrics';
import { ListFramework, SliderDatabase, SchemeList, SoftwareOps, DurationListing } from './BaseWidget';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

class Software extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { framework, database, quick, security, deploy } = state.pesanan;
			let flist = framework.map(x => metrics.frameworks[x]).reduce((a, b) => {
				return {
					price: a.price + b.price,
					duration: a.duration + b.duration,
				}
			}, {
				price: 0,
				duration: 0,
			});
			console.log(flist);
			let dlist = metrics.database[database];
			return {
				listing: {
					price: [
						flist.price,
						dlist.price,
						quick ? flist.price + dlist.price : 0,
						security ? dlist.price * 2 : 0,
						deploy ? 1000 * 1000 : 0
					].reduce((a, b) => a + b, 0),
					duration: Math.floor((flist.duration + dlist.duration) / (quick ? 3 : 1)),
					revision: [7, 30, 60][(security ? 1 : 0) + (deploy ? 1 : 0)],
				}
			}
		})
	}
	render() {
		const pesanan = this.state.pesanan;
		const listing = this.state.listing;
		return <div style={{ '--scheme': '#035' }} className="calculator-container" >
			<Grid>
				<Row>
					<Col md={6} lg={4}>
						<SchemeList list={this.state.paket} event={this.setSchemeProp} />
					</Col>
					<Col md={6} lg={8}>
						<div className="control-item">
							<SliderDatabase value={pesanan.database} event={this.setPesananProp} name="database" />
							<ListFramework value={pesanan.framework} event={this.setPesananProp} name="framework" />
							<SoftwareOps value={pesanan} event={this.setPesananProp} />
							<DurationListing value={listing} />
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	}
}

export default Software