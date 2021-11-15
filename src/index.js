import React from "react";
import ReactDOM from "react-dom";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { GifExpertApp } from "./GifExpertApp";

import './index.css'

configure({ adapter: new Adapter() });

ReactDOM.render(<GifExpertApp />, document.getElementById("root"));