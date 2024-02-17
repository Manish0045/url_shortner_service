const shortid = require("shortid");
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    try {
        const body = req.body;
        console.log(body.url);
        if (!body.url) {
            return res.status(400).send({ status: 400, message: "No url specified" });
        }

        const shortID = shortid();
        const newURL = await URL.create({
            shortId: shortID,
            redirectUrl: body.url,
            visitHistory: []
        });

        if (!newURL) {
            return res.status(500).send({ status: 500, message: "Failed to create short URL" });
        }

        return res.render('home', {
            id: shortID,
        })
        // return res.status(201).send({
        //     status: 201,
        //     id: shortID
        // });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}


async function handleUrlRedirect(req, res) {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate({
            shortId
        }, {
            $push: {
                visitHistory: { timestamp: Date.now() }
            }
        });

        if (!entry) {
            return res.status(404).send('Not Found');
        }

        console.log(entry);
        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function handleGetAnalytics(req, res) {
    try {
        const shortId = req.params.shortId;
        console.log(shortId);
        const result = await URL.findOne({ shortId });
        console.log(result);

        if (!result) {
            return res.status(404).send({ status: 404, message: "Short URL not found" });
        }

        const totalClicks = result.visitHistory.length;

        // const analytics = result.visitHistory.map(entry => entry.timestamp);
        const analytics = result.visitHistory;

        return res.send({
            status: 200,
            totalClicks,
            analytics
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}


async function handleHomepage(req, res) {
    try {
        const allUrl = await URL.find({});
        return res.render("home", {
            urls: allUrl,
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}


async function handleGetAllUrls(req, res) {
    const allUrl = await URL.find({});
    res.send({
        status: 200,
        data: allUrl
    })
}

module.exports = { handleGenerateNewShortURL, handleUrlRedirect, handleGetAnalytics, handleHomepage, handleGetAllUrls }