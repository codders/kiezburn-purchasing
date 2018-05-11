# kiezburn-purchasing

> Receipt Processing and Purchasing for KiezBurn

## Prerequisites

You will need to install node (~> 8.0) to run and develop with nuxt.

You will also need to configure a new Firebase project to host and run this application if you have not already done so. Create a project with Google Firebase, and copy the config details for the Web application to the config section of `services/fireinit.js`

Enable Google Auth in the Firebase Dev Authentication Console to permit users to login with their Google accounts. You will also need to enable Storage and Hosting for the application, so that we can store receipts and host the app in the cloud.

## Build Setup

``` bash
# install dependencies
$ npm install

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

or alternatively

```
  npm run fdeploy
```
