const express = require("express");
const cors = require("cors");
const session = require("express-session");

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
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.get("/api/counter", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
  } else {
    req.session.counter = 1;
  }

  res.json({ counter: req.session.counter });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "hello world!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
