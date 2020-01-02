// Third party
import React, { Suspense, lazy } from "react"
import { Route, Switch } from "react-router-dom"
import { Layout } from "antd"
// Custom components
import { Loading } from "../Components/General"
import { Header, Footer } from "../Containers"
import { StyledDiv, Theme } from "../Styling"
import { redTheme } from "../Styling/Themes"

// Lazy loading
const Home = lazy(() => import("../Containers/Home.js"))
const Join = lazy(() => import("../Containers/Join.js"))
const Login = lazy(() => import("../Containers/Login.js"))
const SignUp = lazy(() => import("../Containers/SignUp.js"))
const AdminPage = lazy(() => import("../Containers/AdminPage.js"))
const HowToPlay = lazy(() => import("../Containers/HowToPlay.js"))
const PlayerPage = lazy(() => import("../Containers/PlayerPage.js"))

const Boiler = () => {
	return (
		<Layout>
			<Theme theme={redTheme}>
				<Layout.Header
					style={{
						position: 'fixed',
						zIndex: 2,
						height: 0,
						width: '100%',
						padding: 0,
						lineHeight: 0
					}}
				>
					<Header/>
				</Layout.Header>
			</Theme>
			<StyledDiv style={{ paddingTop: 56, minHeight: "80vh" }}>
				<Suspense fallback={<Loading logo />}>
					<Switch>
						<Route
							path="/"
	            exact
							render={props => <Home {...props}/>}
						/>
						<Route
							path="/how-to-play"
							exact
							render={props => <HowToPlay {...props}/>}
						/>
						<Route
							path="/join"
							exact
							render={props => <Join {...props}/>}
						/>
						<Route
							path="/login"
							exact
							render={props => <Login {...props}/>}
						/>
						<Route
							path="/signup"
							exact
							render={props => <SignUp {...props}/>}
						/>
						<Route
							path="/player-page"
							exact
							render={props => <PlayerPage {...props}/>}
						/>
						<Route
							path="/admin-page"
							exact
							render={props => <AdminPage {...props}/>}
						/>
					</Switch>
				</Suspense>
			</StyledDiv>
			<Theme theme={redTheme}>
				<Footer/>
			</Theme>
		</Layout>
	)
}

export default Boiler
