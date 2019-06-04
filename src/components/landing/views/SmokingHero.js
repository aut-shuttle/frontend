import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import LayoutBody from '../components/LayoutBody'
import Typography from '../components/Typography'

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing.unit * 9,
		marginBottom: theme.spacing.unit * 9
	},
	button: {
		border: '4px solid currentColor',
		borderRadius: 0,
		height: 'auto',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px`
	},
	link: {
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3
	},
	buoy: {
		width: 60
	}
})

function SmokingHero(props) {
	const { classes } = props

	return (
		<LayoutBody className={classes.root} component="section">
			<Button className={classes.button}>
				<Typography variant="h4" component="span">
					What are you waiting for?
				</Typography>
			</Button>
			<Typography variant="subtitle1" className={classes.link}>
				Sign up today and make the most of it!
			</Typography>
			<img
				src="https://i.imgur.com/J5HdSRr.png"
				className={classes.buoy}
				alt="buoy"
			/>
		</LayoutBody>
	)
}

SmokingHero.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SmokingHero)
