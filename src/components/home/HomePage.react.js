import React, { Component } from 'react'
import API from '../../utils/API'

import { Page, Grid, Card } from 'tabler-react'

import SiteWrapper from './../../SiteWrapper.react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: ''
		}
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
			API.get('/profile/').then(res => {
				this.setState({ user: res.data })
			})
		} else {
			this.props.history.push('/login')
		}
	}

	render() {
		return (
			<SiteWrapper>
				<Page.Content title={'Welcome, ' + this.state.user.first_name}>
					<Grid.Row cards deck>
						<Grid.Col md={3}>
							<Card
								statusColor="blue"
								title="Current Balance"
								body={<center>${this.state.user.balance}</center>}
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
