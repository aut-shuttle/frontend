import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'

class ConfirmEmail extends Component {
	constructor(props) {
		super(props)
		this.state = { message: 'Activating your account...' }
	}

	componentDidMount() {
		// Get Verification ID from URL
		const verification = {
			id: this.props.match.params.id
		}

		// Call Database to Verify
		API.post('/verify', verification)
			.then(result => {
				// Redirect on Success
				this.setState({ message: 'Account Activated! Redirecting to login...' })
				this.props.history.push('/login')
			})
			.catch(error => {
				// Already Done? or Not Found?
				if (error.response && error.response.status == 404) {
					this.setState({
						message:
							'Unable to Activate User. You only have to confirm it once.'
					})
					this.props.history.push('/login')
				}
				this.setState({ message: 'Unable to Activate User.' })
			})
	}

	render() {
		return (
			<Page.Content>
				<h4>{this.state.message}</h4>
			</Page.Content>
		)
	}
}

export default ConfirmEmail
