import "dotenv/config";
import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});