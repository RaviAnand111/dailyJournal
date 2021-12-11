const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
// All Routes
app.use(require("./Routes/route"));

// Server listening at port 9000
app.listen(port, () => {
  console.log("Server running at port 9000");
});
