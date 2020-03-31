import React, {Component} from 'react';

class Test extends Component {
	constructor(props) {
		super(props);
		console.log(props.match.params.id)
	}
	render() {
		return (
			<div>
				test
				{/*<Redirect from="/test" to="/game"/>*/}
				{/*<input/>*/}
				{/*{this.props.children}*/}
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
export default Test;
