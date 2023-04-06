const express = require("express");
const apiRouter = express.Router();
const minionsRouter = require("./minions.js");
const ideasRouter = require("./ideas.js");
const meetingsRouter = require("./meetings.js");

apiRouter.get("/", (req, res, next) => {
  res.status(200).send("Hello from /api");
});

apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);

module.exports = apiRouter;
