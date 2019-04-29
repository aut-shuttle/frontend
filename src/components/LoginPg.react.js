import React from 'react'
import API from '../utils/API'
import { Formik } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'

class LoginPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			name: null,
			avatar: null,
			email: null
		}
	}

	async loginUser(email_address, password) {
		console.log('attempting login')
		// Load async data.
		let userData = await API.post('/login', {
			email_address,
			password
		})
		console.log(userData)
	}

	render() {
		const { isLoading, name, avatar, email } = this.state

		return (
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
							.indexOf('example.com') === -1
					) {
						errors.email = 'Not a valid AUT Email'
					}

					return errors
				}}
				onSubmit={(
					values,
					{ setSubmitting, setErrors /* setValues and other goodies */ }
				) => {
					this.loginUser(values.email, values.password)
					alert('Done!')
				}}
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
		)
	}

	async componentDidMount() {
		// Load async data.
		// Update state with new data.
		// Re-render our component.
	}
}

export default LoginPage
