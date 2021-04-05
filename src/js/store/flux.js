const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
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
