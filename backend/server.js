const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = 8080;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: "mysecret",
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// app.use(cookieParser());

app.get("/api/counter", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
  } else {
    req.session.counter = 1;
  }

  res.json({ counter: req.session.counter });

  //res.json({ counter: req.session.counter });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
