// @flow
import React, { Component } from 'react'
import { Formik } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'
import axios from 'axios'
import { RegisterPage as TablerRegisterPage } from 'tabler-react'
import {
	Page,
	Avatar,
	Icon,
	Grid,
	Card,
	Text,
	Table,
	Alert,
	Progress,
	colors,
	Dropdown,
	Button,
	StampCard,
	StatsCard,
	ProgressCard,
	Badge,
	Timeline,
	Stamp
} from 'tabler-react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)

	}
	handleSubmit = (values, { props = this.props, setSubmitting }) => {
		console.log(values)
		setSubmitting(false)
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
							// same as above, but feel free to move this into a class method now.

							let errors = {}
							if (!values.email) {
								errors.email = 'Required'
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
							) {
								errors.email = 'Invalid email address'
							}
							// Checks to see if the email address contains the AUTUNI.ac.nz
							else if (
								values.email
									.split('@')
									.slice(1)
									.indexOf('autuni.ac.nz') === -1
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
							<TablerRegisterPage
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
