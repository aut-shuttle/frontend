import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: ''
		}
	}

	handleChange = async (values, { resetForm, setErrors, setSubmitting }) => {
		const state = this.state
		this.setState(state)
	}

	handleValidate = values => {
		const errors = {}
		if (!values.email) errors.email = 'Required'
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'You must supply a valid email address'
		}
		if (
			values.email
				.split('@')
				.slice(1)
				.indexOf('autuni.ac.nz') === -1 &&
			values.email
				.split('@')
				.slice(1)
				.indexOf('aut.ac.nz') === -1
		) {
			errors.email = 'Not a valid AUT Email Address'
		}

		if (values.password != values.verifypassword) {
			errors.password = 'Passwords entered must match'
		}

		return errors
	}

	handleSubmit = (values, { props = this.props, setSubmitting }) => {
		setSubmitting(true)

		const registerUser = {
			email_address: values.email,
			password: values.password,
			first_name: values.first_name,
			last_name: values.last_name,
			university_id: values.studentid,
			role_id: 3
		}
		API.post('/register', registerUser)
			.then(result => {
				localStorage.setItem('token', result.data.token)
				this.props.history.push('/')
				setSubmitting(false)
				// Triggers a reload to ensure the database connection is established. Without a refresh, the token isn't saved correctly to local storage.
				window.location.reload()
			})
			.catch(error => {
				setSubmitting(false)
				if (!error.response) {
					this.setState({
						message: 'API is down, please start the API'
					})
				} else if (error.response.status === 409) {
					this.setState({
						message: 'Register failed'
					})
				} else if (error.response.status === 422) {
					this.setState({
						message: 'Email already exists'
					})
				} else if (error.response.status === 404) {
					this.setState({
						message: 'Failed'
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
							<Grid.Col md={5}>
								<TablerForm.FieldSet>
									<center>
										<h1>Create an Account!</h1>
									</center>
									<TablerForm.Input
										name="first_name"
										type="text"
										label="First Name"
										placeholder="Enter First Name"
										value={props.values.first_name}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										style={{
											borderColor:
												props.errors.first_name &&
												props.touched.first_name &&
												'red'
										}}
									/>
									{props.errors.first_name && props.touched.first_name && (
										<div style={{ color: 'red' }}>
											{props.errors.first_name}
										</div>
									)}
									<TablerForm.Input
										name="last_name"
										type="text"
										label="Last Name"
										placeholder="Enter Last Name"
										value={props.values.last_name}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										style={{
											borderColor:
												props.errors.last_name &&
												props.touched.last_name &&
												'red'
										}}
									/>
									{props.errors.last_name && props.touched.last_name && (
										<div style={{ color: 'red' }}>{props.errors.last_name}</div>
									)}
									<TablerForm.Input
										name="email"
										type="email"
										label="Email Address"
										placeholder="Enter Email Address"
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
									<TablerForm.Input
										name="verifypassword"
										type="password"
										label="Verify Password"
										placeholder="Verify Password"
										value={props.values.verifypassword}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										style={{
											borderColor:
												props.errors.verifypassword &&
												props.touched.verifypassword &&
												'red'
										}}
									/>
									{props.errors.verifypassword &&
										props.touched.verifypassword && (
											<div style={{ color: 'red' }}>
												{props.errors.verifypassword}
											</div>
										)}
									&nbsp;
									<Button
										block
										color="primary"
										type="submit"
										disabled={props.isSubmitting}
										icon="user-plus"
									>
										Register
									</Button>
									<Button
										block
										color="warning"
										type="Login"
										onClick={() => {
											this.props.history.push('/login')
										}}
										icon="chevron-left"
									>
										Back to Login
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
