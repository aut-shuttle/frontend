import React, { Component } from 'react'
import API from '../../utils/API'

import { Page, Grid, Card } from 'tabler-react'

import SiteWrapper from './../../SiteWrapper.react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { first_name: '' }
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
					window.location.reload()
					//totally gash work around, triggers reload to get profile correctly, needs more fault finding
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
					<Grid.Row cards deck>
						<Grid.Col md={3}>
							<Card
								statusColor="blue"
								title="Current Balance"
								body={
									<h1>
										<center>${this.state.user.balance}</center>
									</h1>
								}
							/>
						</Grid.Col>
						<Grid.Col md={3}>
							<a
								style={{ cursor: 'pointer' }}
								onClick={() => {
									this.props.history.push('/')
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
						<Grid.Col md={6}>
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
										{<center>Click here to Tag On!</center>}
									</Card.Body>
								</Card>
							</a>
						</Grid.Col>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
