import React, { Component } from 'react'
import SiteWrapper from '../../SiteWrapper.react'
import API from '../../utils/API'
import {
	Grid,
	Button,
	Card,
	Alert,
	Dropdown,
	Form as TablerForm,
	Page
} from 'tabler-react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

export default class TopUpPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: true,
			message: '',
			user: {
				balance: ''
			},
			selectedTopupAmount: ''
		}
	}

	// Fetch User's Balance
	componentDidMount() {
		API.get('/profile/')
			.then(res => {
				this.setState({
					user: res.data,
					isFetching: false
				})
			})
			.catch(error => console.log(error))
	}

	// Update State when Selected Amount Changes
	handleTopupAmountChange = amount => {
		this.setState({ selectedTopupAmount: amount })
	}

	// Write Topped-up Balance to Database
	topUp = (payment, amount) => {
		console.log(`Successfully paid $${amount}.`)

		const topup = {
			transaction_id: payment.paymentID,
			amount
		}

		API.post('/payments', topup)
			.then(res => {
				this.props.history.push('/')
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		var validTopupAmounts = ['5', '10', '20', '50', '80']

		// PayPal Error
		const onError = error =>
			console.log('Erroneous payment OR failed to load script!', error)

		// PayPal Cancel
		const onCancel = data => console.log('Cancelled payment!', data)

		const renderPayPalButton = (balance, topup) => {
			let newBalance = parseFloat(parseFloat(balance) + parseFloat(topup))
			if (newBalance > 200) {
				return (
					<Alert type="info" icon="info">
						Your balance cannot exceed $200.
					</Alert>
				)
			} else {
				// PayPal Client
				const client = {
					sandbox:
						'AYCKfuONytEMj8apXJCgd-rGgBHBZdrak8wQ_ACZ3XFfbIYzEY0lAQ67a11crVQozXS3XL2PY3SdLW0k',
					production: '___'
				}
				return (
					<PaypalExpressBtn
						env={'sandbox'}
						client={client}
						currency={'NZD'}
						total={topup}
						onError={onError}
						onSuccess={payment => {
							this.topUp(payment, topup)
						}}
						onCancel={onCancel}
					/>
				)
			}
		}

		const renderTopupSelector = () => {
			if (
				this.state.isFetching ||
				parseFloat(validTopupAmounts[0]) + parseFloat(this.state.user.balance) >
					200
			) {
				return (
					<Alert type="info" icon="info">
						Your balance cannot exceed $200.
					</Alert>
				)
			} else {
				return (
					<Button.Dropdown
						block
						value={'TOP UP $' + this.state.selectedTopupAmount}
						icon="dollar-sign"
						color="green"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						toggle="true"
					>
						{validTopupAmounts.map((topup, key) => {
							let newBalance = parseFloat(
								parseFloat(this.state.user.balance) + parseFloat(topup)
							)
							if (newBalance <= 200) {
								return (
									<Dropdown.Item
										key={key}
										onClick={this.handleTopupAmountChange.bind(this, topup)}
									>
										${topup}
									</Dropdown.Item>
								)
							}
						})}
					</Button.Dropdown>
				)
			}
		}

		return (
			<SiteWrapper>
				<Page.Content>
					<Grid.Col md={5}>
						<TablerForm.FieldSet>
							<center>
								<h1>Top-Up Account</h1>
							</center>
							<Card
								statusColor="blue"
								title="Current Balance"
								body={
									<h1>
										<center>
											{this.state.isFetching
												? 'Loading...'
												: '$' + this.state.user.balance}
										</center>
									</h1>
								}
								footer={
									<center>Select your amount and proceed to PayPal.</center>
								}
							/>

							<Button.List>
								<center>
									{this.state.selectedTopupAmount &&
										renderPayPalButton(
											this.state.user.balance,
											this.state.selectedTopupAmount
										)}
								</center>

								{/* Top Up Amount Selector */}
								{renderTopupSelector()}

								{/* Back to Home Button */}
								<Button
									block
									color="yellow"
									type="Back"
									onClick={() => {
										this.props.history.push('/')
									}}
									icon="chevron-left"
								>
									Back to Home
								</Button>
							</Button.List>
						</TablerForm.FieldSet>
					</Grid.Col>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
