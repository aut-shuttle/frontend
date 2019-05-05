import React, { Component } from 'react'
import SiteWrapper from '../../SiteWrapper.react'
import API from '../../utils/API'
import {
	Grid,
	Button,
	Card,
	Dropdown,
	Form as TablerForm,
	Page,
	Icon
} from 'tabler-react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

export default class TopUpPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: false,
			message: '',
			user: {
				balance: ''
			},
			selectedTopupAmount: ''
		}
	}

	componentDidMount() {
		API.get('/profile/').then(res => {
			this.setState({ isFetching: true })
			this.setState({ user: res.data })
			this.setState({ isFetching: false })
		})
	}

	handleChange = async () => {
		const state = this.state
		this.setState(state)
	}

	handleTopupAmountChange = amount => {
		this.setState({ selectedTopupAmount: amount })
	}

	render() {
		const onSuccess = payment => {
			console.log('Successful payment!', payment)

			const topup = {
				transaction_id: payment.paymentID,
				amount: 5 // TODO: Link amount to dropdown
			}

			API.post('/payments', topup)
				.then(res => {
					this.props.history.push('/')
				})
				.catch(error => {
					console.log(error)
				})
		}

		const onError = error =>
			console.log('Erroneous payment OR failed to load script!', error)

		const onCancel = data => console.log('Cancelled payment!', data)

		const validTopupAmounts = [5, 10, 20, 50]
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
										<center>${this.state.user.balance}</center>
									</h1>
								}
							/>

							<Button.List>
								<Button.Dropdown
									block
									value={'TOP UP ' + this.state.selectedTopupAmount}
									icon="dollar-sign"
									color="green"
								>
									{validTopupAmounts.map((amount, key) => {
										let newBalance = parseFloat(
											parseFloat(this.state.user.balance) + parseFloat(amount)
										)
										if (newBalance <= 200) {
											return (
												<Dropdown.Item key={amount}>${amount}</Dropdown.Item>
											)
										}
									})}
								</Button.Dropdown>
								<center>
									<PaypalExpressBtn
										env={process.env.PAYPAL_ENV}
										client={
											process.env.PAYPAL_ENV === 'production'
												? process.env.PAYPAL_CLIENT_ID_SANDBOX
												: process.env.PAYPAL_CLIENT_ID_PRODUCTION
										}
										currency={'NZD'}
										total={5}
										onError={onError}
										onSuccess={onSuccess}
										onCancel={onCancel}
									/>
								</center>
								<Button block color="blue" icon="plus-circle">
									{' '}
									Automatic Payment{' '}
								</Button>
								<Button block color="blue" icon="settings">
									{' '}
									Payment Settings
								</Button>
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
