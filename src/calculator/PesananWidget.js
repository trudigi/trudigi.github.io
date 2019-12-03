import React from 'react';

function Slider({value, event, name, label, min, max}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
		<span className="input">
			<input name={name} type="range" min={min} max={max}
				value={value[name]} onChange={event} />
			<input name={name} type="number" min={min} max={max}
				value={value[name]} onChange={event} />
		</span>
	</div>)
}

function Checkbox({value, event, name, label}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
		<span className="input">
			<input name={name} type="checkbox" value={value[name]} onChange={event} />
		</span>
	</div>)
}

function Listing({value, label}) {
	return (<div className="control-item">
		<span className="label">{label}</span>
		<span className="listing">{value}</span>
	</div>)
}

export { Slider, Checkbox, Listing }