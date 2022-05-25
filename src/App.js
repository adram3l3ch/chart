import Card from "./components/card/Card";
import Chart from "./components/chart/Chart";
import data from "./data.json";

function App() {
	return (
		<div className="app">
			<Card>
				<Card.Header balance={4545} />
				<Card.Body total={478.33} increase="+2.4%">
					<Chart data={data} gap={1} />
					<hr />
				</Card.Body>
			</Card>
		</div>
	);
}

export default App;
