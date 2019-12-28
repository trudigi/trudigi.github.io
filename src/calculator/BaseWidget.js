import React from 'react'
import BaseLabels from './BaseLabels'
import BaseMetrics from './BaseMetrics'
import { Field, Label, Hint, Toggle, Range, Textarea, Message } from '@zendeskgarden/react-forms';
import { Icon, IconButton, Button } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import {
	Field as DropField, Dropdown, Menu, Item,
	Trigger, HeaderItem, Select
} from '@zendeskgarden/react-dropdowns';
// import {
// 	Accordion,
// 	AccordionItem,
// 	AccordionItemHeading,
// 	AccordionItemButton,
// 	AccordionItemPanel,
// } from 'react-accessible-accordion';

import { ReactComponent as TrashIcon } from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import { ReactComponent as PlusIcon } from '@zendeskgarden/svg-icons/src/16/plus-fill.svg';

function WidgetLabel({ name }) {
	const label = BaseLabels[name];
	if (label)
		return <><Label>
			{label.name}
		</Label>
			<Hint>{label.highlight}</Hint>
		</>
	else
		return <Label>{name}</Label>
}

function DeleteButton({ onClick }) {
	return <IconButton danger onClick={onClick} size="small">
		<Icon>
			<TrashIcon />
		</Icon>
	</IconButton>
}

function FieldRow({ label, children }) {
	return (
		<Field>
			<Grid>
				<Row>
					<Col md={4}><WidgetLabel name={label} /></Col>
					<Col md={8}>{children}</Col>
				</Row>
			</Grid>
		</Field>
	)
}

function ListAddDropdown({ event, options }) {
	let lastCTG = ''
	return (
		<Dropdown sm onSelect={event} >
			<Trigger>
				<IconButton primary size="small">
					<Icon>
						<PlusIcon />
					</Icon>
				</IconButton>
			</Trigger>
			<Menu placement="start" arrow>
				{
					Object.keys(options).map(k => {
						const data = options[k];
						if (data.group !== lastCTG) {
							lastCTG = data.group
							return <React.Fragment key={k}>
								<HeaderItem>{lastCTG}</HeaderItem>
								<Item value={k}>{data.name}</Item>
							</React.Fragment>
						} else {
							return <Item value={k} key={k}>{data.name}</Item>
						}
					})
				}
			</Menu>
		</Dropdown>
	)
}

function ListFramework({ value, event }) {
	const insertEvent = (e) => {
		if (!value.includes(e)) {
			value.push(e);
			event({ target: { value: value, type: 'list', name: 'framework' } })
		}
	}
	const deleteEvent = (i) => {
		value.splice(i, 1)
		event({ target: { value: value, type: 'list', name: 'framework' } })
	}


	return (
		<FieldRow label="framework">
			<div className="control-list">
				{
					value.map((k, i) => {
						let data = BaseMetrics.frameworks[k]
						return (
							<React.Fragment key={k}>
								<div className="control-list-item">
									<div>{data.name}</div>
									<DeleteButton onClick={() => deleteEvent(i)} />
								</div>
								<Hint>{data.title}</Hint>
							</React.Fragment>
						)
					})
				}
				<div className="control-list-item">
					<ListAddDropdown event={insertEvent} options={BaseMetrics.frameworks} />
				</div>
			</div>
		</FieldRow>
	)
}

function ListMedia({ value, event, quick }) {
	const insertEvent = (e) => {
		if (!value.hasOwnProperty(e)) {
			value[e] = 1;
			event({ target: { value: value, type: 'list', name: 'media' } })
		}
	}
	const deleteEvent = (i) => {
		delete value[i];
		event({ target: { value: value, type: 'list', name: 'media' } })
	}
	const changeEvent = (i, k) => {
		value[k] = i
		event({ target: { value: value, type: 'list', name: 'media' } })
	}

	return (
		<FieldRow label="media">
			<div className="control-list">
				{
					Object.keys(value).map((k) => {
						let data = BaseMetrics.media[k]
						return (
							<React.Fragment key={k}>
								<div className="control-list-item">
								<div>{data.name}</div>
									<DeleteButton onClick={() => deleteEvent(k)} />
								</div>
								<Hint>{data.title}</Hint>
								<Range value={value[k]} min={1} max={15}
								 onChange={(v) => changeEvent(v.target.value, k)} />
								<Hint>
									{`${value[k]} \xd7 ${data.volume}, selanjutnya `}
									{`${toIDR(data.priceVolume * (quick ? 3 : 1))} per ${data.volume}`}
								</Hint>
							</React.Fragment>
						)
					})
				}
				<div className="control-list-item">
					<ListAddDropdown event={insertEvent} options={BaseMetrics.media} />
				</div>
			</div>
		</FieldRow>
	)
}

function SliderDatabase({ value, event }) {
	const keys = Object.keys(BaseMetrics.database)
	const data = BaseMetrics.database[value]
	const sliderEvent = (val) => {
		event({ target: { value: val, type: 'text', name: 'database' } })
	}
	return (
		<Field>
			<Dropdown
				selectedItem={value}
				onSelect={sliderEvent}
			>
				<DropField>
					<FieldRow label="database">
						<Select>{data.name}</Select>
						<Hint>{data.title}</Hint>
					</FieldRow>
				</DropField>
				<Menu>
					{keys.map(key => (
						<Item key={key} value={key}>
							{BaseMetrics.database[key].name}
						</Item>
					))}
				</Menu>
			</Dropdown>

		</Field>
	)
}

function SoftwareOps({ value, event }) {
	return (
		<>
			<Checkbox value={value} event={event} name="quick" />
			<Checkbox value={value} event={event} name="security" />
			<Checkbox value={value} event={event} name="deploy" />
		</>
	);
}

function MediaOps({ value, event }) {
	return (
		<>
			<Checkbox value={value} event={event} name="quick" />
			<Checkbox value={value} event={event} name="quality" />
		</>
	);
}


function DurationListing({ value }) {
	return (
		<>
			<ListingPrice value={value.price} label="price" />
			<ListingDuration value={value.duration} label="duration" />
			<ListingDuration value={value.revision} label="revision" />
		</>
	);
}

function Checkbox({ value, event, name }) {
	return (
		<Field>
			<Toggle name={name} checked={value[name] === true} onChange={event} >
				<WidgetLabel name={name} />
			</Toggle>
		</Field>
	)
}

function Listing({ children, label }) {
	return (
		<FieldRow label={label}>
			{children}
		</FieldRow>
	)
}

const toIDR = (v) => v.toLocaleString('id-ID', {
	style: 'currency',
	currency: 'IDR',
});

function GetDiscount(value) {
	const normal = value;
	const discount = (
			(value >= 2000000 ? 0.25 :
			(value >= 1000000 ? 0.20 :
			(value >= 500000 ? 0.10 :
			(value >= 250000 ? 0.05 : 0)))));
	const discounted = Math.floor(normal * (1-discount));
	return {
		normal, discount, discounted
	};
}

function ListingPrice({ value, label }) {
	const { normal, discount, discounted } = GetDiscount(value);

	let display;
	if (discount > 0) {
		display = <><div className="listing-old">
			{toIDR(normal)}
			</div><div className="listing">
			{toIDR(discounted)}
			</div>
			<Hint>Promo Grand Launching: <b>Diskon {discount*100}%</b></Hint>
			</>
	}  else {
		display = <div className="listing">{toIDR(normal)}</div>
	}
	return <Listing label={label} >
		{display}
	</Listing>
}

function ListingDuration({ value, label }) {
	return <Listing label={label} >
		{value === 0 ? <b>{'< 24 Jam'}</b> : (value === 1 ? <b>{'< 48 Jam'}</b> : <span>{value+" Hari"}</span>)}
	</Listing>
}

function SchemeList({ list, event }) {
	return (<div className="scheme-group">
		{
			list.map((paket, i) => (
				<button className="scheme-item" key={paket.nama} onClick={() => event(i)}>
					<div className="scheme-title">{paket.nama}</div>
					<small>{paket.deskripsi}</small>
				</button>
			))
		}
	</div>)
}

function Validation({ error }) {
	if (error) {
		return <Message validation="error">{error}</Message>
	} else {
		return <Message validation="success">OK</Message>
	}
}

function Submit({ event, uri, title, price, quick, disabled }) {
	if (uri) {
		let message = `Permisi mas Julius, saya pesan ${title} seharga `
		+ `${Math.floor(GetDiscount(price).discounted/1000)}k${quick ? ' paket kilat': ''}, detail ${uri}`;
		let url = `https://wa.me/${'62852572841'+72}?text=${encodeURIComponent(message)}`

		return <>
		<Button onClick={event}>Tarik</Button>
		<Field><Textarea readOnly value={message} rows={6} resizable/></Field>
		<a className="hero-submit" href={url} _target="blank">Kirim</a>
		</>
	} else {
		return <Button primary onClick={event} disabled={disabled}>Pesan</Button>
	}
}

export { SliderDatabase, Submit, ListFramework, SchemeList,
	SoftwareOps, DurationListing, MediaOps, ListMedia, Validation }