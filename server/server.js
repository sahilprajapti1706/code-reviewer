require("dotenv").config();
const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
app.use("/ai",aiRoutes)

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(3000, () => {
    console.log("Server is running")
}) 