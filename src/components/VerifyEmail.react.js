import React, { Component } from 'react'
import API from '../utils/API'

class VerifyEmail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			code: '',
			message: ''
		}
	}

	async verify() {
		console.log(`Verifying ${this.props.match.params.id}`)
		await API.post('/verify', {
			id: this.props.match.params.id
		}).then(result => {
			console.log(result)
			this.setState({
				code: result.stat,
				message: result.message || ''
			})
		})
		/* API.post('/login', loginUser)
			.then(result => {
				localStorage.setItem('token', result.data.token)
				this.props.history.push('/')
			})
			.catch(error => {
				if (error.response.status === 409) {
					this.setState({
						message: 'Login failed. Username or password not match'
					})
				}
				if (error.response.status === 404) {
					this.setState({
						message: 'User Not Found'
					})
				}
			}) */
	}

	componentDidMount() {
		this.verify()
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.code} {this.state.message}
				</h1>
			</div>
		)
	}
}

export default VerifyEmail
