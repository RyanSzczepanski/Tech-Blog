const express = require('express');
const session = require(`express-session`);
const { create } = require('express-handlebars');

const routes = require('./routes');

const sequelize = require("./connection/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const hbs = create({ /* config */ });
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: 'My little secret!',
    resave: false,
    saveUninitialized: false
  })
);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });