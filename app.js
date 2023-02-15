const express = require("express");
const routerConfig = require("./api/routes");

const app = express();
const port = 8080;

routerConfig.configureRoutes(app);

app.listen(port, () => {
  console.log(`[server]: Server rodando na URL: http://localhost:${port}`);
});
