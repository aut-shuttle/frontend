import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Card, Table, Icon, Button, Alert } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import QrReader from 'react-qr-reader'

export default class QRReaderPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tagonmessage: '',
			delay: 500,
			passenger: {},
			bus: []
		}

		this.handleScan = this.handleScan.bind(this)
	}

	//! IF USER PRESENTED AN OLD QR CODE WITH MORE FUNDS THAN CURRENT, TAG-ON WORKS!
	boardBus() {
		if (this.state.bus.length > 0) {
			this.setState({ tagonmessage: 'Bus Trip Started! - Passengers Charged.' })

			for (var passenger of this.state.bus) {
				var boardingInfo = {
					user_id: passenger.userId,
					trip_id: 1, //TODO: Make Dynamic, Not Hardcoded.
					timestamp: new Date()
				}
				API.post('/boarding', boardingInfo).then(res => console.log(res))
			}
		} else {
			this.setState({ tagonmessage: 'Bus Left Empty!' })
		}
	}

	addPassengerToBus = passenger => {
		if (!passenger) {
			this.setState({ tagonmessage: 'Scan QR Code First!' })
		} else {
			// TODO: Make Dynamic (this fare), Not Hardcoded.
			if (passenger.balance < 6.0) {
				this.setState({ tagonmessage: 'Balance Low, Passenger not added!' })
			} else {
				this.setState({
					tagonmessage: `${passenger.first_name} ${
						passenger.last_name
					} tagged on successfully.`,
					bus: [...this.state.bus, passenger],
					passenger: {}
				})
			}
		}
	}

	isAlreadyOnBus = user => {
		return this.state.bus.some(passenger => user.userId === passenger.userId)
	}

	handleScan(data) {
		if (data !== null) {
			var scanData = data.split(',')
			if (scanData.length === 4) {
				let passenger = {
					first_name: scanData[0],
					last_name: scanData[1],
					balance: scanData[2],
					userId: scanData[3]
				}
				console.log(passenger)
				this.setState({ passenger })
			}
		}
	}

	removePeople(e) {
		let filteredArray = this.state.bus.filter(item => item.userId !== e.userId)
		this.setState({ bus: filteredArray })
	}

	render() {
		const previewStyle = {
			height: 200,
			width: 200
		}

		const tagonAlert = () => {
			return (
				<Alert type="info" icon="info">
					{this.state.tagonmessage || 'You may now scan passengers.'}
				</Alert>
			)
		}

		return (
			<SiteWrapper>
				<Page.Content>
					<Grid.Row>
						<Grid.Col>
							<Card
								body={
									<center>
										<QrReader
											delay={this.state.delay}
											style={previewStyle}
											onError={this.handleError}
											onScan={this.handleScan}
										/>
									</center>
								}
							/>
							<Button.List>
								{tagonAlert()}
								<Button
									block
									color="yellow"
									onClick={() => {
										{
											let passenger = this.state.passenger

											// Is the passenger already on this bus?
											if (this.isAlreadyOnBus(passenger)) {
												this.setState({
													tagonmessage: 'This passenger has already tagged on.'
												})
											} else {
												this.addPassengerToBus(passenger)
											}
										}
									}}
									disabled={
										!Object.keys(this.state.passenger).length ||
										this.isAlreadyOnBus(this.state.passenger)
									}
								>
									{!Object.keys(this.state.passenger).length
										? 'Scan Passengers Now'
										: this.isAlreadyOnBus(this.state.passenger)
										? 'Already Tagged On'
										: 'Add ' +
										  this.state.passenger.first_name +
										  ' ' +
										  this.state.passenger.last_name +
										  ' to this Bus!'}
								</Button>
								<Button
									block
									color="green"
									onClick={() => {
										this.boardBus()
									}}
								>
									{'Start This Trip Now'}
								</Button>
								<Button
									block
									color="blue"
									onClick={() => {
										this.props.history.push('/')
									}}
								>
									Back to Home
								</Button>
							</Button.List>
						</Grid.Col>
						<Grid.Col>
							<Card>
								<Card.Status color="blue" />
								<Card.Header>
									<Card.Title>My Passengers</Card.Title>
								</Card.Header>
								<Card.Body>
									<Table responsive>
										<Table.ColHeader>#</Table.ColHeader>
										<Table.ColHeader>Passenger Name</Table.ColHeader>
										<Table.ColHeader>Remove</Table.ColHeader>
										<Table.Body>
											{this.state.bus.map(passenger => {
												return (
													<Table.Row key={passenger.id}>
														<Table.Col>
															{this.state.bus.indexOf(passenger) + 1}
														</Table.Col>
														<Table.Col>
															<b>
																{passenger.first_name +
																	' ' +
																	passenger.last_name}
															</b>
														</Table.Col>
														<Table.Col>
															<Button
																color="red"
																onClick={() => {
																	if (
																		window.confirm(
																			`I confirm that ${passenger.first_name} ${
																				passenger.last_name
																			} is no longer on this bus and that I am not giving them a free ride.`
																		)
																	) {
																		this.removePeople(passenger)
																	}
																}}
															>
																<Icon prefix="fe" name="trash-2" />
															</Button>
														</Table.Col>
													</Table.Row>
												)
											})}
										</Table.Body>
									</Table>
								</Card.Body>
								{!this.state.isFetching && (
									<Card.Footer>
										<Icon prefix="fe" name="info" /> Passengers will be charged
										when this trip starts.
									</Card.Footer>
								)}
							</Card>
						</Grid.Col>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
