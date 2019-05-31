import React, { Component, Fragment } from 'react'
import HomePage from './HomePage.react'
import Landing from '../landing/LandingPage.react'

class HomeRouteWrapper extends Component {
	render() {
		return (
			<Fragment>
				{localStorage.getItem('token') ? <HomePage /> : <Landing />}
			</Fragment>
		)
	}
}

export default HomeRouteWrapper
