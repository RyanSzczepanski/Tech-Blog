const express = require('express');
const session = require(`express-session`);
const { create } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./connection/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(
  session(sess)
);

const helpers = require('./utils/helpers');
const hbs = create({ helpers });

// Sets Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
app.use(routes);



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });