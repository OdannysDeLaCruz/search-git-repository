﻿# Repos Github

Aplicación que obtiene todos los repositorios de un usuario de GitHub

## Comenzando

Para lanzar este proyecto en tu directorio local con propositos de pruebas ten en cuenta lo siguiente:

 - La aplicación obtiene los datos de los usuarios y repositorios atravez de la API de GitHub, dicha API requiere que se le pasen como parametro client_id y secret_id que se obtienen creando una  nueva aplicación en github (https://github.com/settings/applications/new), (estas variables son opcionales para la API de GitHub, sin embargo, en este proyecto son obligatorias para el correcto funcionamiento de la aplicación)
 
 - Una vez tengas estas variables (desde github), para configurarlas se debe agregar un archivo llamado config.json en la ruta ("src/assets/js/"), este archivo debe tener la siguiente configuración

```javascript
{
    "client_id": "xxxxxxxx", //obtenido desde github
    "client_secret": "xxxxxxxxxxxxxxxxxx" //obtenido desde github
}
``` 

## Pre-requisitos

 - npm >=6

## Instalación

Para llevar a cabo la instalación siga estos pasos:

#### Instale dependencias

    npm install 

#### Ejecuta webpack y el servidor local
Este servidor queda en modo "watch" para refrescar la página si nota que has dado guardar, están disponibles dos scripts para npm
    
```javascript
//Para desarrollo local
npm run dev
    
//Para producción (puede configurarse mucho más para obtimizar mejor desde el webpack.config.js)
npm run build
```

## Configuración de servidor local
El archivo webpack.config.js esta configurado para lanzar el servidor en el puerto 3000, sé libre de configurarlo a tu conveniencia.

```javascript
devServer: {
    port: 3000
},
```

## Construido con
Este proyecto esta desarrollado con:

[Npm](https://www.npmjs.com) - Gestor de dependencias

[Webpack](https://webpack.js.org) - Empaquetador

[SASS](https://sass-lang.com) - Preprocesador Css

#
:computer: con :heart:  y :book: por [odannys.codes](https://www.instagram.com/odannys.codes)