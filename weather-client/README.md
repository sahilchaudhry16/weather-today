Chiptole Account Linking APP


Below you will find some information on how to perform common tasks.<br>

The Front end code is available inside the client folder. You could run it in production mode or dev mode. Please contact sravichandran@deloitte.com for the two env file .env.development and .env.production for the client folder.

[Available Scripts](#available-scripts)
  - [yarn start](#npm-start)
  - [yarn test](#npm-test)
  - [yarn run build](#npm-run-build) - Production Code
  - [yarn run publish](#npm-run-publish) - Builds Production code and deploys to express server inside the `public` folder which is exposed as a static directory for the express server

  - [eb deploy] at the sever folder for pushing the whole app to Beanstalk after running yarn run publish on the `client` folder

  - .ebignore file is used to avoid folders being pushed to Beanstalk . Warning!!  do not do a eb deploy without using yarn run publish (Creates static FE folder `public` for web app)



  

