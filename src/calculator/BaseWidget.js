import React, { Component } from 'react'
import BaseLabels from './BaseLabels'
import BaseMetrics from './BaseMetrics'
import { Field, Label, Hint, Range, Input, Toggle, Radio } from '@zendeskgarden/react-forms';
import { Button, Icon, IconButton } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Dropdown, Menu, Item, Trigger, HeaderItem } from '@zendeskgarden/react-dropdowns';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { ReactComponent as TrashIcon } from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';

function WidgetLabel({ name }) {
	const label = BaseLabels[name];
	if (label)
		return <Label>
			<div data-balloon-pos="right" data-balloon-length="large"
				aria-label={label.highlight + "\n\n" + label.title}>
				{label.name}
			</div>
		</Label>

	else
		return <Label>{name}</Label>
}

function ListFramework({ value, event }) {
		const keys = Object.keys(BaseMetrics.frameworks)
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
		let lastCTG = '';

		return (
			<Field className="control-item">
				<div className="control-name">
					<WidgetLabel name="framework" />
					<Dropdown sm onSelect={insertEvent} >
						<Trigger><Button size="small">Tambah</Button></Trigger>
						<Menu arrow>
							{
								keys.map(k => {
									const data = BaseMetrics.frameworks[k];
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
				</div>

				<Accordion className="control-range" allowZeroExpanded>
					{
						value.map((k, i) => {
							let data = BaseMetrics.frameworks[k]
							return <AccordionItem key={k}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<span>
										{data.name}
									</span>
									<IconButton style={{float: 'right'}}  danger onClick={() => deleteEvent(i)} size="small">
										<Icon>
										<TrashIcon />
										</Icon>
									</IconButton>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								{data.title}
							</AccordionItemPanel>
						</AccordionItem>
						}

						)
					}

				</Accordion>
			</Field>
		)
}
function ListMedia({ value, event }) {
	const keys = Object.keys(BaseMetrics.media)
	const insertEvent = (e) => {
		if (!value.includes(e)) {
			value.push(e);
			event({ target: { value: value, type: 'list', name: 'media' } })
		}
	}
	const deleteEvent = (i) => {
		value.splice(i, 1)
		event({ target: { value: value, type: 'list', name: 'media' } })
	}
	let lastCTG = '';

	return (
		<Field className="control-item">
			<div className="control-name">
				<WidgetLabel name="media" />
				<Dropdown sm onSelect={insertEvent} >
					<Trigger><Button size="small">Tambah</Button></Trigger>
					<Menu arrow>
						{
							keys.map(k => {
								const data = BaseMetrics.media[k];
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
			</div>

			<Accordion className="control-range" allowZeroExpanded>
				{
					value.map((k, i) => {
						let data = BaseMetrics.media[k]
						return <AccordionItem key={k}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<span>
									{data.name}
								</span>
								<IconButton style={{float: 'right'}}  danger onClick={() => deleteEvent(i)} size="small">
									<Icon>
									<TrashIcon />
									</Icon>
								</IconButton>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							{data.title}
						</AccordionItemPanel>
					</AccordionItem>
					}

					)
				}

			</Accordion>
		</Field>
	)
}

function SliderDatabase({ value, event }) {
	const keys = Object.keys(BaseMetrics.database)
	const data = BaseMetrics.database[value]
	let index = keys.indexOf(value)
	const sliderEvent = (e) => {
		const val = keys[e.target.value];
		event({ target: { value: val, type: 'text', name: 'database' } })
	}
	return (
		<Field className="control-item">
			<div className="control-name">
				<WidgetLabel name="database" />
				<Range name="database" type="range" min={0} max={keys.length - 1}
					value={index} onChange={sliderEvent} />
			</div>
			<Accordion className="control-range" allowZeroExpanded>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
									{data.name}
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							{data.title}
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
		</Field>
	)
}

function SoftwareOps({ value, event })  {
	return (
		<Field className="control-item">
			<Checkbox value={value} event={event} name="quick"/>
			<Checkbox value={value} event={event} name="security"/>
			<Checkbox value={value} event={event} name="deploy"/>
		</Field>
	);
}

function MediaOps({ value, event })  {
	return (
		<Field className="control-item">
			<Checkbox value={value} event={event} name="quick"/>
			<Checkbox value={value} event={event} name="quality"/>
		</Field>
	);
}


function DurationListing({ value })  {
	return (
		<Field className="control-item">
			<ListingPrice value={value.price} label="price"/>
			<ListingDuration value={value.duration} label="duration"/>
			<ListingDuration value={value.revision} label="revision"/>
		</Field>
	);
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
	return <Listing value={`${value} Hari`} label={label} />
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