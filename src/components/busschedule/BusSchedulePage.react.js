import React, { Component } from 'react'

import { Card, Grid, Page, Table, Dimmer } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import API from '../../utils/API'
import moment from 'moment'

export default class BusSchedulePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			trips: [],
			filteredTrips: [],
			isFetching: true,
			routes: []
		}
		this.onRouteSelect = this.onRouteSelect.bind(this)
	}

	// Fetch Trip Data
	componentDidMount() {
		if (localStorage.getItem('token')) {
			API.get('/trips')
				.then(res => {
					this.setState({
						trips: res.data,
						filteredTrips: [],
						isFetching: false
					})
					this.generateDirections()
				})
				.catch(err => {
					console.log(err)
					this.setState({ isFetching: false })
				})
		} else {
			this.props.history.push('/login')
		}
	}

	// Raw Time (00:00:00) to 12hr format
	convertTime(time) {
		return new Date('1970-01-01T' + time + 'Z').toLocaleTimeString(
			{},
			{ timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
		)
	}

	// Adds Trip Name to Filter Array
	generateDirections() {
		this.state.trips.map(trip => {
			if (this.state.routes.indexOf(trip.name) < 0) {
				this.setState(prevState => ({
					routes: [...prevState.routes, trip.name]
				}))
			}
		})
		// Show a Default Route Filter
		this.setState({
			filteredTrips: this.state.trips.filter(
				trip => trip.name == this.state.routes[0]
			)
		})
	}

	// Filter Route Selection
	onRouteSelect(selection) {
		this.setState({
			filteredTrips: this.state.trips.filter(
				trip => trip.name == selection.value
			)
		})
	}

	// Trip Stop Overview on Click
	tripDetails = trip => {
		let stopInfo = `Route: ${trip.name} ($${trip.fare})\n---\n`
		trip.stops.map(
			stop =>
				(stopInfo += `${stop.stop.name}: Arrival: ${
					stop.arrival_time
				}, Departure: ${stop.departure_time}\n---\n`)
		)
		alert(stopInfo)
	}

	render() {
		const busTimeTable = trips => {
			return (
				<Dimmer active={this.state.isFetching} loader>
					{trips.length < 1 ? (
						<p>We were unable to retrieve trips from the server.</p>
					) : (
						<Table responsive>
							<Table.Header>
								<Table.ColHeader>Name</Table.ColHeader>
								<Table.ColHeader>Departure</Table.ColHeader>
								<Table.ColHeader>Arrival</Table.ColHeader>
								<Table.ColHeader>Fare</Table.ColHeader>
							</Table.Header>
							<Table.Body>
								{trips.map(trip => {
									var departureTime = this.convertTime(
										trip.stops[0].departure_time
									)

									var curr_time = moment(new Date(), 'hh:mm A')
									let dept_time = moment(departureTime, 'hh:mm A')

									if (dept_time.isAfter(curr_time)) {
										return (
											<Table.Row
												key={trip.id}
												onClick={this.tripDetails.bind(this, trip)}
											>
												<Table.Col>{trip.name}</Table.Col>
												<Table.Col>
													{this.convertTime(trip.stops[0].departure_time)}
												</Table.Col>
												<Table.Col>
													{this.convertTime(trip.stops[0].arrival_time)}
												</Table.Col>
												<Table.Col>${trip.fare}</Table.Col>
											</Table.Row>
										)
									}

									// TODO: Add information if no more buses are running past this time.
								})}
							</Table.Body>
						</Table>
					)}
				</Dimmer>
			)
		}

		if (!this.props.mini) {
			return (
				<SiteWrapper>
					<Page.Content>
						<Grid.Col md={12}>
							<Card statusColor="purple">
								<Card.Header>
									<Card.Title>Bus Schedule</Card.Title>
									<Card.Options>
										<Dropdown
											options={this.state.routes}
											onChange={this.onRouteSelect}
											value={this.state.routes[0]}
											placeholder="Select a Route"
										/>
									</Card.Options>
								</Card.Header>
								<Card.Body>{busTimeTable(this.state.filteredTrips)}</Card.Body>
							</Card>
						</Grid.Col>
					</Page.Content>
				</SiteWrapper>
			)
		} else {
			return (
				<Card statusColor="purple">
					<Card.Header>
						<Card.Title>Bus Schedule</Card.Title>
						<Card.Options>
							<Dropdown
								options={this.state.routes}
								onChange={this.onRouteSelect}
								value={this.state.routes[0]}
								placeholder="Select a Route"
							/>
						</Card.Options>
					</Card.Header>
					<Card.Body>{busTimeTable(this.state.filteredTrips)}</Card.Body>
				</Card>
			)
		}
	}
}
