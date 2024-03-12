const express = require("express");

const app = express();

app.disable("x-powered-by"); //Deshabilitar el header spam de express

app.get("/", (res, req) => {
  res.send({ message: "Hola mundo" });
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
