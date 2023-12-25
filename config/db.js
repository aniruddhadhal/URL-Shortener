const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connect To Mongodb Database ${db.connection.host}`)

    } catch (error) {

        console.log(`Error in Mongodb ${error}`)

    }

}

module.exports = connectDB;