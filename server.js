import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(` <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Ai And ChatBot</title>
      </head>
      <body style="display: flex; justify-content: center; align-items: center">
        <h1 style="color: #493d8a; text-decoration: #493d8a wavy underline;font-size:5vmax;text-align: center;">
         Lets Learn ChatBot Together
        </h1>
      </body>
    </html>`);
});

app.get("/:name", (req, res) => {
  const name = req.params.name;

  res.send({ message: `Welcome ${name} on board` });
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});