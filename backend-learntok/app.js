const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello welcome to learnTok api");
});

const userRouter = require("./routes/routes");
app.use("/api", userRouter);

const port = 4040;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}\n\n\n`);
});
