import React from 'react';
import Paket from './paket/Media';
import BaseCalculator from './BaseCalculator';
import metrics from './BaseMetrics';
import { ListMedia, SchemeList, MediaOps, DurationListing } from './BaseWidget';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

class Media extends BaseCalculator {
	listPaket() { return Paket }
	calculate() {
		this.setState((state) => {
			const { media, quick, quality } = state.pesanan;
			let flist = Object.keys(media)
			.map(x => {
				const scheme = metrics.media[x];
				return {
					price: scheme.price + scheme.priceVolume * media[x],
					duration: scheme.duration + scheme.durationVolume * media[x],
				}
			})
			.reduce((a, b) => {
				return {
					price: a.price + b.price,
					duration: a.duration + b.duration,
				}
			}, {
				price: 0,
				duration: 0,
			});
			return {
				listing: {
					price: [
						flist.price,
						quick ? flist.price : 0,
						quality ? flist.price : 0,
					].reduce((a, b) => a + b, 0),
					duration: Math.floor(flist.duration / (quick ? 3 : 1)),
					revision: [7, 30][(quality ? 1 : 0)],
				}
			}
		})
	}
	render() {
		const pesanan = this.state.pesanan;
		const listing = this.state.listing;
		return <div style={{ '--scheme': '#530' }} className="calculator-container" >
			<Grid>
				<Row>
					<Col md={6} lg={4}>
						<SchemeList list={this.state.paket} event={this.setSchemeProp} />
					</Col>
					<Col md={6} lg={8}>
						<div className="control-item">
							<ListMedia value={pesanan.media} event={this.setPesananProp} name="media" />
							<MediaOps value={pesanan} event={this.setPesananProp} />
							<DurationListing value={listing} />
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	}
}

export default Media