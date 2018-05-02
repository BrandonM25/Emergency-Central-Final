// Requiring node packages needed
const path = require("path");
const express = require("express");
const firebase = require("firebase");
const twilio = require('twilio');
const twilioInfo = require('../config/twilio');

const router = express.Router();

const info = require("../models/info");
const twilioNumb = '+19319960010';

// Line of code that handles the html routes or any invalid paths entered

router.get("/getInfo", function (req, res) {
    info.pullUserInfo(req.params.id, function (data) {
        res.json(data);
    });
});

router.post("/createUser", function (req, res) {
    info.createUser(req.params.id, function (data) {
        res.json(data);
    });
});

router.post("/updateInfo", function (req, res) {
    info.pullUserInfo(req.params.id, function (data) {
        res.json(data);
    });
});

router.post("/emergency", function (req, res) {
    info.pullUserInfo(req.params.id, function (data) {
        console.log(data);
        const client = new twilio(twilioInfo.accountSid, twilioInfo.authToken);

        client.messages.create({
                body: placeholder,
                to: emergencyContactNumb, // Text this number
                from: twilioNumb // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));

        client.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                from: twilioNumb,
                to: emergServices
            })
            .then(call => console.log(call.sid))
            .done();
    });
});

module.exports = router;