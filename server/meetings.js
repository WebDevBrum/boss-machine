const express = require("express");
const { getAllFromDatabase } = require("./db.js");

const meetingsRouter = express.Router();

meetingsRouter.get("/", (req, res, next) => {
  try {
    const allMeetings = getAllFromDatabase("meetings");
    if (allMeetings.length > 0) {
      res.status(200).send(allMeetings);
    } else {
      res.status(404).send("Not found");
    }
  } catch (err) {
    return next(err);
  }
});

meetingsRouter.post("/", (req, res, next) => {
  res.status(200).send("Hello POST from /api/meetings");
});

meetingsRouter.delete("/", (req, res, next) => {
  res.status(200).send("Hello DELETE from /api/meetings");
});

module.exports = meetingsRouter;
