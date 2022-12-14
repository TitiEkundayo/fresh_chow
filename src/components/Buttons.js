import { ForwardArrowIcon } from "./Icons";

// option btns
// green background purchase choice button
export const GreenBgPurchaseChoiceBtn = ({ text }) => {
	// background-color, text, border-radius, padding
	return (
		<button className="GreenBgPurchaseChoiceBtn">
			{text} <ForwardArrowIcon />
		</button>
	);
};

// white purchase choice button
export const WhiteBgPurchaseChoiceBtn = ({ text }) => {
	// background-color, text, border-radius, padding
	return (
		<button className="WhiteBgPurchaseChoiceBtn">
			{text} <ForwardArrowIcon />
		</button>
	);
};

// orange purchase choice button
export const OrangeBgPurchaseChoiceBtn = ({ text }) => {
	// background-color, text, border-radius, padding
	return (
		<button className="btn">
			{text} <ForwardArrowIcon />
		</button>
	);
};
