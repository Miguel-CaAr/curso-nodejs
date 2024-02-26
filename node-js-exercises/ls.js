const fs = require("node:fs");

fs.readdir(".", (error, files) => {
  error ? console.log("Ocurrio un error", err) : null;

  files.forEach((file) => {
    console.log(file);
  });
});
