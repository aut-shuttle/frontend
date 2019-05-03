import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'

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
	
	handleSubmit = (values, { setSubmitting }) => {
		if(values.npassword!==values.cpassword){
			this.setState({
				message: 'Please enter the the same new password'
			})
		}else{console.log(values)
			setSubmitting(false)
			const changepassword = {
				oldPassword:values.opassword,
				newPassword:values.npassword,
				
				
			}
		   
			API.post('/profile/changepassword', changepassword).then(res => {
				localStorage.setItem('token', res.data.token)
				localStorage.setItem('name', res.data.user.opassword+" "+res.data.user.npassword)
				this.props.history.push('/')
			})
			.catch(error => {
				
				
				if (error.response.status === 401) {
					this.setState({
						message: 'Please enter the correct old password '
					})
				}
			}
			
			)

		}
		

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
										label="New Pssword"
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
