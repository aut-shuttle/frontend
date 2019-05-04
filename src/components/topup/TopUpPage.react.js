import React, { Component } from 'react'
import SiteWrapper from '../../SiteWrapper.react'
import {
	Page,
	Grid,
	Button,
	StatsCard,
	Card,
	Dropdown,
	Icon
} from 'tabler-react'

export default class TopUpPage extends Component {
	render() {
		return (
			<SiteWrapper>
				<Page.Content title="ACCOUNT BALANCE">
					<Grid.Row cards={true}>
						<Grid.Col width={10} sm={10} lg={5}>
							<StatsCard
								layout={1}
								movement={0}
								total="$3.45"
								label="Current Balance"
							/>
						</Grid.Col>
					</Grid.Row>

					<Grid.Row>
						<Grid.Col width={3}>
							<Button.List>
								<Button block color="yellow" icon="coin">
									{' '}
									Automatic Payment{' '}
								</Button>
								<Button block color="blue" icon="settings" width="100%">
									{' '}
									Payment Settings
								</Button>
							</Button.List>
						</Grid.Col>

						<Dropdown
							type="button"
							block
							color="green"
							arrow
							icon="dollar-sign"
							triggerContent="TOP UP AMOUNT"
							itemsObject={[
								{
									value: '$5.00'
								},
								{
									value: '$10.00'
								},
								{
									value: '$20.00'
								},
								{
									value: '$30.00'
								},
								{
									value: '$40.00'
								},
								{
									value: '$50.00'
								},
								{
									value: '$100.00'
								},
								{
									value: '$150.00'
								}
							]}
						/>
					</Grid.Row>
				</Page.Content>
			</SiteWrapper>
		)
	}
}
