import React from "react";

const Bar = ({ value, percentage, active }) => {
	const style = { height: `${value[1] * percentage}%` };
	return (
		<div className="chart__item">
			<div style={style} className={active ? "bar active" : "bar"}>
				<div className="tooltip">${value[1]}</div>
			</div>
			<p className="y-label">{value[0]}</p>
		</div>
	);
};

export default Bar;
