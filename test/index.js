const obtenerUsuario = require('../index').obtenerDatosDeUsuario;

const expect = require('chai').expect;

const { beforeEach } = require('mocha');
var nock = require('nock')

const mugan86 = require('./respuestas/mugan86');

describe('Test de datos de diferentes usuarios de github', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/mugan86').reply(200, mugan86);
    });

    it('Obtener datos del usuario mugan86', () => {
        return obtenerUsuario('mugan86').then(
            respuesta => {
                // Probar el tipo de variable que obtenemos de respuesta
                // Debe ser un objeto
                expect(typeof respuesta).to.equal('object');

                // Comprobar que el usuario de la API es jagoraxm
                expect(respuesta.login).to.equal('mugan86');

                // Comprobar que el ID del usuario es numérico
                expect(typeof respuesta.id).to.equal('number');

                // Comprobar que seguidores y seguidos sea numérico
                expect(typeof respuesta.followers).to.equal('number');
                expect(typeof respuesta.following).to.equal('number');
            }
        )
    });
});