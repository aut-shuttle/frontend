import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'
import Typography from '../components/Typography'
import Button from '@material-ui/core/Button'
import BusLogo from './../Images/shuttle.png'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, blue, green, yellow } from '@material-ui/core/colors'

const yellowTheme = createMuiTheme({ palette: { primary: yellow } })

const styles = theme => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.primary.light
	},

	button: {
		margin: theme.spacing.unit
	},

	title: {
		fontSize: 24
	},
	placeholder: toolbarStyles(theme).root,
	toolbar: {
		justifyContent: 'space-between'
	},
	left: {
		flex: 0
	},
	leftLinkActive: {
		color: theme.palette.common.white
	},
	right: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-end'
	},
	rightLink: {
		fontSize: 16,
		color: theme.palette.common.white,
		marginLeft: theme.spacing.unit * 3
	},
	linkSecondary: {
		color: theme.palette.common.white
	},
	colorPrimary: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText
	}
})

function AppAppBar(props) {
	const { classes } = props

	return (
		<div>
			<AppBar position="fixed" color="default">
				<Toolbar className={classes.toolbar}>
					<div className={classes.left} />
					<img
						style={{ display: 'block', height: '100%' }}
						src={BusLogo}
						alt=""
					/>
					<div className={classes.right}>
						<Button
							variant="contained"
							className={classes.button}
							component={linkProps => (
								<Link {...linkProps} href="/login" variant="button" />
							)}
						>
							Sign In
						</Button>

						<MuiThemeProvider theme={yellowTheme}>
							<Button
								variant="contained"
								className={classes.button}
								color="primary"
								component={linkProps => (
									<Link {...linkProps} href="/register" variant="button" />
								)}
							>
								Sign Up
							</Button>
						</MuiThemeProvider>
					</div>
				</Toolbar>
			</AppBar>
			<div className={classes.placeholder} />
		</div>
	)
}

AppAppBar.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppAppBar)
