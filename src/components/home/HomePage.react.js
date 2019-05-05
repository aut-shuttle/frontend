import React, { Component } from 'react'
import API from '../../utils/API'

import { Page, Grid, Card, Icon, Alert } from 'tabler-react'

import SiteWrapper from '../../SiteWrapper.react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { first_name: '', balance: '' }
		}
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
			API.get('/profile/')
				.then(res => {
					this.setState({ isFetching: true })
					this.setState({ user: res.data })
					this.setState({ isFetching: false })
				})
				.catch(err => {
					console.log(err)
				})
		} else {
			this.props.history.push('/login')
		}
	}
	componentDidCatch(error, info) {
		console.log(error, info)
	}

	render() {
		return (
			<SiteWrapper>
				<Page.Content
					title={
						this.state.isFetching
							? 'Loading'
							: 'Welcome, ' + this.state.user.first_name
					}
				>
					<Grid.Col md={12}>
						{console.log('email', this.state.user.email_verified)}
						{this.state.user.email_verified === 0 && (
							<Alert type="info" icon="info" isDismissible>
								Hi {this.state.user.first_name}, looks like you are new around
								here. Please verify your email using the link we sent you.
							</Alert>
						)}
						<Grid.Row cards deck>
							<Grid.Col md={6}>
								<Card>
									<Card.Status color="blue" />
									<Card.Header>
										<Card.Title>Current Balance</Card.Title>
									</Card.Header>
									<Card.Body>
										<h1>
											<center>${this.state.user.balance}</center>
										</h1>
									</Card.Body>
									<Card.Footer>
										<Icon prefix="fe" name="info" /> Approx{' '}
										{(this.state.user.balance / 15.5).toFixed(0)} trips
									</Card.Footer>
								</Card>
							</Grid.Col>
							<Grid.Col md={6}>
								<a
									style={{ cursor: 'pointer' }}
									onClick={() => {
										this.props.history.push('/topup')
									}}
								>
									<Card>
										<Card.Status color="blue" />
										<Card.Header>
											<Card.Title>Top Up Account</Card.Title>
										</Card.Header>
										<Card.Body>
											{<center>Click here to Top Up your account</center>}
										</Card.Body>
									</Card>
								</a>
							</Grid.Col>
						</Grid.Row>
						<Grid.Row>
							<Grid.Col md={12}>
								<a
									style={{ cursor: 'pointer' }}
									onClick={() => {
										this.props.history.push('/')
									}}
								>
									<Card>
										<Card.Status color="blue" />
										<Card.Header>
											<Card.Title>Tag On!</Card.Title>
										</Card.Header>
										<Card.Body>
											{
												<center
													onClick={() => {
														let newBalance = parseFloat(
															parseFloat(this.state.user.balance) +
																parseFloat(-15.5)
														)
														if (newBalance >= 0) {
															this.setState(
																state => (
																	(state.user.balance = newBalance.toFixed(2)),
																	state
																)
															)
														} else {
															alert(
																"Please top up! You don't have enough funds to tag on."
															)
														}
													}}
												>
													Click here to Tag On!
												</center>
											}
										</Card.Body>
									</Card>
								</a>
							</Grid.Col>
						</Grid.Row>
					</Grid.Col>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
