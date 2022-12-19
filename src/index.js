const express = require("express")
const path = require("path")

const public = path.join(__dirname, "public")

const app = express()

const port = 9004

app.use(express.static(public))
console.log(public)

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port)