import React from 'react'
import BaseLabels from './BaseLabels'
import BaseMetrics from './BaseMetrics'
import { Field, Label, Hint, Toggle } from '@zendeskgarden/react-forms';
import { Button, Icon, IconButton } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field as DropField, Dropdown, Menu, Item, Trigger, HeaderItem, Select } from '@zendeskgarden/react-dropdowns';
import { Tooltip, Title } from '@zendeskgarden/react-tooltips';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import { ReactComponent as TrashIcon } from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import { ReactComponent as InfoIcon } from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import { ReactComponent as PlusIcon } from '@zendeskgarden/svg-icons/src/16/plus-fill.svg';

function WidgetLabel({ name }) {
	const label = BaseLabels[name];
	if (label)
		return <div><Label>
			{label.name}
		</Label>
			<Hint>{label.highlight}</Hint>
		</div>

	else
		return <Label>{name}</Label>
}
function WidgetLabel2({ name }) {
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
		<Field>
		<Grid>
			<Row>
				<Col>
					<div className="control-name">
						<WidgetLabel name="framework" />
						<Dropdown sm onSelect={insertEvent} >
							<Trigger><IconButton link size="small">
								<Icon>
									<PlusIcon />
								</Icon>
							</IconButton></Trigger>
							<Menu placement="start" arrow>
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
				</Col>
				<Col>
					<div className="control-list">
						{
							value.map((k, i) => {
								let data = BaseMetrics.frameworks[k]
								return (
									<div className="control-list-item" key={k}>
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
										<span>
											{data.name}
										</span>
										<IconButton danger onClick={() => deleteEvent(i)} size="small">
											<Icon>
												<TrashIcon />
											</Icon>
										</IconButton>
									</div>
								)
							}

							)
						}
					</div>
				</Col>
			</Row>
		</Grid>
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
					Object.keys(value).map((k, i) => {
						let data = BaseMetrics.media[k]
						return <AccordionItem key={k}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<span>
										{data.name}
									</span>
									<IconButton style={{ float: 'right' }} danger onClick={() => deleteEvent(i)} size="small">
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
				<Grid>
					<Row>
						<Col lg={6}>
							<WidgetLabel name="database" />
						</Col>
						<Col lg={6}>
							<Select>{data.name}</Select>
							<Hint>{data.title}</Hint>
						</Col>
					</Row>
				</Grid>
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
				<WidgetLabel2 name={name} />
			</Toggle>
		</Field>
	)
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