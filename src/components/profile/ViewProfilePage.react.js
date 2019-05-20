import React, { Component } from 'react'
import SiteWrapper from '../../SiteWrapper.react'
import { Page, Grid, Card, Profile, Button } from 'tabler-react'
import API from '../../utils/API'

export default class ViewProfilePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: false,
			message: '',
			user: {
				first_name: '',
				last_name: '',
				university_id: '',
				email_address: ''
			}
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

	render() {
		return (
			<SiteWrapper>
				<Page.Content>
					<Grid.Row>
						<Grid.Col width={20}>
							<Grid.Col md={10} lg={6}>
								<Profile
									name={
										this.state.isFetching
											? 'loading'
											: this.state.user.first_name +
											  ' ' +
											  this.state.user.last_name
									}
									avatarURL="./images/hamishimage.jpg"
									backgroundURL="./images/aut.jpg"
									bio="Bachelor of Computer and Information Sciences"
								/>

								<Grid.Row cards deck>
									<Grid.Col md={20}>
										<Card
											body={'Student ID: ' + this.state.user.university_id}
										/>
										<Card
											body={'Email Address: ' + this.state.user.email_address}
										/>
									</Grid.Col>
								</Grid.Row>
								<Button.List>
									<Button link="/journeypage" block color="yellow">
										Journeys
									</Button>
									<Button 
									block 
									color="green"
									onClick={() => {
										this.props.history.push('/editprofile')
									}}
									>
										Profile Settings
									</Button>
								</Button.List>
							</Grid.Col>
						</Grid.Col>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
