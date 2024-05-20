// importing required dependencies 
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

//sets port
const app = express();
const PORT = process.env.PORT || 3001;

// session object with secret, cookie, and store 
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  //middleware 
  app.use(session(sess));
  // Parsing incoming JSON and URL-encoded data
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // serving static files such as images from public directory
  app.use(express.static("public"));
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");
  
  // middleware with a different session object
  app.use(
    session({
      secret: process.env.SECRET,
      store: new SequelizeStore({ db: sequelize }),
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(routes);
  // Syncing sequelize models with database and starting server
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  });
