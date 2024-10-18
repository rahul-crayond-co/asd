const express = require("express");
const itemRoutes = require("./routes/items");
const errorHandler = require("./middleware/errorHandler");
const notFoundRoute = require("./middleware/notFound");

const app = express();

app.use(express.json());

// routes
app.use("/api/items", itemRoutes);

// Error handler middlewares
app.use(notFoundRoute);
app.use(errorHandler);

app.listen(3000, () => console.log("Listening in the PORT 3000"));
