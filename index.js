const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectToDB = require('./utils/dbConfig')
const { checkAuth } = require("./middlewares/auth");

const staticRoutes = require('./routes/staticRouter');
const globalRoutes = require('./routes/global');

const app = express();
const PORT = 2299;
const dbUrl = "mongodb+srv://manishsahani345:manish123@cluster0.orwswxj.mongodb.net/url_shortener"

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '50kb' }));
app.use(cookieParser());


app.use('/', checkAuth, staticRoutes);
app.use('/api', globalRoutes)


connectToDB(dbUrl)
    .then(() => {
        app.listen(PORT, () => console.log("listening on port", PORT));
    }).catch((err) => {
        console.log(err);
        process.exit(1);
    })