import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Card, Icon, Alert } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import QRCode from 'qrcode.react'
import {Button} from 'tabler-react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { first_name: '', balance: ''},
			showMe: false
		}
	}


	componentDidMount() {
		if (localStorage.getItem('token')) {
			API.get('/profile/')
				.then(res => {
					this.setState({ isFetching: true })
					this.setState({ user: res.data })
				})
				.then(this.setState({ isFetching: false }))
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
		const emailUnverifiedAlert = () => {
			return (
				this.state.user.email_verified === 0 && (
					<Alert type="info" icon="info" isDismissible>
						Hi {this.state.user.first_name}, looks like you are new around here.
						Please verify your email using the link we sent you.
					</Alert>
				)
			)
		}

		return (
			<SiteWrapper>
				<Page.Content
					title={
						!this.state.isFetching
							? 'Loading...'
							: 'Welcome, ' + this.state.user.first_name
					}
				>
					<Grid.Col md={12}>
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
											<center>
												{!this.state.isFetching
													? 'Loading....'
													: '$' + this.state.user.balance}
											</center>
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
											{<center><h1>Click here to Top Up</h1></center>}
										</Card.Body>
										<Card.Footer>
											<Icon prefix="fe" name="info" />
										</Card.Footer>
									</Card>
								</a>
							</Grid.Col>
						</Grid.Row>
						<Grid.Row>
							<Grid.Col md={12}>
								<Card>
									<Card.Status color="blue" />
									<Card.Header>
										<Card.Title>Tag On!</Card.Title>
									</Card.Header>
									<Card.Body>
										{
											<center>
												<QRCode
													value={
														!this.state.isFetching
															? 'Loading....'
															: this.state.user.first_name +
															  ',' +
															  this.state.user.last_name +
															  ',' +
															  this.state.user.balance +
															  ',' +
															  this.state.user.id
													}
												/>
											</center>
										}
									</Card.Body>
									<Card.Footer>
										<Icon prefix="fe" name="info" /> Scan this Code to Tag On!
									</Card.Footer>
								</Card>
							</Grid.Col>
						</Grid.Row>
					</Grid.Col>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
