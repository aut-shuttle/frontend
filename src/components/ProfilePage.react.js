import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'

export default class ProfilePage extends Component {
	constructor(props) {
		super(props)
	}

	handleSubmit = async (values, { setSubmitting }) => {
		console.log(values)
		setSubmitting(true)
		const updateprofile = {
			first_name: values.fname
		}
		API.patch('profile', updateprofile).then(result => {
			localStorage.setItem('token', result.data.token)
                localStorage.setItem('name', result.data.user.first_name +" " + result.data.user.last_name)
				this.props.history.push('/')
		})

		return
	}
	render() {
		return (
			<Page.Content>
				<Formik onSubmit={this.handleSubmit}>
					{props => (
						<Form>
							<Grid.Col md={7}>
								<TablerForm.FieldSet>
									<Alert type="primary">
										<Alert.Link>Update Profile</Alert.Link>
									</Alert>
									<TablerForm.Input
										name="fname"
										type="text"
										label="First name"
										placeholder="FIrst name"
										value={props.values.fname}
									/>

									<Button
										color="primary"
										type="submit"
										disabled={props.Submitting}
									>
										Submit
									</Button>

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
