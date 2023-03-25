# Contador

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


1 Configuramos el componente raiz con un valor
2 en el html del componente pintamos el valor que hemos configurado en el componente raiz a traves de un data binding {{expresion}}
3 configuramos el componente contador con un input y un output
  3.1 el input recibira el valor del componente raiz
  3.2 y el output devolvera el valor de las operaciones que se realizen en este componente
4 Primero escribimos el html del componente contador donde conectamos la plantilla con el componente a traves de eventos
5 Despues incrementamos y recuperarmos el valor del componente raiz en el componente contador
6 En la plantilla html del componente raiz pintamos el componente contador
7 en el componente raiz creamos un listenter para capturar el evento de actualizacion que nos manda el output a traves del emiter
