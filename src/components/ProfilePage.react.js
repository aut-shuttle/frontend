import * as React from 'react'
import SiteWrapper from './../SiteWrapper.react'
import axios from 'axios'
import api from './api'
import {
	Container,
	Grid,
	Card,
	Button,
	Form,
	Avatar,
	Profile,
	List,
	Media,
	Text,
	Comment
} from 'tabler-react'




export default class ProfilePage extends React.Component {
	 
	   constructor(props){
			 super(props)
		 }


		 handleSubmit = async(values, { setSubmitting }) =>{
		console.log(values)
		setSubmitting(true)

    const updateprofile={
		first_name:values.fname,
	};
		api.patch('/profile',updateprofile)
		
	}
    render(){
	return (
		
				<SiteWrapper>
		<div className="profile">
			<Container>
				<Grid.Row>
					<Grid.Col lg={13}>
						<Form className="card" onSubmit={this.handleSubmit}>
							<Card.Body>
								<Card.Title>Profile</Card.Title>
								<Grid.Row>
									
									<Grid.Col sm={6} md={6}>
										<Form.Group>
											<Form.Label>First Name</Form.Label>
											<Form.Input
												type="text"
												name="fname"
												required
												onChange={this.handleChange}
											/>
										</Form.Group>
									</Grid.Col>
								</Grid.Row>
							</Card.Body>
							<Card.Footer className="text-right">
								<Button type="submit" color="primary">
									Change Password
								</Button>
							</Card.Footer>
						</Form>
					</Grid.Col>
				</Grid.Row>
			</Container>
		</div>
	</SiteWrapper>
	)
}
}

