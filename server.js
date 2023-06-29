const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use(express.static("build"));;

// start express server on port 3000
app.listen(3000, () => {
  console.log("server started on port 3000");
});