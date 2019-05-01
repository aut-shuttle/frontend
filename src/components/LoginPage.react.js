import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'
import axios from 'axios'
import API from '../utils/API'
import {
	Page,
	Grid,
	Alert,
	Form as TablerForm,
	Button,
	Card
} from 'tabler-react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: ''
		}
	}

	handleChange = async => {
		const state = this.state
		this.setState(state)
	}

	handleSubmit = async (values, { setSubmitting }) => {
		console.log(values)
		setSubmitting(true)
		const loginUser = {
			email_address: values.email,
			password: values.password
		}
		API.post('/login', loginUser)
			.then(result => {
				localStorage.setItem('token', result.data.token)
				this.props.history.push('/')
				setSubmitting(false)
			})
			.catch(error => {
				if (error.response.status === 409) {
					setSubmitting(false)
					this.setState({
						message: 'Login failed. Username or password not match'
					})
				}
				if (error.response.status === 404) {
					setSubmitting(false)
					this.setState({
						message: 'User Not Found'
					})
				}
			})
		return
	}
	render() {
		const { message } = this.state
		return (
			<Page.Content>
				<Grid.Col md={10}>
					<Grid.Row>
						<Alert type="primary">
							<Alert.Link>Welcome to the AUT Shuttle App!</Alert.Link>
						</Alert>
					</Grid.Row>
					<Grid.Row cards={true}>
						<Formik
							initialValues={{ email: '', password: '' }}
							validate={values => {
								const errors = {}

								if (!values.email) errors.email = 'Required'

								if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
										values.email
									)
								) {
									errors.email = 'You must supply a valid email address'
								}
								return errors
							}}
							// Handles our submission
							onSubmit={this.handleSubmit}
							//validate={this.handleValidate}
						>
							{props => (
								<Form>
									<Card>
										<label htmlFor="email">Email</label>
										<div>
											<TablerForm.Input
												name="email"
												type="email"
												placeholder="Enter Email"
												value={props.values.email}
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												style={{
													borderColor:
														props.errors.email && props.touched.email && 'red'
												}}
											/>
											{props.errors.email && props.touched.email && (
												<div style={{ color: 'red' }}>{props.errors.email}</div>
											)}
										</div>
										<label htmlFor="password">Password</label>
										<div>
											<TablerForm.Input
												name="password"
												type="password"
												placeholder="Enter Password"
												value={props.values.password}
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												style={{
													borderColor:
														props.errors.password &&
														props.touched.password &&
														'red'
												}}
											/>

											{props.errors.password && props.touched.password && (
												<div style={{ color: 'red' }}>
													{props.errors.password}
												</div>
											)}
										</div>
										<Button
											color="primary"
											type="submit"
											disabled={props.isSubmitting}
										>
											Submit
										</Button>
										&nbsp;
										<Button
											color="primary"
											type="reset"
											onClick={props.handleReset}
											disabled={!props.dirty || props.isSubmitting}
										>
											Reset
										</Button>
									</Card>
								</Form>
							)}
						</Formik>
					</Grid.Row>
					<Grid.Row>
						{message !== '' && (
							<Alert type="primary">
								<Alert.Link>{message}</Alert.Link>
							</Alert>
						)}
					</Grid.Row>
				</Grid.Col>
			</Page.Content>
		)
	}
}
