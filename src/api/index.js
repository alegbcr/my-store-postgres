const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const { config } = require('../../config/config');

// Inicio del proyecto
const app = express();

app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

// routing
routerApi(app);

// middleware
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// app Listener
app.listen(process.env.PORT, () => {
  console.log(
    `I'm listening on port 3000 & the enviroment is ${config.env} ${config.isProd}`
  );
});
