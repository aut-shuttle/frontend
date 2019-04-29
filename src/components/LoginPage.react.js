import React, { Component } from 'react'
import { Formik } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'
import axios from 'axios'

import {Page,Grid} from 'tabler-react'

<<<<<<< HEAD
import SiteWrapper from './../SiteWrapper.react'
=======


function LoginPage(props: Props): React.Node {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
>>>>>>> olafwrieden

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
		.then((result) => {
        localStorage.setItem('token', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
      });
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
