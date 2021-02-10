# MyApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

# Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

------------------------------------------------------------

## instalar o angular CLI
npm install -g @angular/cli ou a versão que eu quero Install. npm i @angular/cli@9.0.4

## Npm básicos do angular CLI
criar um projeto: ng new nome-do-projeto.

criar componente: ng g c nomedocomponent.

criar service: ng g s nomedoservice.

criar modulo: ng g m nomedomodulo.

criar diretiva: ng g directive nome-da-diretiva.
  
------------------------------------------------------------

## Adicionando bootstrap no projeto com npm
npm install bootstrap -- save (última versão do bootstrap)
 ou
npm install bootstrap@3.3.7 (bootstrap na versão 3)

no arquivo angular.json adicionar:

"scripts": [
			"./node_modules/jquery/dist/jquery.js",
            "./node_modules/popper.js/dist/umd/popper.js",
            "./node_modules/bootstrap/dist/js/bootstrap.js"
           ]

------------------------------------------------------------

## Sites

#### Bootstrap sem jquery
https://valor-software.com/ngx-bootstrap/#/documentation#getting-started  

#### Bootstrap
https://getbootstrap.com/

#### Eventos do javascript
https://developer.mozilla.org/pt-BR/docs/Web/Events

