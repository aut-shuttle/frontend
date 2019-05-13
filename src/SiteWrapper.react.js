import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import API from './utils/API'
import { Site, RouterContextProvider } from 'tabler-react'

const navBarItems = [
	{
		value: 'Home',
		to: '/',
		icon: 'home',
		LinkComponent: withRouter(NavLink),
		useExact: true
	},
	{
		value: 'Top Up Balance',
		icon: 'credit-card',
		to: '/topup',
		LinkComponent: withRouter(NavLink)
	},
	{
		value: 'Profile',
		icon: 'user',
		subItems: [
			{
				value: 'View Profile',
				to: '/profile',
				LinkComponent: withRouter(NavLink)
			},
			{
				value: 'Edit Profile',
				to: '/editprofile',
				LinkComponent: withRouter(NavLink)
			},
			{
				value: 'Change Password',
				to: '/changePassword',
				LinkComponent: withRouter(NavLink)
			}
		]
	},
	{
		value: 'Login',
		to: '/login',
		icon: 'book-open',
		LinkComponent: withRouter(NavLink)
	},

	{
		value: 'Register',
		to: '/register',
		icon: 'file',
		LinkComponent: withRouter(NavLink)
	}
]

const accountDropdownProps = {
	avatarURL: './images/default-avatar.png',
	name: 'Welcome',
	description: 'Student at AUT',
	options: [
		{ icon: 'user', value: 'Profile', to: '/profile' },
		{ isDivider: true },
		{
			icon: 'log-out',
			value: 'Sign out',
			to: '/logout',
			LinkComponent: withRouter(NavLink)
		}
	]
}

class SiteWrapper extends Component {
	state = {
		user: { first_name: '', last_name: '' },
		notificationsObjects: [
			{
				unread: true,
				message: (
					<React.Fragment>
						<strong>Olaf</strong> just topped his balance!
					</React.Fragment>
				),
				time: '10 minutes ago'
			},
			{
				unread: true,
				message: (
					<React.Fragment>
						<strong>Thea</strong> just topped up her balance.
					</React.Fragment>
				),
				time: '1 hour ago'
			},
			{
				unread: false,
				message: (
					<React.Fragment>
						<strong>Mike</strong> just broke the API(Again!)
					</React.Fragment>
				),
				time: '2 hours ago'
			}
		]
	}

	componentDidMount() {
		API.get('/profile/')
			.then(res => {
				this.setState({ user: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		const notificationsObjects = this.state.notificationsObjects || []
		const unreadCount = this.state.notificationsObjects.reduce(
			(a, v) => a || v.unread,
			false
		)
		if (localStorage.getItem('token') !== '') {
			{
				navBarItems[3] = {
					icon: 'log-out',
					value: 'Sign out',
					to: '/logout',
					LinkComponent: withRouter(NavLink)
				}
				navBarItems[4] = ''
				accountDropdownProps.name =
					this.state.user.first_name + ' ' + this.state.user.last_name
			}
		}
		return (
			<Site.Wrapper
				headerProps={{
					href: '/',
					alt: 'AUT University',
					imageURL: 'images/shuttle.png',
					notificationsTray: {
						notificationsObjects,
						markAllAsRead: () =>
							this.setState(
								() => ({
									notificationsObjects: this.state.notificationsObjects.map(
										v => ({ ...v, unread: false })
									)
								}),
								() =>
									setTimeout(
										() =>
											this.setState({
												notificationsObjects: this.state.notificationsObjects.map(
													v => ({ ...v, unread: true })
												)
											}),
										5000
									)
							),
						unread: unreadCount
					},
					accountDropdown: accountDropdownProps
				}}
				navProps={{ itemsObjects: navBarItems }}
				routerContextComponentType={withRouter(RouterContextProvider)}
				footerProps={{
					links: [
						<a href="#">AUT Website</a>,
						<a href="#">Terms and Conditions</a>
					]
				}}
			>
				{this.props.children}
			</Site.Wrapper>
		)
	}
}

export default SiteWrapper
