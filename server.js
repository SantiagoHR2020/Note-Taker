// Dependencies

const express = require("express");
const api = require("./routes/api");
const view = require("./routes/view");

//  Set up the Express App

const app = express();
const PORT = process.env.PORT || 3000

// middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api",api);
app.use(express.static("public"))
app.use("/",view)




app.listen(PORT,()=>console.log("listing on "+PORT));

