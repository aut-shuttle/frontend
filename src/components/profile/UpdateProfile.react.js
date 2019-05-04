import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import API from '../../utils/API'
import { Page, Grid, Alert, Form as TablerForm, Button } from 'tabler-react'
import SiteWrapper from '../../SiteWrapper.react'

//Back end needs to be corrected to allow for either entries to be the same, or error checking needs to be added here for that

export default class UpdateProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: false,
			message: '',
			user: ''
		}
	}

	componentDidMount() {
		API.get('/profile/').then(res => {
			this.setState({ isFetching: true })
			this.setState({ user: res.data })
			this.setState({ isFetching: false })
		})
	}

	handleChange = async () => {
		const state = this.state
		this.setState(state)
	}

	handleSubmit = (values, { setSubmitting }) => {
		setSubmitting(true)

		const updateprofile = {
			first_name: values.fname,
			last_name: values.lname,
			university_id: values.uid,
			id_expiry: values.idexpiry
		}
		API.patch('/profile', updateprofile)
			.then(res => {
				this.props.history.push('/')
				setSubmitting(false)
			})
			.catch(error => {
				setSubmitting(false)
				if (error.response.status === 422) {
					setSubmitting(false)
					this.setState({
						message: 'The values entered are the same, form not submitted'
					})
				}
				if (error.response.status === 401) {
					setSubmitting(false)
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
				<SiteWrapper>
					<Formik onSubmit={this.handleSubmit}>
						{props => (
							<Form>
								<Grid.Col md={6}>
									<TablerForm.FieldSet>
										<Alert type="primary">
											<Alert.Link>Update Profile</Alert.Link>
										</Alert>
										<TablerForm.Input
											name="fname"
											type="text"
											label="First name"
											placeholder={
												this.state.isFetching
													? 'loading'
													: this.state.user.first_name
											}
											value={props.values.fname}
											onChange={props.handleChange}
										/>
										<TablerForm.Input
											name="lname"
											type="text"
											label="Last name"
											placeholder={
												this.state.isFetching
													? 'loading'
													: this.state.user.last_name
											}
											value={props.values.lname}
											onChange={props.handleChange}
										/>
										<TablerForm.Input
											name="uid"
											type="text"
											label="University ID"
											placeholder={
												this.state.isFetching
													? 'loading'
													: this.state.user.university_id
											}
											value={props.values.uid}
											onChange={props.handleChange}
										/>
										<TablerForm.Input
											name="idexpiry"
											type="date"
											label="ID Expiry"
											placeholder={
												this.state.isFetching
													? 'loading'
													: this.state.user.idexpiry
											}
											value={props.values.idexpiry}
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
				</SiteWrapper>
			</Page.Content>
		)
	}
}