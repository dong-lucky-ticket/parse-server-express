const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const server = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
  cloud: './cloud/main.js', // Path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// // Start server
// await server.start();

// // Serve the Parse API on the /parse URL prefix
// app.use('/parse', server.app);

// app.listen(1337, function() {
//   console.log('parse-server-example running on port 1337.');
// });

async function bootstrap() {
  // Start server
  await server.start();

  // Serve the Parse API on the /parse URL prefix
  app.use('/parse', server.app);

  app.listen(1337, function() {
    console.log('parse-server-example running on port 1337.');
  });
}
bootstrap()

// api
// https://docs.parseplatform.org/rest/guide/#updating-users
