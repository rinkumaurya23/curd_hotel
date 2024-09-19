const mongoose = require('mongoose')

const mongoURL = 'mongodb://127.0.0.1:27017/hotel';
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("connected", () => {
    console.log(`Connected to MongoDB Server`);
})
db.on("error", () => {
    console.log(`MongoDb  Connection Error`);
})
db.on("disConnected", () => {
    console.log(`MongoDB disconnected`)
});
module.exports = db;