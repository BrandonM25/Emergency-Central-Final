// Requiring node packages needed
const path = require("path");
const express = require("express");
const firebase = require("firebase");
const Twilio = require('twilio');
const twilioInfo = require('../config/twilio');
const info = require("../models");
const db = require("../models");

// Declaring routes
const router = express.Router();

// Numbers for Twilio
const twilioNumb = '+19319960010';
const emergServices = '+19315059152';

// Line of code that handles the html routes or any invalid paths entered
router.post("/getInfo", function (req, res) {
    console.log(req.body);
    db.User.findOne({
        where: {
            userId: req.body.id
        }
    })
    .then(function (dbUser) {
        console.log(dbUser.dataValues);
        res.json(dbUser.dataValues);
    });
});

router.post("/createUser", function (req, res) {
    console.log(req.body);
    db.User.create({
            userId: req.body.userId,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            sex: req.body.sex,
            phoneNumber: req.body.phoneNumber,
            emergencyContact: req.body.emergencyContact,
            emergencyNumber: req.body.emergencyNumber,
            medicalHistory: req.body.medicalHistory,
            currentMedications: req.body.currentMedications,
            allergies: req.body.allergies,
            doctorName: req.body.doctorName,
            hospitalChoice: req.body.hospitalChoice
        })
        .then(function (dbUser) {
            res.json(dbUser.dataValues);
        });
});

router.post("/updateInfo", function (req, res) {
    info.pullUserInfo(req.params.id, function (data) {
        res.json(data);
    });
});

router.post("/emergency", function (req, res) {
    db.User.findOne({
            where: {
                userId: req.body.id
            }
        })
        .then(function (dbUser) {
            const returnedInfo = dbUser.dataValues;
            const client = new Twilio(twilioInfo.accountSid, twilioInfo.authToken);
            client.messages.create({
                    body: returnedInfo.firstName + " " + returnedInfo.lastName + " is contacting emergency services. Here is this person's information. Medical History: " + returnedInfo.medicalHistory
                    + " Current Medication: " + returnedInfo.currentMedications + " Allergies: " + returnedInfo.allergies + " Physician's Name: " + returnedInfo.doctorName
                    + " Choice of Hospital: " + returnedInfo.hospitalChoice,
                    to: emergServices, // Text this number
                    from: twilioNumb // From a valid Twilio number
                })
                .then((message) => console.log(message.sid),
                client.messages.create({
                    body: returnedInfo.emergencyContact + ", " + returnedInfo.firstName + " " + returnedInfo.lastName + " has contacted emergency services and has listed you as their emergency contact to be alerted when this happened.",
                    to: '+1' + returnedInfo.emergencyNumber.replace(/\D/g,''), // Text this number
                    from: twilioNumb // From a valid Twilio number
                })
                .then((message) => console.log(message.sid)));

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