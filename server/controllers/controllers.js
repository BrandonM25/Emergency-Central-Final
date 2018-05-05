// Requiring node packages needed
const path = require("path");
const express = require("express");
const firebase = require("firebase");
const twilio = require('twilio');
const twilioInfo = require('../config/twilio');
const info = require("../models");
const db = require("../models");

// Declaring routes
const router = express.Router();

// From number for Twilio
const twilioNumb = '+19319960010';

// Line of code that handles the html routes or any invalid paths entered
router.get("/getInfo", function (req, res) {
    db.User.findOne({
        where: {
            userId: req.params.userId
        }
    }, function (data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/createUser", function (req, res) {
    db.User.create({
        userId: authUser,
        email: email,
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        phoneNumber: phoneNumber,
        emergencyContact: emergencyContact,
        emergencyNumber: emergencyNumber,
        medicalHistory: medicalHistory,
        currentMedications: currentMedications,
        allergies: allergies,
        doctorName: doctorName,
        hospitalChoice: hospitalChoice,
    }, function (data) {
        console.log(data);
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