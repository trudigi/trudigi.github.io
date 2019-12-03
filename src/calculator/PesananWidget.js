import React from 'react'

function Slider({value, event, name, label, min, max}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
		<span className="input">
			<input name={name} type="range" min={min} max={max}
				value={value[name]} onChange={event} />
			<input name={name} type="number" min={min} max={max}
				value={value[name]} onChange={event} style={{width: '4em'}} />
		</span>
	</div>)
}


function Option({value, event, name, label, options}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
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
			<div>
				{
					options[value[name]] && options[value[name]].deskripsi
				}
			</div>
		</span>
	</div>)
}

function Checkbox({value, event, name, label}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
		<span className="input">
			<input name={name} type="checkbox" value={value[name]} onChange={event}/>
		</span>
	</div>)
}

function Listing({value, label}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
		<span className="listing">{value}</span>
	</div>)
}

function ListingPrice({value, label}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
		<span className="listing">{value.toLocaleString('id-ID', {
							style: 'currency',
							currency: 'IDR',
						})}</span>
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

export { Slider, Checkbox, Listing, ListingPrice, Option, SchemeList }