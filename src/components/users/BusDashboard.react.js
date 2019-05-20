import React, { Component } from 'react'
import API from '../../utils/API'

import { Page, Grid, Card, Icon, Alert, Button } from 'tabler-react'

import SiteWrapper from '../../SiteWrapper.react'

export default class BusDashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { first_name: '', last_name: '' }
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

						<Grid.Row cards deck>
							<Grid.Col md={6}>
								<Card>
									<Card.Status color="blue" />
									<Card.Header>
										<Card.Title>Journeys for today...</Card.Title>
									</Card.Header>

									<Card.body />

									<Card.Footer>
										<Card.body>Have a safe journey!</Card.body>
									</Card.Footer>
								</Card>
							</Grid.Col>
							<Grid.Col md={6}>
								<Button
									block
									color="yellow"
									type="QR Access"
									icon="square"
									onClick={() => {
										this.props.history('/profile') //whatever the QR scanner link is (check with mike)
									}}
								>
									QR SCANNER
								</Button>
							</Grid.Col>
						</Grid.Row>
					</Grid.Col>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
