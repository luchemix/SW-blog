import React from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { CardView } from "./views/cardView";
import { PlanetView } from "./views/planetView";
import injectContext from "./store/appContext";

import { SWNavbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<SWNavbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/cardView/:theid">
							<CardView />
						</Route>
						<Route exact path="/planetView/:theid">
							<PlanetView />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
