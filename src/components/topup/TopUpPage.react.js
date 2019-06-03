import React, { Component } from 'react'
import SiteWrapper from '../../SiteWrapper.react'
import API from '../../utils/API'
import {
	Grid,
	Button,
	Card,
	Dropdown,
	Form as TablerForm,
	Page
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
		API.get('/profile/')
			.then(res => {
				this.setState({ isFetching: true })
				this.setState({ user: res.data })
			})
			.then(this.setState({ isFetching: false }))
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

		const client = {
			sandbox:
				'AYCKfuONytEMj8apXJCgd-rGgBHBZdrak8wQ_ACZ3XFfbIYzEY0lAQ67a11crVQozXS3XL2PY3SdLW0k',
			production: '___'
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
											{!this.state.isFetching
												? 'Loading....'
												: '$' + this.state.user.balance}
										</center>
									</h1>
								}
								footer="Click PayPal Checkout Button to Top Up"
							/>

							<Button.List>
								<center>
									<PaypalExpressBtn
										env={'sandbox'}
										client={client}
										currency={'NZD'}
										total={5}
										onError={onError}
										onSuccess={onSuccess}
										onCancel={onCancel}
									/>
								</center>
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
