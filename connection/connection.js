const express = require('express');
const exphbs = require('express-handlebars');
const session = require(`express-session`);

const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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
  