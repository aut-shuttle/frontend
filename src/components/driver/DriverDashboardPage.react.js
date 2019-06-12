import React, { Component } from 'react'
import API from '../../utils/API'

import { Page, Grid, Card, Button, List, Dropdown } from 'tabler-react'

import SiteWrapper from '../../SiteWrapper.react'

export default class DriverDashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: true,
			user: { first_name: '', last_name: '' }
		}
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
			API.get('/profile/')
				.then(res => {
					this.setState({
						user: res.data,
						isFetching: false
					})
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
				<Page.Content title={<h1>Driver's Dashboard</h1>}>
					<Grid.Col md={12}>
						<Grid.Row cards deck>
							<Grid.Col md={6}>
								<Card statusColor="blue">
									<Card.Header>
										<h4>Your Journeys...</h4>
									</Card.Header>
									<List.Group>
										<List.GroupItem action>
											<h5>10:30 </h5> City Campus -> North Campus
										</List.GroupItem>
										<List.GroupItem action>
											<h5>10:30 </h5> City Campus -> North Campus
										</List.GroupItem>
										<Dropdown
											align="center"
											type="StartTrip"
											color="secondary"
											arrow
											icon="bus"
											triggerContent="Start Trip"
											itemsObject={[
												{
													value: 'Scan Passengers',
													icon: 'maximize'
												},
												{
													value: 'View Passengers',
													icon: 'users'
												}
											]}
										/>
									</List.Group>
								</Card>
							</Grid.Col>
							<Grid.Col md={3}>
								<a>
									<Card
										statusColor="yellow"
										title={<h4>Total Journeys Today:</h4>}
										body={
											<center>
												<h3>0</h3>
											</center>
										}
									/>
								</a>
							</Grid.Col>
							<Grid.Col md={3}>
								<a>
									<Card
										statusColor="green"
										title={<h4>Fun Fact:</h4>}
										body={'I have been driving busses for 15 years!'}
									/>
								</a>
							</Grid.Col>
						</Grid.Row>
						<Grid.Row md={6}>
							<Grid.Col md={4}>
								<a>
									<Card statusColor="orange">
										<Card.Header>
											<h4>Details</h4>
										</Card.Header>
										<List.Group>
											<List.GroupItem>Plate Number: SDP602</List.GroupItem>
											<List.GroupItem>
												Registration Expiry: 5 October 2019
											</List.GroupItem>
										</List.Group>
									</Card>
								</a>
							</Grid.Col>
						</Grid.Row>
					</Grid.Col>
					<Card.Footer>Safe Travels!</Card.Footer>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
