import React from "react";
import App from "./App";
import {shallow} from 'enzyme';

describe("<App />", ()  => {
    test("renders correctly", () => {
        let wrapper = shallow(<App />); 
        expect(wrapper).toMatchSnapshot();
    })
}); 