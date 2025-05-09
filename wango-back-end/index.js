import express from "express";
const app = express();
const port = 9000;
import authRoute from "./routes/auth.route.js";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to my Express app");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
