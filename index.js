const { default: axios } = require("axios");

module.exports = {
    /**
     * Introducir el usuario de GitHub para obtener sus datos de la API
     * @example
     *usuario = jagoraxm
     * @param {*} usuario 
     * @returns 
     */
    obtenerDatosDeUsuario: function( usuario ) {
        const url = `https://api.github.com/users/${usuario}`;
        return axios.get(url).then(
            data => data.data
        ).catch(error => console.log(error));
    }
}