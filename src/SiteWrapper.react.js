import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import {
	Site,
	Nav,
	Grid,
	List,
	Button,
	RouterContextProvider
} from 'tabler-react'

import type { NotificationProps } from 'tabler-react'

type Props = {|
	+children: React.Node
|}

type State = {|
	notificationsObjects: Array<NotificationProps>
|}

type subNavItem = {|
	+value: string,
	+to?: string,
	+icon?: string,
	+LinkComponent?: React.ElementType
|}

type navItem = {|
	+value: string,
	+to?: string,
	+icon?: string,
	+active?: boolean,
	+LinkComponent?: React.ElementType,
	+subItems?: Array<subNavItem>,
	+useExact?: boolean
|}

const navBarItems: Array<navItem> = [
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
		subItems: [
			{
				value: 'Check Balance',
				to: '/balance',
				LinkComponent: withRouter(NavLink)
			},
			{
				value: 'Top Up Balance',
				to: '/topup',
				LinkComponent: withRouter(NavLink)
			}
		]
	},
	{
		value: 'Profile',
		icon: 'user',
		subItems: [
			{
				value: 'Edit Profile',
				to: '/profile',
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
	avatarURL: './images/hamishimage.jpg',
	name: 'Hamish Maritz',
	description: 'Student at AUT',
	options: [
		{ icon: 'user', value: 'Profile' },
		{ icon: 'settings', value: 'Settings' },
		{ isDivider: true },
		{ icon: 'help-circle', value: 'Need help?' },
		{ icon: 'log-out', value: 'Sign out' }
	]
}

class SiteWrapper extends React.Component<Props, State> {
	state = {
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

	render(): React.Node {
		const notificationsObjects = this.state.notificationsObjects || []
		const unreadCount = this.state.notificationsObjects.reduce(
			(a, v) => a || v.unread,
			false
		)
		return (
			<Site.Wrapper
				headerProps={{
					href: '/',
					alt: 'AUT University',
					imageURL: 'images/autlogo.png', // Needs to be updated
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
