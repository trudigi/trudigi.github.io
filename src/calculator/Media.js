import React from 'react';
import Paket from './paket/Media';
import BaseCalculator from './BaseCalculator';
import metrics from './BaseMetrics';
import { ListMedia, SchemeList, MediaOps, DurationListing, Submit } from './BaseWidget';
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
					price: scheme.price,
					priceVolume: scheme.priceVolume * media[x],
					duration: scheme.duration + scheme.durationVolume * media[x],
					commitment: 50000 + scheme.price // only for HQ
				}
			})
			.reduce((a, b) => {
				return {
					price: a.price + b.price,
					priceVolume: a.priceVolume + b.priceVolume,
					duration: a.duration + b.duration,
					commitment: a.commitment + b.commitment,
				}
			}, {
				price: 0,
				priceVolume: 0,
				duration: 0,
				commitment: 0,
			});
			return {
				listing: {
					price: [
						flist.price * (quick ? 2 : 1),
						flist.priceVolume * (quick ? 3 : 1),
						quality ? flist.commitment : 0,
					].reduce((a, b) => a + b, 0),
					duration: Math.floor(flist.duration / (quick ? 4 : 1)),
					revision: [3, 30][(quality ? 1 : 0)],
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
							<ListMedia value={pesanan.media} event={this.setPesananProp}
										 quick={pesanan.quick} name="media" />
							<MediaOps value={pesanan} event={this.setPesananProp} />
							<DurationListing value={listing} />
							<Submit uri={this.state.uri} event={this.submitPesanan}
									price={listing.price} quick={pesanan.quick} title="Media"/>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	}
}

export default Media