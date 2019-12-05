import React from 'react'
import BaseLabels from './BaseLabels'
import { Field, Label, Hint, Range, Input, Toggle, Radio } from '@zendeskgarden/react-forms';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

function WidgetLabel({ name }) {
	const label = BaseLabels[name];
	if (label)
		return <Label>
			<div data-balloon-pos="left" data-balloon-length="large"
				aria-label={label.highlight + "\n\n" + label.deskripsi}>
				{label.nama}
			</div>
		</Label>

	else
		return <Label>{name}</Label>
}

function Slider({ value, event, name, min, max }) {
	return (
		<Field>
			<WidgetLabel name={name} />
			<Grid>
				<Row>
					<Col md={9}>
						<Range name={name} type="range" min={min} max={max}
							value={value[name]} onChange={event} />
					</Col>
					<Col md={3}>
						<Input name={name} type="number" min={min} max={max}
							value={value[name]} onChange={event} />
					</Col>
				</Row>
			</Grid>
		</Field>
	)
}


function Option({ value, event, name, options }) {
	return (<Field>
		<WidgetLabel name={name} />
		<Grid>
			<Row>
				<Col justifyContent="start">
				{
					Object.keys(options).map(key => (
						<Field>
						<Radio key={key} name={name}
								value={key} checked={key === value[name]} onChange={event} >
								<Label>{options[key].nama}</Label>
						</Radio></Field>
					))
				}
				</Col>
				<Col alignSelf="center">
				<Hint>
				{
					options[value[name]] && options[value[name]].deskripsi
				}
				</Hint>
				</Col>
			</Row>
		</Grid>
	</Field>)
}

function Checkbox({ value, event, name }) {
	return (<Field>
		<Toggle name={name} checked={value[name] === true} onChange={event} >
			<WidgetLabel name={name} />
		</Toggle>
	</Field>)
}

function Listing({ value, label }) {
	return (
		<Field>
			<Grid>
				<Row>
					<Col md={6}>
						<WidgetLabel name={label} />
					</Col>
					<Col md={6} className="listing">
						{value}
					</Col>
				</Row>
			</Grid>
		</Field>
	)
}

function ListingPrice({ value, label }) {
	return <Listing value={value.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
	})} label={label} />
}

function ListingDuration({ value, label }) {
	const range = Math.ceil(Math.sqrt(value / 5));
	return <Listing value={`${value - range}-${value + range} Hari`} label={label} />
}

function SchemeList({ list, event }) {
	return (<div className="scheme-group">
		{
			list.map((paket, i) => (
				<button className="scheme-item" key={paket.nama} onClick={() => event(i)}>
					<div className="scheme-title">{paket.nama}</div>
					<div className="scheme-desc">{paket.deskripsi}</div>
				</button>
			))
		}
	</div>)
}

function Submit({ event }) {
	return <button className="hero-submit" onClick={event}>Pesan</button>
}

export { Slider, Checkbox, Listing, ListingPrice, Option, ListingDuration, SchemeList, Submit }