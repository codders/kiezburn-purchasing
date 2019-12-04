# kiezburn-purchasing

> Receipt Processing and Purchasing for KiezBurn

## Prerequisites

You will need to install node (~> 8.0) to run and develop with nuxt.

> Simplest option is to use `nvm`, and run `nvm use` in this folder.

You will also need to configure a new Firebase project to host and run this application if you have not already done so. Create a project with Google Firebase, and copy the config details for the Web application to the config section of `services/fireinit.js`

Enable Google Auth in the Firebase Dev Authentication Console to permit users to login with their Google accounts. You will also need to enable Storage and Hosting for the application, so that we can store receipts and host the app in the cloud.

## Build Setup

```bash
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

```bash
npx firebase login
```

and initialise the project with

```bash
npx firebase init
```

The Firebase CLI will ask you some questions:

- Enable the following modules:
  - database
  - storage
  - hosting
- Select a default firebase project for this directory:
  - Choose the appropriate project from the list (probably kiezburn-receipts-2020-dev or similar)
- Database setup
  - Choose all the default options
- Hosting setup
  - `What do you want to use as your public directory? (public)`
    - Choose `dist`
  - `Configure as a single-page app (rewrite all urls to /index.html)? No`
    - Choose `y`
- Storage setup
  - Choose all the defailt options

You can then deploy your site with

```bash
npm run build
npx firebase deploy
```

or alternatively

```bash
npm run fdeploy
```
