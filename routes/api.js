// load Data
const db = require("../db/db.json");


// Routing

module.exports =function(app){

app.get("/api/notes", function(req, res){
res.json(db)
});

};

