const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // URL_BASE: "https://www.swapi.tech/api",
      token: localStorage.getItem("token") || "",
      URL_BASE:
        "https://3000-4geeksacade-flaskresthe-5kgz88km123.ws-us44.gitpod.io",
      endPoints: ["people", "planets", "vehicles"],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    actions: {
      fetchItems: async () => {
        let store = getStore();
        if (!store.people.length || !store.planets.length) {
          try {
            let response = await fetch(`${store.URL_BASE}/characters`);
            let response1 = await fetch(`${store.URL_BASE}/planets`);
            let data = await response.json();
            let data1 = await response1.json();
            console.log(data);
            console.log(data1);
            if (response.ok && response1.ok) {
              localStorage.setItem("people", JSON.stringify(data));
              localStorage.setItem("planets", JSON.stringify(data1));
            } else {
              console.log(error);
            }
          } catch (error) {
            console.log("Hubo un error", error);
          }
        }

        // if (!store.people.length) {
        //   for (let endPoint of store.endPoints) {
        //     try {
        //       let response = await fetch(`${store.URL_BASE}/${endPoint}`);
        //       if (response.ok) {
        //         let data = await response.json();
        //         data.results.map(async (item) => {
        //           let responseTwo = await fetch(
        //             `${store.URL_BASE}/${endPoint}/${item.uid}`
        //           );
        //           let result = await responseTwo.json();
        //           setStore({
        //             ...store,
        //             [endPoint]: [...store[endPoint], result.result],
        //           });
        //           localStorage.setItem(
        //             endPoint,
        //             JSON.stringify(store[endPoint])
        //           );
        //         });
        //       }
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   }
        // }
      },

      getFav: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URL_BASE}/users/favorites`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              ...store,
              favorites: data,
            });
            localStorage.setItem("favorites", JSON.stringify(store.favorites));
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },
      addFav: async (id, name, nature) => {
        let store = getStore();
        let actions = getActions();
        let body = {
					"nature_id": id,
					"name": name
				}
        try {
          let response = await fetch(
            `${store.URL_BASE}/favorites/${nature}/${id}`,
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${store.token}`,
              },
            }
          );
          if (response.ok) {
            actions.getFav();
          }
        } catch (error) {
          console.log("hubo un error", error);
        }
      },

      deleteFav: async (nature, nature_id) => {
        let store = getStore();
        let actions = getActions();
        let body = {
					"nature_id": nature_id,
					"nature": nature
				}
        try {
          let response = await fetch(
            `${store.URL_BASE}/favorites/${nature}/${nature_id}`,
            {
              method: "DELETE",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${store.token}`,
              },
            }
          );
          if (response.ok) {
            actions.getFav();
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },
      handle_register: async (register) => {
        let store = getStore();
        try {
          const response = await fetch(`${store.URL_BASE}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
          });
          if (response.ok) {
            console.log("Usuario fue registrado");
          } else {
            console.log("Hubo un error");
          }
        } catch (error) {
          console.log(error);
        }
      },

      login: async (register) => {
        let store = getStore();
        let actions = getActions();
        try {
          const response = await fetch(`${store.URL_BASE}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
          });
          let data = await response.json();
          if (response.ok) {
            console.log(data);
            setStore({
              ...store,
              token: data.token,
            });
            localStorage.setItem("token", data.token);
            actions.getFav()
          }
        } catch (error) {
          console.log("Hubo un error", error);
        }
      },
      Logout: () => {
        let store = getStore();
        setStore({
          ...store,
          token: "",
        });
        localStorage.removeItem("token");
        localStorage.removeItem("favorites");
      },
    },
  };
};

export default getState;
