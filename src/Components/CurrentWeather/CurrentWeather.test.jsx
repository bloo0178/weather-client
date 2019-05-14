import React from "react";
import CurrentWeather from "./CurrentWeather";
import { shallow } from "enzyme";

describe("<CurrentWeather />", () => {
	test("renders correctly", () => {
		let wrapper = shallow(
			<CurrentWeather currentWeather={{ icon: "01d", temp: "85" }} />
		);
		console.log(wrapper.debug());
		expect(wrapper).toMatchSnapshot();
	});
});
