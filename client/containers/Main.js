import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<h1>
					<Link to="/">{'Datsu' + '-' + 'sara'}</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
};

export default Main;
