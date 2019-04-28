// @flow
import * as React from 'react'
import { Formik } from 'formik'

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

import SiteWrapper from './../SiteWrapper.react'

type Props = {||}

function RegisterPage(props: Props): React.Node {
	return (
		<SiteWrapper>
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
						onSubmit={(
							values,
							{ setSubmitting, setErrors /* setValues and other goodies */ }
						) => {
							alert('Registered')
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
		</SiteWrapper>
	)
}

export default RegisterPage
