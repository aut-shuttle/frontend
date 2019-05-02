import React, { Component } from 'react'
import API from '../../utils/API'

import {
	Page,
	Avatar,
	Icon,
	Grid,
	Card,
	Text,
	Table,
	Alert,
	Button,
	StatsCard,
	Timeline,
	Stamp
} from 'tabler-react'

import GoogleMap from '../../GoogleMap'

import SiteWrapper from './../../SiteWrapper.react'

export default class LoginPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: ''
		}
		API.get('/profile/').then(res => {
			this.setState({ user: res.data })
		})
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
		} else {
			this.props.history.push('/login')
		}
	}

	render() {
		const { user } = this.state
		return (
			<SiteWrapper>
				<Page.Content
					title={'Welcome, ' + user.first_name + ' ' + user.last_name}
				>
					<Grid.Row cards={true}>
						<Grid.Col width={6} sm={4} lg={2}>
							<StatsCard
								layout={1}
								movement={6}
								total="$5.00"
								label="Account Balance"
							/>
						</Grid.Col>
						<Grid.Col width={6} sm={4} lg={2}>
							<StatsCard
								layout={1}
								movement={-3}
								total="Routes"
								label="View Routes"
							/>
						</Grid.Col>
						<Grid.Col lg={6} />

						<Grid.Col md={6}>
							<Alert type="primary">
								<Alert.Link
									href={
										process.env.NODE_ENV === 'production'
											? 'https://tabler.github.io/tabler-react/documentation'
											: '/documentation'
									}
								>
									Development Build
								</Alert.Link>{' '}
								0.01
							</Alert>
							<Grid.Row>
								<Grid.Col sm={12}>
									<Grid.Col lg={12} md={6}>
										<Card
											title="Bus Location"
											body={<GoogleMap blackAndWhite />}
										/>
										<Page.MapHeader>
											<GoogleMap blackAndWhite />
										</Page.MapHeader>
										<Grid.Row>
											<Grid.Col width={12}>
												<Card
													title="Current Location Of Bus"
													options={<Stamp color="green">OPERATING</Stamp>}
													body={
														<Timeline>
															<Timeline.Item
																title="AUT City Campus"
																badgeColor="red"
																time="2 min. ago"
																active
																description="Ready For Pickup"
															/>
															<Timeline.Item
																title="In Transit"
																badge
																time="10 min. ago"
															/>
															<Timeline.Item
																title="Driver Switch"
																badgeColor="blue"
																time="15 min. ago"
																active
																description="Driver Switching"
															/>
															<Timeline.Item
																title="In Transit"
																badge
																time="20 min. ago"
															/>
															<Timeline.Item
																title="AUT South Campus"
																badgeColor="red"
																time="30 min. ago"
																active
																description="Leaving South"
															/>
														</Timeline>
													}
												/>
											</Grid.Col>
										</Grid.Row>
									</Grid.Col>
								</Grid.Col>
							</Grid.Row>
						</Grid.Col>
					</Grid.Row>
					<Grid.Row cards deck />
					<Grid.Row>
						<Grid.Col width={12}>
							<Card title="Invoices">
								<Table
									responsive
									className="card-table table-vcenter text-nowrap"
									headerItems={[
										{ content: 'No.', className: 'w-1' },
										{ content: 'Type' },
										{ content: 'RECEIVER' },
										{ content: 'Payment Method' },
										{ content: 'Date' },
										{ content: 'Status' },
										{ content: 'Amount' },
										{ content: null },
										{ content: null }
									]}
									bodyItems={[
										{
											key: '1',
											item: [
												{
													content: (
														<Text RootComponent="span" muted>
															01
														</Text>
													)
												},
												{
													content: (
														<a href="invoice.html" className="text-inherit">
															Top Up
														</a>
													)
												},
												{ content: 'AUT University' },
												{ content: <Icon payment name="visa" /> },
												{ content: '05 April 2019' },
												{
													content: (
														<React.Fragment>
															<span className="status-icon bg-success" />{' '}
															SUCCESS
														</React.Fragment>
													)
												},
												{ content: '$15.00' },
												{
													alignContent: 'right',
													content: (
														<React.Fragment>
															<Button size="sm" color="secondary">
																Receipt
															</Button>
															<div className="dropdown">
																<Button
																	color="secondary"
																	size="sm"
																	isDropdownToggle
																>
																	Manage
																</Button>
															</div>
														</React.Fragment>
													)
												},
												{ content: <Icon link name="edit" /> }
											]
										}
									]}
								/>
							</Card>
						</Grid.Col>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
