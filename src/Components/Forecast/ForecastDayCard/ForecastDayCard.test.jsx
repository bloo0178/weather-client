import React from "react";
import ForecastDayCard from "./ForecastDayCard";
import { shallow } from "enzyme";

let times = [
	{
		time: "12am",
		icon: "http://openweathermap.org/img/w/10n.png",
		temp: "85"
	},
	{
		time: "3am",
		icon: "http://openweathermap.org/img/w/10n.png",
		temp: "86"
	},
	{
		time: "6am",
		icon: "http://openweathermap.org/img/w/10n.png",
		temp: "87"
	}
];

describe("<ForecastDayCard />", () => {
	test("renders correctly", () => {
		let wrapper = shallow(
			<ForecastDayCard
				date={"Tue May 14"}
				tempUnit="F"
				times={times}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
