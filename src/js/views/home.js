import React, { useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
	}, []);

	return (
		<div className="text-center mt-3">
			<h1 className="text-light">Star Wars World</h1>
			<div className="text-light text-left">
				<div>
					<h3>Characters</h3>
				</div>
				<div id="cardRoll" className="scrolling-wrapper row flex-row flex-nowrap mt-2 pb-4 pt-2">
					{store.people.map((item, i) => {
						let theid = i;
						return (
							<div key={i}>
								<div className="col-12" id="myCard">
									<div className="card">
										<img
											src={
												item.name === store.peopleimg.name
													? store.peopleimg.url
													: "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
											}
											className="card-img-top mw-100 mh-100"
											alt="..."
										/>
										<div className="card-body" id="cardBody">
											<h5 className="card-title">{item.name}</h5>

											<p className="card-text text-light">
												<ul>
													<li>Birth Year: {item.birth_year}</li>
													<li>Height: {item.height}</li>
													<li>Gender: {item.gender}</li>
												</ul>
											</p>

											<div className="d-inline-block">
												<Link to={"/cardView/" + theid} className="btn-sm btn-primary">
													More
												</Link>
											</div>

											<div className="float-right d-inline-block text-light">
												{store.favorites.includes(item.name) ? null : (
													<button
														onClick={() => {
															actions.setFavorites(item.name);
														}}
														type="button"
														className="btn text-light "
														id="myFavorite">
														<i className="far fa-heart" />
													</button>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="text-light text-left">
				<div>
					<h3>Planets</h3>
				</div>
				<div id="planetRoll" className="scrolling-wrapper row flex-row flex-nowrap mt-2 pb-4 pt-2">
					{store.planets.map((item, i) => {
						let theid = i;
						return (
							<div key={i}>
								<div className="col-12" id="myCard">
									<div className="card">
										<img
											src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
											className="card-img-top mw-100 mh-100"
											alt="..."
										/>
										<div className="card-body" id="cardBody">
											<h5 className="card-title">{item.name}</h5>

											<p className="card-text text-light">
												<ul>
													<li>Gravity: {item.gravity}</li>
													<li>Climate: {item.climate}</li>
													<li>Terrain: {item.terrain}</li>
												</ul>
											</p>

											<div className="d-inline-block">
												<Link to={"/planetView/" + theid} className="btn-sm btn-primary">
													More
												</Link>
											</div>

											<div className="float-right d-inline-block">
												<button
													onClick={() => {
														actions.setFavorites(item.name);
													}}
													type="button"
													className="btn text-light "
													id="myFavorite">
													<i className="far fa-heart" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
