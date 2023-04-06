const express = require("express");

const ideasRouter = express.Router();

ideasRouter.get("/", (req, res, next) => {
  res.status(200).send("Hello from /api/ideas");
});

ideasRouter.post("/", (req, res, next) => {
  res.status(200).send("Hello post from /api/ideas");
});

ideasRouter.get("/:ideaid", (req, res, next) => {
  res.status(200).send("Hello get from /api/ideas/:ideaid");
});

ideasRouter.put("/:ideaid", (req, res, next) => {
  res.status(200).send("Hello put from /api/ideas/:ideaid");
});

ideasRouter.delete("/:ideaid", (req, res, next) => {
  res.status(200).send("Hello delete from /api/ideas/:ideaid");
});

module.exports = ideasRouter;
