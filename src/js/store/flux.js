// import { LUKE } from "src/img/people/luke.png";
// import { C3P0 } from "src/img/people/c-3po.png";
// import { R2D2 } from "src/img/people/r2d2.png";
// import { VADER } from "src/img/people/vader.jpg";
// import { LEIA } from "src/img/people/Princess-leia.png";
// import { OWEN } from "src/img/people/owen.jpg";
// import { BERU } from "src/img/people/beru.png";
// import { R5D4 } from "src/img/people/r5d4.png";
// import { BIGGS } from "src/img/people/BiggsHS-ANH.png";
// import { OBIWAN } from "src/img/people/obiwan.png";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			peopleimg: [
				{
					name: "Luke Skywalker",
					url:
						"https://i0.wp.com/wipy.tv/wp-content/uploads/2020/07/edad-de-luke-skywalker-en-las-trilogias-de-star-wars.jpg?w=1000&ssl=1"
				},
				{ name: "C-3PO", url: "src/img/people/c-3po.png" },
				{ name: "R2-D2", url: "src/img/people/r2d2.png" },
				{ name: "Darth Vader", url: "src/img/people/vader.jpg" },
				{ name: "Leia Organa", url: "src/img/people/Princess-leia.png" },
				{ name: "Owen Lars", url: "src/img/people/owen.jpg" },
				{ name: "Beru Whitesun lars", url: "src/img/people/beru.png" },
				{ name: "R5-D4", url: "src/img/people/r5d4.png" },
				{ name: "Biggs Darklighter", url: "src/img/people/BiggsHS-ANH.png" },
				{ name: "Obi-Wan Kenobi", url: "src/img/people/obiwan.png" }
			],
			planetsimg: []
		},
		actions: {
			getPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log("DATA>>", json);
				setStore({ people: json.results });
			},

			getPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log("DATA>>", json);
				setStore({ planets: json.results });
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			deleteFavorite: indice => {
				let store = getStore().favorites;
				setStore({ favorites: [...store.slice(0, indice), ...store.slice(indice + 1)] });
			}
		}
	};
};

export default getState;
