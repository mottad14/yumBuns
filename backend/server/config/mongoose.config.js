const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yumbuns_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("You're connected to the YumBuns databse"))
    .catch(err=>console.log("Your database connection failed", err))