import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../../utils/API'
import {
	Page,
	Grid,
	Alert,
	Form as TablerForm,
	Button
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

	handleValidate = values => {
		const errors = {}
		if (!values.email) errors.email = 'Required'
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'You must supply a valid email address'
		}
		return errors
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
						message: 'Username or password are incorrect'
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
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={this.handleSubmit}
					validate={this.handleValidate}
				>
					{props => (
						<Form>
							<Grid.Col md={7}>
								<TablerForm.FieldSet>
									<Alert type="primary">
										<Alert.Link>Welcome to the AUT Shuttle App!</Alert.Link>
									</Alert>
									<TablerForm.Input
										name="email"
										type="email"
										label="Email Address"
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
									<TablerForm.Input
										name="password"
										type="password"
										label="Password"
										placeholder="Enter Password"
										value={props.values.password}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										style={{
											borderColor:
												props.errors.password && props.touched.password && 'red'
										}}
									/>
									{props.errors.password && props.touched.password && (
										<div style={{ color: 'red' }}>{props.errors.password}</div>
									)}
									&nbsp;
									<Button
										color="primary"
										type="submit"
										disabled={props.isSubmitting}
									>
										Submit
									</Button>
									<Button
										color="warning"
										type="Register"
										onClick={() => {
											this.props.history.push('/register')
										}}
									>
										Register
									</Button>
									{message !== '' && (
										<Alert type="danger">
											<Alert.Link>{message}</Alert.Link>
										</Alert>
									)}
									<Grid.Row />
								</TablerForm.FieldSet>
							</Grid.Col>
						</Form>
					)}
				</Formik>
			</Page.Content>
		)
	}
}
