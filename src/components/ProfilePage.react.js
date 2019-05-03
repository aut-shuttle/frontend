import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'

export default class ProfilePage extends Component {
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
	handleSubmit = (values, { setSubmitting }) => {
		console.log(values)
		setSubmitting(false)
		const updateprofile = {
			first_name: values.fname,
			last_name:values.lname,
			university_id:values.stuid,
			id_expiry:values.expid
		}
		API.patch('/profile', updateprofile).then(res => {
			localStorage.setItem('token', res.data.token)
			localStorage.setItem('name', res.data.user.first_name+" "+res.data.user.last_name+" "+
			res.data.user.university_id+" "+res.data.user.id_expiry)
			this.props.history.push('/')
		})
		.catch(error => {
			
			if (error.response.status === 401) {
				this.setState({
					message: 'Please login'
				})
			}
		})

		return
	}
	render() {
		const { message } = this.state
		return (
			<Page.Content>
				<Formik onSubmit={this.handleSubmit}>
					{props => (
						<Form>
							<Grid.Col md={6} offset={3}>
								<TablerForm.FieldSet>
									<Alert type="primary">
										<Alert.Link>Update Profile</Alert.Link>
									</Alert>
									<TablerForm.Input
										name="fname"
										type="text"
										label="First name"
										placeholder="FIrst name"
										required="required"
										value={props.values.fname}
										onChange={props.handleChange}
									/>
									<TablerForm.Input
										name="lname"
										type="text"
										label="Last name"
										placeholder="Last name"
										required="required"
										value={props.values.lname}
										onChange={props.handleChange}
									/>
									<TablerForm.Input
										name="stuid"
										type="text"
										label="Student ID"
										placeholder="Student ID"
										required="required"
										value={props.values.stuid}
										onChange={props.handleChange}
									/>
									<TablerForm.Input
										name="expid"
										type="text"
										label="Expiry ID"
										placeholder="Expiry ID"
										required="required"
										value={props.values.expid}
										onChange={props.handleChange}
									/>
									

									<Button
										color="primary"
										type="submit"
										disabled={props.isSubmitting}
										
									>
										Submit
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
