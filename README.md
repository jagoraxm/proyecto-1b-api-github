# API GitHub
Obtener los datos de un usuario que ingresen como parámetro

## Instrucciones de uso
Seguir las siguientes instrucciones

### Instalación

```
npm install proyecto-1b-api-github-jag
```

### Uso
```
const api = require('proyecto-1b-api-github-jag');

api.obtenerDatosDeUsuario('mugan86').then(
    respuesta => console.log(respuesta);
).catch(error => console.log(error));
```