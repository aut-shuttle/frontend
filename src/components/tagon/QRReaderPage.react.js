import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Card, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import QrReader from 'react-qr-reader'

export default class QRReaderPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			delay: 100,
			passenger: '',
			bus: []
		}

		this.handleScan = this.handleScan.bind(this)
	}

	addPassengerToBus = () => {
		this.setState(state => {
			const bus = state.bus.concat(state.passenger)

			return {
				bus,
				passenger: ''
			}
		})
	}

	handleScan(data) {
		console.log(this.state.bus)
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
										{
											(!this.state.passenger
												? 'Scan a passenger to add to bus'
												: 'Add ' + this.state.passenger + ' to the Bus!')
										}
									</Button>
									<Button block color="green" onClick={() => {}}>
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
