import React, { Component } from 'react'
import API from '../../utils/API'

import { Page, Grid, Card, Button, List, Dropdown,  } from 'tabler-react'

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
							:  <h1>Driver's Dashboard</h1>
					}
				>

					<Grid.Col md={12}>
						
						<Grid.Row cards deck>
							<Grid.Col md={6}>
								<Card>
									<Card.Header>
										<h4> Today's Journeys... </h4>
									</Card.Header>
{/* 
									<Card.Body>
										6:30am || City - North Shore 
										<Dropdown
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
									</Card.Body>

									<Card.Body>
										7:00am || City - North Shore 
										<Dropdown
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
									</Card.Body> */}

									
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

									

									<Card.Footer>
										Safe Travels!
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
