import React from "react";
import Forecast from "./Forecast";
import { shallow } from "enzyme";

let forecastData = [{ date: "2019-05-13", times: ["1", "2"] }];

describe("<Forecast />", () => {
	test("renders correctly", () => {
		let wrapper = shallow(
			<Forecast forecastData={forecastData} tempUnit="F" />
		);
		expect(wrapper).toMatchSnapshot();
	});
});
