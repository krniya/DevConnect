const mongoose = require("mongoose");
const config = require("config")
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        })
        console.log("DB Connected")
    }
    catch(error) {
        console.error(error.message)
        process.exit(1)                     // Exit Process with Error
    }
}

module.exports = connectDB;
