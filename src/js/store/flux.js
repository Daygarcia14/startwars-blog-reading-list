const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URL_BASE: "https://www.swapi.tech/api",
      endPoints: ["people", "planets", "vehicles"],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    actions: {
      fetchItems: async () => {
        let store = getStore();
        if (!store.people.length) {
          for (let endPoint of store.endPoints) {
            try {
              let response = await fetch(`${store.URL_BASE}/${endPoint}`);
              if (response.ok) {
                let data = await response.json();
                data.results.map(async (item) => {
                  let responseTwo = await fetch(
                    `${store.URL_BASE}/${endPoint}/${item.uid}`
                  );
                  let result = await responseTwo.json();
                  setStore({
                    ...store,
                    [endPoint]: [...store[endPoint], result.result],
                  });
                  localStorage.setItem(
                    endPoint,
                    JSON.stringify(store[endPoint])
                  );
                });
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
      },

      addFav: (id) => {
        const store = getStore();
        let existe = store.favorites.find((item) => {
          return item._id == id;
        });
        if (!existe) {
          for (let endPoint of store.endPoints) {
            let favorite;
            favorite = store[endPoint].find((item) => {
              return item._id == id;
            });
            if (favorite) {
              setStore({
                ...store,
                favorites: [...store.favorites, favorite],
              });
              break;
            }

          }
        } else {
          let newFavorite = store.favorites.filter((item) => {
            return item._id != id;
          });
          setStore({
            ...store,
            favorites: newFavorite,
          });
        }
      },
    },
  };
};

export default getState;
