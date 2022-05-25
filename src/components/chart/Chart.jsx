import Bar from "./Bar";
import "./chart.css";

const Chart = ({ data, gap }) => {
	const values = data.map((item) => Object.values(item));
	const maxValue = Math.max(...values.map((item) => item[1]));
	const percentage = 100 / maxValue;
	return (
		<div className="chart" style={{ gap: `${gap}rem` }}>
			{values.map((value) => (
				<Bar
					key={value[0]}
					value={value}
					percentage={percentage}
					active={value[1] === maxValue}
				/>
			))}
		</div>
	);
};

export default Chart;
