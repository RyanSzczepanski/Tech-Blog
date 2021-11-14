const express = require('express');
const { create } = require('express-handlebars');
const session = require(`express-session`);
const routes = require('./routes');

const app = express();
const hbs = create({ /* config */ });
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(routes);

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: 'My little secret!',
    resave: false,
    saveUninitialized: false
  })
);

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
  });
  