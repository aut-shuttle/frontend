import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import API from './utils/API'
import { Site, RouterContextProvider } from 'tabler-react'
import {Button} from 'tabler-react'

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
		value: 'Bus Schedule',
		icon: 'align-justify',
		to: '/busschedule',
		LinkComponent: withRouter(NavLink)
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
	description: 'AUT Shuttle User',
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
		user: { first_name: '', last_name: '', role: {} }
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
		const getUserDescription = () => {
			if (this.state.user.role.id === 1) {
				navBarItems.push({
					value: 'Admin Dashboard',
					to: '/admin',
					icon: 'file',
					LinkComponent: withRouter(NavLink)
				})
				return 'Shuttle Admin'
			} else if (this.state.user.role.id === 2) {
				navBarItems.push({
					value: 'Scanner',
					to: '/QRReader',
					icon: 'maximize',
					LinkComponent: withRouter(NavLink)
				})
				return 'Shuttle Driver'
			} else if (this.state.user.role.id === 3) {
				return 'Shuttle Passenger'
			}
		}

		if (localStorage.getItem('token') !== '') {
			{
				navBarItems[4] = {
					icon: 'log-out',
					value: 'Sign out',
					to: '/logout',
					LinkComponent: withRouter(NavLink)
				}
				navBarItems.length = 5
				accountDropdownProps.name =
					this.state.user.first_name + ' ' + this.state.user.last_name
				accountDropdownProps.description = getUserDescription()
			}
		}

		return (
			<Site.Wrapper
				headerProps={{
					href: '/',
					alt: 'AUT University',
					imageURL: 'images/shuttle.png',
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
