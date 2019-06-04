import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'

export default class ChangePasswordPage extends Component {
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

	handleSubmit = async (values, { setSubmitting }) => {
		setSubmitting(true)
		if (values.npassword !== values.cpassword) {
			setSubmitting(false)
			this.setState({
				message: 'Please enter the the same new password'
			})
		} else {
			const changepassword = {
				oldPassword: values.opassword,
				newPassword: values.npassword
			}

			API.post('/profile/changepassword', changepassword)
				.then(res => {
					this.props.history.push('/')
				})
				.catch(error => {
					if (error.response.status === 401) {
						setSubmitting(false)
						this.setState({
							message: 'Please enter the correct old password '
						})
					}
				})
		}

		return
	}
	render() {
		const { message } = this.state
		return (
			<SiteWrapper>
				<Page.Content>
					<Formik onSubmit={this.handleSubmit}>
						{props => (
							<Form>
								<Grid.Col md={6}>
									<TablerForm.FieldSet>
										<Alert type="primary">
											<Alert.Link>Change Password</Alert.Link>
										</Alert>
										<TablerForm.Input
											name="opassword"
											type="password"
											label="Old Password"
											placeholder="Old"
											required
											value={props.values.opassword}
											onChange={props.handleChange}
										/>
										<TablerForm.Input
											name="npassword"
											type="password"
											label="New Password"
											placeholder="New"
											required
											value={props.values.npassword}
											onChange={props.handleChange}
										/>
										<TablerForm.Input
											name="cpassword"
											type="password"
											label="Confirm Password"
											placeholder="Confirm"
											required
											value={props.values.cpassword}
											onChange={props.handleChange}
										/>

										<Button
											block
											color="primary"
											type="submit"
											disabled={props.isSubmitting}
										>
											Submit
										</Button>
										<Button
											block
											color="warning"
											type="Back"
											onClick={() => {
												this.props.history.push('/')
											}}
										>
											Back
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
			</SiteWrapper>
		)
	}
}
