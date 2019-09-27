# AngularApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker
`docker build -t angularapplication:1.0.0 .`

To build container from image
`docker run --rm -d -p 80:80 angularapplication:1.0.0`

For new tag
`docker tag angularapplication:1.0.1 dockerjonasandersen/angularapplication:1.0.1`


`docker push dockerjonasandersen/angularapplication:1.0.1`
https://github.com/docker/hub-feedback/issues/1222

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
