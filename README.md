# kiezburn-purchasing

> Receipt Processing and Purchasing for KiezBurn

## Prerequisites

You will need to install node (~> 8.0) to run and develop with nuxt.

```
  npm install firebase-tools
```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deployment Setup

Login to firebase with

```
  firebase login
```

and initialise the project with

```
  firebase init
```

You will want to enable the database, storage and hosting modules. There will be a lot of questions, but the defaults are fine here, except that you should set the *public* folder to 'dist'.

You can then deploy your site with

```
  npm run build
  firebase deploy
```

== Setup

Create a firebase project
Add the firebase auth details / config to services/firebase.js
Enable Google Auth in the Firebase Dev Authentication Console.

Enable Storage for the app
Enable hosting for the app
