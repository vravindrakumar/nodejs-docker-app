const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Docker Kubernetes CI/CD Pipeline with github Actions");
});

app.listen(3000, () => {
    console.log("Server Running");
});