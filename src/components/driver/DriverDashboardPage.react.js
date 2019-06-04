import React, { Component } from 'react'
import API from '../../utils/API'

import { Page, Grid, Card, Button, List, Dropdown,  } from 'tabler-react'

import SiteWrapper from '../../SiteWrapper.react'

export default class DriverDashboard extends Component {
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
							:  <h1>Driver's Dashboard</h1>
					}
				>
					<Grid.Col md={12}>
						
						<Grid.Row cards deck>
							
							<Grid.Col md={6}>
								<Card
								statusColor = "blue"
								>
									<Card.Header
									>
										
										<h4> Your Journeys... </h4>
									</Card.Header>
									<List.Group>
										
										<List.GroupItem action > <h5>6:00am </h5> North Shore - City </List.GroupItem>
										<List.GroupItem action > <h5>6:20am </h5> City - South </List.GroupItem>
										<List.GroupItem action > <h5>6:50am </h5> South - City </List.GroupItem>
										<List.GroupItem action > <h5>7:10am </h5> City - North Shore </List.GroupItem>
										<List.GroupItem action > <h5>7:30am </h5> North Shore - City </List.GroupItem>
										<List.GroupItem action > <h5>7:50am </h5> City - South </List.GroupItem>
										<List.GroupItem action > <h5>8:10am </h5> South - City </List.GroupItem>
										<List.GroupItem action > <h5>8:30am </h5> City - North Shore </List.GroupItem>
										<Dropdown
										align = "center"
										type="StartTrip"
										color="secondary"
										arrow
										icon="bus"
										triggerContent="Start Trip"
										itemsObject={[
											{
											value: "Scan Passengers ",
											icon: "maximize",
											},
											{
											value: "View Passengers",
											icon: "users",
											},
										]}
										/>
									</List.Group>
									
								</Card>
								
							</Grid.Col>
							<Grid.Col md={3} >
								<a>
								<Card 
								statusColor = "yellow"
								title={<h4>Total Journeys Today:</h4>}
								body ={<center><h3>15</h3></center>}
								/>
								</a>
							</Grid.Col> 
							<Grid.Col md ={3}>
								<a>
								<Card
								statusColor = "green"
								title={<h4>Fun Fact:</h4>}
								body={'I have been driving busses for 15 years!'}
								
								/>
								</a>
							</Grid.Col>
		
						</Grid.Row>
						<Grid.Row  md ={6}>
							<Grid.Col md={4}>
									<a>
									<Card
									statusColor = "orange">
										<Card.Header>
											<h4>Details</h4>
										</Card.Header>
										<List.Group>
											<List.GroupItem>Plate Number: SDP602</List.GroupItem>
											<List.GroupItem>Registration Expiry: 5 October 2019</List.GroupItem>
										</List.Group>
									</Card>
									</a>
									
							</Grid.Col>
						</Grid.Row>
					</Grid.Col>
					<Card.Footer>
						Safe Travels!
					</Card.Footer>
				</Page.Content>
			</SiteWrapper>
		)
	}
}