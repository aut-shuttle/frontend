import React, { Component } from 'react'
import { Formik } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'
import axios from 'axios'
import API from '../utils/API'
import { Page, Grid, Alert } from 'tabler-react'

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
			})
			.catch(error => {
				if (error.response.status === 409) {
					this.setState({
						message: 'Login failed. Username or password not match'
					})
				}
				if (error.response.status === 404) {
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
				<Grid.Col md={6}>
					<Grid.Row>
						<Alert type="primary">
							<Alert.Link>Welcome to the AUT Shuttle App!</Alert.Link>
						</Alert>
					</Grid.Row>
					<Grid.Row cards={true}>
						<Formik
							initialValues={{
								email: '',
								password: ''
							}}
							validate={values => {
								let errors = {}
								if (!values.email) {
									errors.email = 'Required'
								} else if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
										values.email
									)
								) {
									errors.email = 'Invalid email address'
								} else if (
									values.email
										.split('@')
										.slice(1)
										.indexOf('example.com') === -1
								) {
									errors.email = 'Not a valid AUT Email'
								}
								return errors
							}}
							onSubmit={this.handleSubmit}
							onChange={this.handleChange}
							render={({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting
							}) => (
								<TablerLoginPage
									onSubmit={handleSubmit}
									onChange={handleChange}
									onBlur={handleBlur}
									values={values}
									errors={errors}
									touched={touched}
								/>
							)}
						/>
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
