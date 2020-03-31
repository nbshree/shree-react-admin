import React, {Component} from 'react';
import Test from './test';
import Game from "./game";
export default class Home extends Component {
	constructor(props) {
		super(props);
		console.log(props.location);
	}
	render() {
		return (
			<div>
				<p>Home</p>
				<input/>
				{/*<Test>*/}
				{/*	/!*<Game/>*!/*/}
				{/*</Test>*/}
				{/*<Header source="http://localhost:3000/data/swiper"/>*/}
				{/*<Otherapp source="http://localhost:3000/data/otherapp"/>*/}
				{/*<Spike source="http://localhost:3000/data/spike"/>*/}
				{/*<More source="http://localhost:3000/data/more"/>*/}
				{/*<Like source="http://localhost:3000/data/like"/>*/}
			</div>
		)
	}
}
// export default Test;
