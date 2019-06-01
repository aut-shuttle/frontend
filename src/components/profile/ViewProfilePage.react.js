import React, { Component } from 'react'
import SiteWrapper from '../../SiteWrapper.react'
import { Page, Grid, Card, Profile, Button } from 'tabler-react'
import API from '../../utils/API'

export default class ViewProfilePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: true,
			message: '',
			user: {
				first_name: '',
				last_name: '',
				university_id: '',
				email_address: '',
				role: {}
			}
		}
	}

	componentDidMount() {
		API.get('/profile').then(res => {
			this.setState({
				user: res.data,
				isFetching: false
			})
		})
	}

	render() {
		const getUserDescription = () => {
			if (this.state.user.role.id === 1) {
				return 'AUT Shuttle Admin'
			} else if (this.state.user.role.id === 2) {
				return 'AUT Shuttle Driver'
			} else if (this.state.user.role.id === 3) {
				return 'AUT Shuttle Passenger'
			}
		}
		return (
			<SiteWrapper>
				<Page.Content>
					<Grid.Row>
						<Grid.Col width={20}>
							<Grid.Col md={10} lg={6}>
								<Profile
									name={
										this.state.isFetching
											? 'Loading...'
											: this.state.user.first_name +
											  ' ' +
											  this.state.user.last_name
									}
									avatarURL="./images/default-avatar.png"
									backgroundURL="./images/aut-bg.jpg"
									bio={getUserDescription()}
								/>

								<Grid.Row cards deck>
									<Grid.Col md={20}>
										<Card
											body={'University ID: ' + this.state.user.university_id}
										/>
										<Card
											body={'Email Address: ' + this.state.user.email_address}
										/>
									</Grid.Col>
								</Grid.Row>
								<Button.List>
									<Button
										onClick={() => {
											this.props.history.push('/editprofile')
										}}
										block
										color="green"
									>
										Edit Profile
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
