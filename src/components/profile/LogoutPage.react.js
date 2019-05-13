import React, { Component } from 'react'

export default class LogoutdPage extends Component {
	logout() {
		localStorage.clear()
		window.location.href = '/'
	}

	render() {
		return (
			<div>
				<a href="/" onClick={this.logout()}>
					LOGOUT
				</a>
			</div>
		)
	}
}
