import React from 'react';
import { Field, Label, Hint, Textarea } from '@zendeskgarden/react-forms';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import {ListingDuration, ListingPrice } from './calculator/BaseWidget';

function Checkout({checkout}) {
	let message = `Permisi mas ${checkout.konten.contact.name}, saya pesan ${checkout.konten.title} seharga `
	+ `${Math.floor(checkout.harga/1000)}k${checkout.kilat ? ' paket kilat': ''}, detail ${checkout.uri}`;
	let uri = `https://wa.me/${checkout.konten.contact.whatsapp}?text=${encodeURIComponent(message)}`
	return (
	<div style={{'--scheme':'black'}} className="calculator-container" id="checkout">
		<div className="calculator-hero">
		</div>
		<div className="calculator-body">
			<form className="control-group">
			<Field>
				<Label>{checkout.konten.title}</Label>
			<ListingPrice value={checkout.harga} label={'Harga'}/>
			<ListingDuration value={checkout.durasi.desain} label={'Durasi'}/>
			<ListingDuration value={checkout.durasi.revisi} label={'Revisi'}/>
			<Textarea
				value={message}
				resizable
				readonly
				rows={5}
			/>
			<Hint>Mohon mengisi detail pesanan di pesan berikutnya</Hint>
			<a class="hero-go-checkout" href={uri}>Kirim via WhatsApp</a>
			</Field>
			</form>
		</div>
	</div>
	)
}

export default Checkout;