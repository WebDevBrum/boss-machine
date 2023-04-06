const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
app.use(cors());

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
 *  the frontend application to interact as planned with the api server
 */
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html

// Add middware for parsing request bodies here:

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require("./server/api");
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! " + err.message);
});

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}
