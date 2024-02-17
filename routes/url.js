const express = require('express');
const
    {
        handleGenerateNewShortURL,
        handleUrlRedirect,
        handleGetAnalytics,
        handleHomepage,
        handleGetAllUrls
    } = require('../controllers/url')
const router = express.Router();

router
    .post('/', handleGenerateNewShortURL)
    .get('/', handleGetAllUrls)
    .get('/:shortId', handleUrlRedirect)
    .get('/analytics/:shortId', handleGetAnalytics)
    .get('/home', handleHomepage)

module.exports = router;