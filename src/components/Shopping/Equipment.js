import React from 'react'

export default ({ data, buyItem }) => {
	return (
		<div className="clear">
			<h3>Equipment</h3>
			<ul className="list-item">
				{data.map((d, i) => {
					return (
						<li key={`${d.title}${i}`}>
							<p>{d.title}</p>
							<p>{d.price}</p>
							<p>Lv. <span id="level-weapon">{d.level}</span></p>
							<p><button onClick={buyItem.bind(this, d.title)} value="item-upgrade">Upgrade</button></p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}