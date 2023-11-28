import neo4j from "neo4j-driver";
import express from "express";

import routes from "./routes/index.js";
import { config } from "./config.js";

const driver = neo4j.driver(
  config.neo4j.link,
  neo4j.auth.basic("neo4j", "buffers-boats-sorts")
);

export const session = driver.session({ database: "neo4j" });

const app = express();
app.use(express.json());

app.use(routes);
app.all("*", (req, res) => {
  res.status(404).send("This page doesn't exist");
});

app.listen(3000, () => {
  console.log("The app has been started at 3000 port");
});
