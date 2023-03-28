const express = require("express");
const userRoute = require("./routes/user");

const app = express();
app.use(express.json());

app.use("/api", userRoute);

app.listen(5000, () => {
    console.log("server is listening on port ", 5000);
})