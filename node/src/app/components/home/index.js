'use strict';

import React, {Component} from 'react';

import HomeItem from 'components/home-item';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = props.state;
	}
	
	render() {
		const { currentPage, page } = this.props;
		const contentLength = page.content.length;
		return <main id={"page-"+currentPage}>
			{page.content.map((homeItem, index) => { 
				return <HomeItem key={`home-item-${index}`} data={homeItem} className={(contentLength == (index+1) ? 'last':'')} />; 
			})}
		</main>;
			
	}
	
}
Home.defaultProps = {
	state: {}
};

export default Home;