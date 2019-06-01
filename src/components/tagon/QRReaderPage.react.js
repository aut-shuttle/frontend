import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Card, Button, Alert } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import QrReader from 'react-qr-reader'

export default class QRReaderPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tagonmessage: '',
			delay: 500,
			passenger: '',
			bus: []
		}

		this.handleScan = this.handleScan.bind(this)
	}

	boardBus() {
		console.log(this.state.bus)
		if (this.state.bus.length > 0) {
			this.setState({ tagonmessage: 'Bus Trip Started!!' })
			for (var person of this.state.bus) {
				var singleUser = person.split(',')
				var boardUser = {
					user_id: singleUser[3],
					trip_id: 1,
					timestamp: new Date()
				}
				API.post('/boarding', boardUser).then(result => {
					console.log(result)
				})
			}
		} else {
			this.setState({ tagonmessage: 'Tag on people before first!' })
		}
	}

	addPassengerToBus = () => {
		if (!this.state.passenger) {
			this.setState({ tagonmessage: 'Scan QR Code First!' })
		} else {
			var singleUser = this.state.passenger.split(',')
			if (singleUser.length == 4) {
				if (singleUser[2] < 6.0) {
					this.setState({ tagonmessage: 'Balance Low, Passenger not added!' })
				} else {
					this.state.tagonmessage =
						singleUser[0] + '  ' + singleUser[1] + ' tagged on successfully'
					this.setState(state => {
						const bus = state.bus.concat(state.passenger)

						return {
							bus,
							passenger: ''
						}
					})
				}
			} else {
				this.setState({ tagonmessage: 'Invalid QR Code Scanned' })
			}
		}
	}

	handleScan(data) {
		if (data !== null) {
			this.setState({
				passenger: data
			})
		}
	}
	handleError(err) {
		console.error(err)
	}
	render() {
		const previewStyle = {
			height: 200,
			width: 200
		}

		return (
			<SiteWrapper>
				<Page.Content>
					<Grid.Row>
						<Grid.Col width={20}>
							<Grid.Col md={10} lg={6}>
								<Grid.Row cards deck>
									<Grid.Col md={20}>
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
									</Grid.Col>
								</Grid.Row>
								<Button.List>
									<Alert type="info">{this.state.tagonmessage}</Alert>
									<Button
										block
										color="yellow"
										onClick={() => {
											{
												if (!this.state.bus.includes(this.state.passenger)) {
													this.addPassengerToBus()
												}
											}
										}}
									>
										{!this.state.passenger
											? 'Scan a passenger to add to bus'
											: 'Add ' +
											  this.state.passenger.split(',')[0] +
											  ' ' +
											  this.state.passenger.split(',')[1] +
											  ' to the Bus!'}
									</Button>
									<Button
										block
										color="green"
										onClick={() => {
											this.boardBus()
										}}
									>
										{'Click here when ready to leave!'}
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
						</Grid.Col>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
