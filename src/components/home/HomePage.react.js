import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Card, Icon, Button, Dimmer, Alert } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import QRCode from 'qrcode.react'
import BusSchedule from '../busschedule/BusSchedulePage.react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: true,
			user: { first_name: '', balance: '' }
		}
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
			API.get('/profile/')
				.then(res => {
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
		const emailUnverifiedAlert = () => {
			return (
				this.state.user.email_verified === false && (
					<Grid.Col md={12}>
						<Alert type="info" icon="info" isDismissible>
							Hi {this.state.user.first_name}, looks like you are new around
							here. Please verify your email using the link we sent you.
						</Alert>
					</Grid.Col>
				)
			)
		}

		return (
			<SiteWrapper>
				<Page.Content
					title={
						this.state.isFetching
							? 'Welcome'
							: 'Welcome, ' + this.state.user.first_name
					}
				>
					{emailUnverifiedAlert()}

					<Grid.Row cards>
						{/* User Balance */}
						<Grid.Col md={4}>
							<Card>
								<Card.Status
									color={
										!this.state.isFetching && this.state.user.balance < 10
											? 'red'
											: 'blue'
									}
								/>
								<Card.Header>
									<Card.Title>My Balance</Card.Title>
									<Card.Options>
										<Button
											color="secondary"
											onClick={() => this.props.history.push('/topup')}
										>
											Top Up
										</Button>
									</Card.Options>
								</Card.Header>
								<Card.Body>
									<Dimmer active={this.state.isFetching} loader>
										{this.state.user.balance ? (
											<h1>
												<center>{'$' + this.state.user.balance}</center>
											</h1>
										) : (
											<React.Fragment />
										)}
									</Dimmer>
								</Card.Body>
								{!this.state.isFetching && (
									<Card.Footer>
										<Icon prefix="fe" name="info" />{' '}
										{`Approx. ${(this.state.user.balance / 3.3).toFixed(
											0
										)} trips`}
									</Card.Footer>
								)}
							</Card>
						</Grid.Col>

						{/* Scan-on Code */}
						<Grid.Col md={4}>
							<Card>
								<Card.Status color="blue" />
								<Card.Header>
									<Card.Title>My Scan-On Code</Card.Title>
								</Card.Header>
								<Card.Body>
									<center>
										<Dimmer active={this.state.isFetching} loader />
										{!this.state.isFetching ? (
											<QRCode
												value={
													this.state.isFetching
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
										) : (
											<React.Fragment />
										)}
									</center>
								</Card.Body>
								{!this.state.isFetching && (
									<Card.Footer>
										<Icon prefix="fe" name="info" /> Scan this Code to Tag On!
									</Card.Footer>
								)}
							</Card>
						</Grid.Col>
					</Grid.Row>

					{/* Bus Schedule */}
					<Grid.Row>
						<Grid.Col md={12}>
							<BusSchedule mini={true} />
						</Grid.Col>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
