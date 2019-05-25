import React, { Component } from 'react'
import API from '../../utils/API'
import { Page, Grid, Card, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'
import QRCode from 'qrcode.react'

export default class TagOnPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { first_name: '', last_name: '', balance: '', id: '' }
		}
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
			API.get('/profile/')
				.then(res => {
					this.setState({ isFetching: true })
					this.setState({ user: res.data })
				})
				.then(this.setState({ isFetching: false }))
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

	userId() {
		return this.state.user.id
	}

	render() {
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
													<QRCode
														value={
															!this.state.isFetching
																? 'Loading....'
																: this.state.user.first_name +
																  ' ' +
																  this.state.user.last_name +
																  ' balance: $' +
																  this.state.user.balance +
																  ' id:' +
																  this.state.user.id
														}
													/>
												</center>
											}
										/>
									</Grid.Col>
								</Grid.Row>
								<Card
									body={
										<center>
											{!this.state.isFetching
												? 'Loading....'
												: 'QR Code Generated'}
										</center>
									}
								/>
								<Button.List>
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
