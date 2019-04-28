import React, { Component } from 'react'
import { Formik } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'
import axios from 'axios'

import {Page,Grid} from 'tabler-react'

import SiteWrapper from './../SiteWrapper.react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)

	}
	handleSubmit = (values, { props = this.props, setSubmitting }) => {
		console.log(values)
		const loginUser = {
			email_address: values.email,
			password: values.password
		}
		axios.post('http://localhost:3000/login', loginUser)
		.then(res => console.log(res.data));
		setSubmitting(false)
		return
	}
	render() {
		return (
			<SiteWrapper>
				<Page.Content>
					<Grid.Row cards={true}>
						<Formik
							initialValues={{
								email: '',
								password: ''
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
			</SiteWrapper>
		)
	}
}
