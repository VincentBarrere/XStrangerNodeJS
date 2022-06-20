const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes.js");
const eventRoutes = require("./routes/event.routes.js");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const { checkUser, requireAuth } = require("./middlewares/auth.middleware");
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//routes
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
