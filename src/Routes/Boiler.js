// Third party
import React, { Suspense, lazy } from "react"
import { Route, Switch } from "react-router-dom"
import { Layout } from "antd"
// Custom components
import { Loading } from "../Components/General"
import { Header, Footer } from "../Containers"
import { StyledBrightDiv } from "../Styling"

// Lazy loading
const Home = lazy(() => import("../Containers/Home.js"))
const Join = lazy(() => import("../Containers/Join.js"))
const PlayerPage = lazy(() => import("../Containers/PlayerPage.js"))

const Boiler = () => {
	return (
		<Layout>
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
			<StyledBrightDiv style={{ paddingTop: 56, minHeight: "80vh" }}>
				<Suspense fallback={<Loading logo />}>
					<Switch>
						<Route
							path="/"
	            exact
							render={props => <Home {...props}/>}
						/>
						<Route
							path="/join"
							exact
							render={props => <Join {...props}/>}
						/>
						<Route
							path="/player-page"
							exact
							render={props => <PlayerPage {...props}/>}
						/>
					</Switch>
				</Suspense>
			</StyledBrightDiv>
			<Footer/>
		</Layout>
	)
}

export default Boiler
