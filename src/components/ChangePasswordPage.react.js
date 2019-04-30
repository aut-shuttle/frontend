import * as React from 'react'

import {
	Container,
	Grid,
	Card,
	Button,
	Form,
	Avatar,
	Profile,
	List,
	Media,
	Text,
	Comment
} from 'tabler-react'

import SiteWrapper from '../SiteWrapper.react'

function ChangePasswordPage() {
	return (
		<SiteWrapper>
			<div className="profile">
				<Container>
					<Grid.Row>
						<Grid.Col lg={13}>
							<Form className="card">
								<Card.Body>
									<Card.Title>Change Password</Card.Title>
									<Grid.Row>
										<Grid.Col sm={6} md={6}>
											<Form.Group>
												<Form.Label>Old Password</Form.Label>
												<Form.Input
													type="password"
													placeholder="******"
													required
												/>
											</Form.Group>
										</Grid.Col>
										<Grid.Col sm={6} md={6}>
											<Form.Group>
												<Form.Label>New Password</Form.Label>
												<Form.Input
													type="password"
													placeholder="******"
													required
												/>
											</Form.Group>
										</Grid.Col>
									</Grid.Row>
								</Card.Body>
								<Card.Footer className="text-right">
									<Button type="submit" color="primary">
										Change Password
									</Button>
								</Card.Footer>
							</Form>
						</Grid.Col>
					</Grid.Row>
				</Container>
			</div>
		</SiteWrapper>
	)
}

export default ChangePasswordPage
