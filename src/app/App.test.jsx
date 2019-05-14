import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("<App />", () => {
	test("renders correctly - loading = false; lat = '' ", () => {
		let wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders correctly - loading = true", () => {
		let wrapper = shallow(<App />);
		wrapper.setState({ loading: true });
		expect(wrapper).toMatchSnapshot();
	});

	test("renders correctly - loading = false; lat & long != null", () => {
		let wrapper = shallow(<App />);
		wrapper.setState({
			loading: false,
			lat: "37.39",
			lon: "-122.09",
			locationName: "Mountain View"
		});
		expect(wrapper).toMatchSnapshot();
	});
});
