// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyB3ptPBOjbWRGOV1_Kuh0grUvD_0XjwhAw",
    authDomain: "product-listing-6c3f2.firebaseapp.com",
    databaseURL: "https://product-listing-6c3f2.firebaseio.com",
    projectId: "product-listing-6c3f2",
    storageBucket: "product-listing-6c3f2.appspot.com",
    messagingSenderId: "141004856839"
  }
};
