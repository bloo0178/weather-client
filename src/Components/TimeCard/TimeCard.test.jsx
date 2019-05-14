import React from "react";
import {TimeCard} from "./TimeCard";
import { shallow } from "enzyme";

describe("<TimeCard />", () => {
	test("renders correctly", () => {
		let wrapper = shallow(
			<TimeCard
				iconSrc="../../common/icons/10n.svg"
				time="Currently"
				temp="85"
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
