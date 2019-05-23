import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'tabler-react/dist/Tabler.css'

import LoginPage from './components/login/LoginPage.react'
import RegisterPage from './components/register/RegisterPage.react'
import HomePage from './components/home/HomePage.react'
import ViewProfilePage from './components/profile/ViewProfilePage.react'
import EditProfilePage from './components/profile/EditProfilePage.react'
import ChangePasswordPage from './components/profile/ChangePasswordPage.react'
import TopUpPage from './components/topup/TopUpPage.react'
import LogoutPage from './components/profile/LogoutPage.react'
import TagOnPage from './components/tagon/TagOnPage.react'
import BusSchedulePage from './components/busschedule/BusSchedulePage.react'
import ConfirmEmail from './components/register/ConfirmEmail.react'
import LandingPage from './components/landing/LandingPage.react'

function App() {
	return (
		<React.StrictMode>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/profile" component={ViewProfilePage} />
					<Route exact path="/editprofile" component={EditProfilePage} />
					<Route exact path="/changePassword" component={ChangePasswordPage} />
					<Route exact path="/topup" component={TopUpPage} />
					<Route exact path="/logout" component={LogoutPage} />
					<Route exact path="/tagon" component={TagOnPage} />
					<Route exact path="/busschedule" component={BusSchedulePage} />
					<Route path="/verify/:id" component={ConfirmEmail}/>
					<Route exact path="/landing" component={LandingPage} />
				</Switch>
			</Router>
		</React.StrictMode>
	)
}
export default App
