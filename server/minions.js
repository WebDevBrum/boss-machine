const express = require("express");
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db.js");
const { minionSchema, minionUpdateSchema, validate } = require("./schema.js");

const minionsRouter = express.Router();

minionsRouter.param("minionid", (req, res, next, id) => {
  let minionId = id;

  try {
    const minion = getFromDatabaseById("minions", id);
    if (minion) {
      req.minion = minion;
      req.id = minionId;
      next();
    } else {
      res.status(404).send("Minion with id not found");
    }
  } catch (err) {
    return next(err);
  }
});

minionsRouter.get("/", (req, res, next) => {
  try {
    const allMinions = getAllFromDatabase("minions");
    if (allMinions.length > 0) {
      res.status(200).send(allMinions);
    } else {
      res.status(404).send("Not found");
    }
  } catch (err) {
    return next(err);
  }
});

minionsRouter.post("/", validate(minionSchema), (req, res, next) => {
  try {
    if (req.schemaError) {
      res.status(404).send("Request invalid");
    } else {
      const newMinion = addToDatabase("minions", req.value);
      res.status(200).send({ added: newMinion });
    }
  } catch (err) {
    return next(err);
  }
});

minionsRouter.get("/:minionid", (req, res, next) => {
  try {
    res.status(200).send(req.minion);
  } catch (err) {
    return next(err);
  }
});

minionsRouter.put(
  "/:minionid",
  validate(minionUpdateSchema),
  (req, res, next) => {
    try {
      if (req.schemaError) {
        res.status(404).send("Request invalid");
      } else {
        const updatedMinion = updateInstanceInDatabase("minions", req.value);
        res.status(200).send({ added: updatedMinion });
      }
    } catch (error) {
      return next(error);
    }
  }
);

minionsRouter.delete("/:minionid", (req, res, next) => {
  try {
    deleteFromDatabasebyId("minions", req.id);
    res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

module.exports = minionsRouter;
