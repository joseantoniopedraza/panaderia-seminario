import express from "express";

const app = express();
const port = 8080;

app.use(express.json());

// Define las rutas antes de app.listen
app.get("/pedidos", (req, res) => {
  res.status(200).send("its alive!!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
