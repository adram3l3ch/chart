import "./card.css";
import Logo from "./Logo";

const Card = ({ children }) => {
	return <div className="card">{children}</div>;
};

Card.Header = ({ balance }) => (
	<div className="card__header">
		<div className="balance">
			<p className="balance__title"> My balance</p>
			<p className="balance__amount">${balance}</p>
		</div>
		<Logo />
	</div>
);

Card.Body = ({ children, total, increase }) => (
	<div className="card__body">
		<h1 className="card__body__title">Spending - Last 7 days</h1>
		{children}
		<Card.Footer total={total} increase={increase} />
	</div>
);

Card.Footer = ({ total, increase }) => (
	<footer className="card__footer">
		<div className="total">
			<p>Total this month</p>
			<h2 className="total__amount">${total}</h2>
		</div>
		<div className="increase">
			<h3 className="increase__percent">{increase}</h3>
			<p>From last month</p>
		</div>
	</footer>
);

export default Card;
