const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API'
  },
  host: 'cse-341-heni.onrender.com',
  // host:  'localhost:8080',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.jsaon
swaggerAutogen(outputFile, endpointsFiles, doc);

// run server after it is generated - comment code about when use this
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
// await import('./index.js);
// })''
