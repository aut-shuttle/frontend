import React, { Component } from 'react'
import { Formik } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'
import axios from 'axios'
import API from '../utils/API'
import { Page, Grid } from 'tabler-react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)
	}
	handleSubmit = async (values, { resetForm, setErrors, setSubmitting }) => {
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
					alert('Email and password do not match')
				}
				if (error.response.status === 404) {
					alert('User not found')
				}
			})
		return
	}
	render() {
		return (
			<Page.Content>
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
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
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
			</Page.Content>
		)
	}
}
