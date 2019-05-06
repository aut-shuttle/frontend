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
							<Card>
								<Card.Header>
									<Card.Title><h1>Journeys</h1></Card.Title>
										<Card.Options>
											<Button color="primary" size="sm">
												Action 1
											</Button>
											<Button color="secondary" size="sm" className="ml-2">
												Action 2
											</Button>
									</Card.Options>
								</Card.Header>
								<Card.Body>
									
								</Card.Body>
								<Card.Footer>This is standard card footer</Card.Footer>
							</Card>
							</Grid.Col>
						</Grid.Col>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
