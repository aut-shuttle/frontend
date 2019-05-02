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

	handleSubmit = (values, { props = this.props, setSubmitting }) => {
		console.log(values)
		setSubmitting(false)

		const registerUser = {
			email_address: values.email,
			password: values.password,
			first_name: values.first_name,
            last_name: values.last_name,
            studentid: values.studentid,
			role_id: 3
		}
		API.post('/register', registerUser)
			.then(result => {
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('name', result.data.user.first_name +" " + result.data.user.last_name)
				this.props.history.push('/')
			})
			.catch(error => {
				if (error.response.status === 409) {
					this.setState({
						message: 'Register Failed'
					})
				}
				if (error.response.status === 404) {
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
					//validate={this.handleValidate}
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
										name="studentid"
										type="text"
										label="Student ID"
										placeholder="Enter Student ID"
										value={props.values.studentid}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										style={{
											borderColor:
												props.errors.studentid &&
												props.touched.studentid &&
												'red'
										}}
									/>
									{props.errors.studentid && props.touched.studentid && (
										<div style={{ color: 'red' }}>{props.errors.studentid}</div>
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
										block
										color="primary"
										type="submit"
										disabled={props.isSubmitting}
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
