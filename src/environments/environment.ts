// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCJLDReGK-jyGHClxK37anAm_yNdSdVBC0",
    authDomain: "taskapp-64d11.firebaseapp.com",
    databaseURL: "https://taskapp-64d11.firebaseio.com",
    projectId: "taskapp-64d11",
    storageBucket: "taskapp-64d11.appspot.com",
    messagingSenderId: "409950601754"
  }
};
