import React from 'react'
import BaseLabels from './BaseLabels'
function Label({name}) {
	console.log(name);
	const label = BaseLabels[name];
	if (label)
		return <span className="label" data-balloon-pos="down" data-balloon-length="large"
			aria-label={label.highlight+"\n\n"+label.deskripsi}>{label.nama}</span>
	else
		return <span className="label">{name}</span>
}
function Slider({value, event, name, min, max}) {
	return (<div className="control-item">
		<Label name={name}/>
		<span className="input">
			<input name={name} type="range" min={min} max={max}
				value={value[name]} onChange={event} />
			<input name={name} type="number" min={min} max={max}
				value={value[name]} onChange={event} style={{width: '4em'}} />
		</span>
	</div>)
}


function Option({value, event, name, options}) {
	return (<div className="control-item">
		<Label name={name}/>
		<span className="input options">
			{
				Object.keys(options).map(key => (
					<label key={key}>
						<input name={name} type="radio"
						value={key} checked={key === value[name]}  onChange={event} />
						{options[key].nama}
						<br/>
					</label>
				))
			}
			<div className="hint">
				{
					options[value[name]] && options[value[name]].deskripsi
				}
			</div>
		</span>
	</div>)
}

function Checkbox({value, event, name}) {
	return (<div className="control-item">
		<Label name={name}/>
		<span className="input">
			<input name={name} type="checkbox" checked={value[name] === true} onChange={event}/>
		</span>
	</div>)
}

function Listing({value, label}) {
	return (<div className="control-item">
		<Label name={label}/>
		<span className="listing">{value}</span>
	</div>)
}

function ListingPrice({value, label}) {
	return (<div className="control-item">
		<Label name={label}/>
		<span className="listing">{value.toLocaleString('id-ID', {
							style: 'currency',
							currency: 'IDR',
						})}</span>
	</div>)
}

function ListingDuration({value, label}) {
	const range = Math.ceil(Math.sqrt(value / 5));
	return (<div className="control-item">
		<Label name={label}/>
		<span className="listing">{`${value - range}-${value + range} Hari`}</span>
	</div>)
}

function SchemeList({list, event}) {
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

export { Slider, Checkbox, Listing, ListingPrice, Option, SchemeList, ListingDuration }