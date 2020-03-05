// first we import our dependencies…
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';

// and create our instances
const app = express();
const router = express.Router();
var cors = require('cors');
app.use(cors());

// importing all api endpoints
var armorRoutes = require('./api/armor-routes');
var itemRoutes = require('./api/item-routes');
var raceRoutes = require('./api/race-routes');
var spellRoutes = require('./api/spell-routes');
var weaponRoutes = require('./api/weapon-routes');
var classRoutes = require('./api/class-routes');

// adding api endpoints to app object
app.use(armorRoutes);
app.use(itemRoutes);
app.use(raceRoutes);
app.use(spellRoutes);
app.use(weaponRoutes);
app.use(classRoutes);

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

// initializing db connection
mongoose.connect(getSecret('dbUri'), {useNewUrlParser: true});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

connection.once('open', () => {
  console.log("MongoDB connection established successfully");
});

export const db = connection.dungeoneer_dev;

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
