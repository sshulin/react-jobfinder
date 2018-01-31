import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="header">
					<h1 className="header__title">
						<Link to="/" title="Go home">{'React jobfinder'}</Link>
					</h1>
				</div>
				<div className="content">
					{React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		)
	}
};

export default Main;
