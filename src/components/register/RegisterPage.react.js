// @flow
//hi hi
import React, { Component } from 'react'
import { Formik } from 'formik'
import { LoginPage as TablerLoginPage } from 'tabler-react'
import axios from 'axios'
import API from '../../utils/API'
//import { RegisterPage as TablerRegisterPage } from 'tabler-react'
import RegisterPageTabler from './RegisterPageTabler.react'
// 
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
import { string } from 'prop-types';

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }
    }

    handleChange = async (values, { resetForm, setErrors, setSubmitting }) => {
        const state = this.state
        this.setState(state)
    }


    handleSubmit = (values, { props = this.props, setSubmitting }) => {
        console.log(values)
        setSubmitting(false)

        const registerUser = {
            email_address: values.email,
            password: values.password,
            first_name: values.first_name,
            last_name: values.last_name,
            role_id: 3
            
        }
        API.post('/register', registerUser)
            .then(result => {
                localStorage.setItem('token', result.data.token)
                this.props.history.push('/')
            })
            .catch(error => {
                if (error.response.status === 409) {
                    this.setState({
                        message: 'Register Failed'
                    })
                }
                if (error.response.status === 404) {
                    this.setState({
                        message: 'Failed'
                    })
                }
            })


        return
    }
    render() {
    return (
            <Page.Content>
                <Grid.Row cards={true}>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            first_name: ' ',
                            last_name: ' ',
                        }}

                        validate={values => {
                            
                            let errors = {}
                        
                            if (!values.email) {
                                errors.email = 'Required'
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address'
                            }
                            // Checks to see if the email address contains the AUTUNI.ac.nz
                            else if(!/[0-9]/i.test(values.email))
                            {
                                errors.email ="Looks Like You Might Not Be A Student, Assigning Different Role"
                                // Add Logic to Change Driver Role
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
                            <RegisterPageTabler
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

