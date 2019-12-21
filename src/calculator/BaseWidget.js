import React from 'react'
import BaseLabels from './BaseLabels'
import BaseMetrics from './BaseMetrics'
import { Field, Label, Hint, Toggle } from '@zendeskgarden/react-forms';
import { Icon, IconButton } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field as DropField, Dropdown, Menu, Item,
	Trigger, HeaderItem, Select } from '@zendeskgarden/react-dropdowns';
import { Tooltip, Title } from '@zendeskgarden/react-tooltips';
// import {
// 	Accordion,
// 	AccordionItem,
// 	AccordionItemHeading,
// 	AccordionItemButton,
// 	AccordionItemPanel,
// } from 'react-accessible-accordion';

import { ReactComponent as TrashIcon } from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import { ReactComponent as InfoIcon } from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
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

function TooltipLabel({ data }) {
	return (
		<Tooltip
			placement="end"
			type="light"
			size="large"
			trigger={<IconButton link size="small">
				<Icon>
					<InfoIcon />
				</Icon>
			</IconButton>}
		>
			<Title>{data.name}</Title>
			<p>{data.title}</p>
		</Tooltip>
	)
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
					<Col><WidgetLabel name={label} /></Col>
					<Col>{children}</Col>
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
				<IconButton link size="small">
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
							return <>
								<HeaderItem key={lastCTG}>{lastCTG}</HeaderItem>
								<Item value={k} key={k}>{data.name}</Item>
							</>
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
							<div className="control-list-item" key={k}>
								<TooltipLabel data={data} />
								<span>{data.name}</span>
								<DeleteButton onClick={() => deleteEvent(i)} />
							</div>
						)
					})
				}
			</div>
			<ListAddDropdown event={insertEvent} options={BaseMetrics.frameworks} />
		</FieldRow>
	)
}

function ListMedia({ value, event }) {
	const insertEvent = (e) => {
		if (!value.hasOwnProperty(e)) {
			value[e] = 1;
			event({ target: { value: value, type: 'list', name: 'framework' } })
		}
	}
	const deleteEvent = (i) => {
		delete value[i];
		event({ target: { value: value, type: 'list', name: 'framework' } })
	}

	return (
		<FieldRow label="media">
			<div className="control-list">
				{
					Object.keys(value).map((k) => {
						let data = BaseMetrics.media[k]
						return (
							<div className="control-list-item" key={k}>
								<TooltipLabel data={data} />
								<span>{data.name}</span>
								<DeleteButton onClick={() => deleteEvent(k)} />
							</div>
						)
					})
				}
			</div>
			<ListAddDropdown event={insertEvent} options={BaseMetrics.media} />
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

function ListingPrice({ value, label }) {
	return <Listing label={label} >
		{value.toLocaleString('id-ID', {
			style: 'currency',
			currency: 'IDR',
			})}
	</Listing>
}

function ListingDuration({ value, label }) {
	return <Listing label={label} >
		{`${value} Hari`}
	</Listing>
}

function SchemeList({ list, event }) {
	return (<div className="scheme-group">
		{
			list.map((paket, i) => (
				<button className="scheme-item" key={paket.nama} onClick={() => event(i)}>
					<div className="scheme-title">{paket.nama}</div>
				</button>
			))
		}
	</div>)
}

function Submit({ event }) {
	return <button className="hero-submit" onClick={event}>Pesan</button>
}

export { SliderDatabase, Submit, ListFramework, SchemeList, SoftwareOps, DurationListing, MediaOps, ListMedia }