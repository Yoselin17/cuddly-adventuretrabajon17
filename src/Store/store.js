const getState = ({ setStore, getActions, getStore }) => {
    
    return {
        store: {
            meEncanta: [],
            personajes: []
        },
    
        actions: {
            obtenerPersonajes: () => {

                //se conecta con la Appi.
                fetch("http://assets.breatheco.de/apis/fake/todos/user/usernameyoselin")

                    .then((respuesta) => respuesta.json())
                    .then((data) => setStore({ ["personajes"]: data })).catch((error) => { console.error(error.message) })
            }
        },
    }
};