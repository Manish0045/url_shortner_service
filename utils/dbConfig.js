const mongoose = require('mongoose');

async function connectToDB(url) {
    try {
        const dbConnection = await mongoose.connect(url)
        console.log("Connected to the database!");
        console.log("HOST : ", dbConnection.connection.host);
        console.log("DATABASE : ", dbConnection.connection.name);
    } catch (error) {
        console.log("Error connecting to database..!", error);
        process.exit(1);
    }
}

module.exports = connectToDB;