import React, { Component } from 'react'
import SiteWrapper from '../../SiteWrapper.react'
import API from '../../utils/API'
import {
	Grid,
	Button,
	Card,
	Dropdown,
	Form as TablerForm
} from 'tabler-react'

export default class TopUpPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: false,
			message: '',
			user: {
				balance: ''
			}
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

	render() {
		return (
			<SiteWrapper>
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
								value="TOP UP"
								icon="dollar-sign"
								color="green"
							>
								<Dropdown.Item>$5</Dropdown.Item>
								<Dropdown.Item>$10</Dropdown.Item>
								<Dropdown.Item>$20</Dropdown.Item>
								<Dropdown.Item>$50</Dropdown.Item>
							</Button.Dropdown>
							<Button block color="blue" icon="coin">
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
							>
								Back to Home
							</Button>
						</Button.List>
					</TablerForm.FieldSet>
				</Grid.Col>
			</SiteWrapper>
		)
	}
}
