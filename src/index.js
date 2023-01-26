const express = require("express")
const path = require("path")

const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const public = path.join(__dirname, "public")

const app = express()

const port = 9004

app.use(express.static(public))

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/bot', (req, res) => {
     proxy.web(req, res, { target: 'http://localhost:9010' });
 })
app.listen(port)