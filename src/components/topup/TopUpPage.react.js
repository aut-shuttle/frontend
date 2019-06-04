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

	handleTopupAmountChange = amount => {
		this.setState({ selectedTopupAmount: amount })
	}

	topUp = payment => {
		console.log('Successful payment!', payment)

		const topup = {
			transaction_id: payment.paymentID,
			amount: this.state.selectedTopupAmount
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
		const onError = error =>
			console.log('Erroneous payment OR failed to load script!', error)

		const onCancel = data => console.log('Cancelled payment!', data)

		const client = {
			sandbox:
				'AYCKfuONytEMj8apXJCgd-rGgBHBZdrak8wQ_ACZ3XFfbIYzEY0lAQ67a11crVQozXS3XL2PY3SdLW0k',
			production: '___'
		}
		let payPalButton
		var balance = Number(this.state.user.balance)
		var topup = Number(this.state.selectedTopupAmount)
		if (balance + topup > 200) {
			payPalButton = (
				<Alert type="info" icon="info">
					Your balance cannot exceed $200
				</Alert>
			)
		} else {
			payPalButton = (
				<PaypalExpressBtn
					env={'sandbox'}
					client={client}
					currency={'NZD'}
					total={this.state.selectedTopupAmount}
					onError={onError}
					onSuccess={payment => {
						this.topUp(payment)
					}}
					onCancel={onCancel}
				/>
			)
		}

		var validValues = ['5', '10', '20', '50', '80']
		var dropDownValues = []

		for (var i = 0; i < validValues.length; i++) {
			var currentNumber = validValues[i]
			dropDownValues.push(
				<Dropdown.Item
					value={currentNumber}
					onClick={this.handleTopupAmountChange.bind(this, currentNumber)}
				/>
			)
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
									<center>
										Select amount from TopUp then click PayPal Button
									</center>
								}
							/>

							<Button.List>
								<center>{payPalButton}</center>

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
									{dropDownValues}
								</Button.Dropdown>

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
