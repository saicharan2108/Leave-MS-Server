const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const LoginSchema = require('./models/login.model');
const Register = require('./models/register.model');
const Leave = require("./models/leave.model")
const Workload = require('./models/workload.model');
const app = express();
const uri = "mongodb+srv://pavankumar:pavankumar2024@cluster0.vnzza6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)

  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(3030, () => {
        console.log('Server running on port 3030');
    });
  })
  .catch((err) => {  
    console.log('MongoDB Connect Failed!', err);
  });


const schedule = {
    "BEC071008": {
      "MON2": {"class": "4th sem A & B IT", "sub": "PEHV-A"},
      "MON4": {"class": "2th sem EE B", "sub": "PPS-B"},
      "MON6": {"class": "4th sem A & B IT", "sub": "PEHV-B"},
      "TUE1": {"class": "2th sem EE B", "sub": "PPS-EE-B LAB"},
      "TUE2": {"class": "2th sem EE B", "sub": "PPS-EE-B LAB"},
      "TUE3": {"class": "2th sem EE B", "sub": "PPS-EE-B LAB"},
      "TUE5": {"class": "2th sem EE B", "sub": "PPS-B"},
      "WED2": {"class": "4th sem A & B IT", "sub": "PEHV-A"},
      "WED4": {"class": "2th sem EE B", "sub": "PPS-B"},
      "THU3": {"class": "4th sem A & B IT", "sub": "PEHV-B"},
      "THU4": {"class": "2th sem IT A", "sub": "PPS-IT-A LAB"},
      "THU5": {"class": "2th sem IT A", "sub": "PPS-IT-A LAB"},
      "THU6": {"class": "2th sem IT A", "sub": "PPS-IT-A LAB"},
      "FRI3": {"class": "4th sem A & B IT", "sub": "PEHV-A"},
      "FRI4": {"class": "4th sem A & B IT", "sub": "PEHV-B"},
      "SAT5": {"class": "2th sem EE B", "sub": "PPS-B"}
    },
    "BEC071010": {
      "MON1": {"class": "6TH SEM IT", "sub": "IIOT-3A-LAB"},
      "MON2": {"class": "6TH SEM IT", "sub": "IIOT-3A-LAB"},
      "MON3": {"class": "6TH SEM IT", "sub": "IIOT-3A-LAB"},
      "MON4": {"class": "4TH SEM IT", "sub": "DAA"},
      "MON6": {"class": "6TH SEM IT", "sub": "IIOT"},
      "TUE1": {"class": "6TH SEM IT", "sub": "IIOT"},
      "TUE5": {"class": "4TH SEM IT", "sub": "DAA"},
      "WED1": {"class": "6TH SEM IT", "sub": "IIOT-3A-LAB"},
      "WED2": {"class": "6TH SEM IT", "sub": "IIOT-3A-LAB"},
      "WED3": {"class": "6TH SEM IT", "sub": "IIOT-3A-LAB"},
      "WED5": {"class": "4TH SEM IT", "sub": "DAA"},
      "WED6": {"class": "4TH SEM IT", "sub": "DAA"},
      "THU1": {"class": "6TH SEM IT", "sub": "IIOT-3B-LAB"},
      "THU2": {"class": "6TH SEM IT", "sub": "IIOT-3B-LAB"},
      "THU3": {"class": "6TH SEM IT", "sub": "IIOT-3B-LAB"},
      "THU5": {"class": "6TH SEM IT", "sub": "IIOT"},
      "FRI4": {"class": "6TH SEM IT", "sub": "IIOT-3B-LAB"},
      "FRI5": {"class": "6TH SEM IT", "sub": "IIOT-3B-LAB"},
      "FRI6": {"class": "6TH SEM IT", "sub": "IIOT-3B-LAB"},
      "SAT2": {"class": "4TH SEM IT", "sub": "DAA"},
      "SAT5": {"class": "6TH SEM IT", "sub": "IIOT"}
    },
    "BEC071012": {
      "MON1": {"class": "4TH SEM", "sub": "PP"},
      "MON4": {"class": "4TH SEM", "sub": "DBMS-2A-LAB"},
      "MON5": {"class": "4TH SEM", "sub": "DBMS-2A-LAB"},
      "MON6": {"class": "4TH SEM", "sub": "DBMS-2A-LAB"},
      "TUE1": {"class": "4TH SEM", "sub": "PP-2B-LAB"},
      "TUE2": {"class": "4TH SEM", "sub": "PP-2B-LAB"},
      "TUE3": {"class": "4TH SEM", "sub": "PP-2B-LAB"},
      "TUE6": {"class": "4TH SEM HONORS", "sub": "ADS"},
      "WED2": {"class": "4TH SEM", "sub": "PP"},
      "WED4": {"class": "4TH SEM", "sub": "PP-2A-LAB"},
      "WED5": {"class": "4TH SEM", "sub": "PP-2A-LAB"},
      "WED6": {"class": "4TH SEM", "sub": "PP-2A-LAB"},
      "THU2": {"class": "4TH SEM", "sub": "PP"},
      "THU6": {"class": "4TH SEM HONORS", "sub": "ADS"},
      "FRI1": {"class": "4TH SEM", "sub": "PP-2B-LAB"},
      "FRI2": {"class": "4TH SEM", "sub": "PP-2B-LAB"},
      "FRI3": {"class": "4TH SEM", "sub": "PP-2B-LAB"},
      "FRI6": {"class": "4TH SEM HONORS", "sub": "ADS"},
      "SAT1": {"class": "4TH SEM", "sub": "PP-2A-LAB"},
      "SAT2": {"class": "4TH SEM", "sub": "PP-2A-LAB"},
      "SAT3": {"class": "4TH SEM", "sub": "PP-2A-LAB"},
      "SAT5": {"class": "4TH SEM", "sub": "PP"},
      "SAT6": {"class": "4TH SEM HONORS", "sub": "ADS"}
    },
    "BEC071013": {
      "MON3": {"class": "2ND SEM IT", "sub": "EG"},
      "MON4": {"class": "2ND SEM IT", "sub": "DMS-2A-LAB"},
      "MON5": {"class": "2ND SEM IT", "sub": "DMS-2A-LAB"},
      "MON6": {"class": "2ND SEM IT", "sub": "DMS-2A-LAB"},
      "TUE3": {"class": "2ND SEM IT", "sub": "DMS-2A-LAB"},
      "TUE4": {"class": "2ND SEM IT", "sub": "DMS"},
      "TUE5": {"class": "2ND SEM IT", "sub": "DMS"},
      "TUE6": {"class": "2ND SEM IT", "sub": "DMS"},
      "WED3": {"class": "2ND SEM IT", "sub": "DMS-2B-LAB"},
      "WED4": {"class": "2ND SEM IT", "sub": "DMS-2B-LAB"},
      "WED5": {"class": "2ND SEM IT", "sub": "DMS-2B-LAB"},
      "WED6": {"class": "2ND SEM IT", "sub": "DMS-2B-LAB"},
      "THU3": {"class": "2ND SEM IT", "sub": "DMS"},
      "THU4": {"class": "2ND SEM IT", "sub": "DMS"},
      "THU5": {"class": "2ND SEM IT", "sub": "DMS"},
      "THU6": {"class": "2ND SEM IT", "sub": "DMS"},
      "FRI1": {"class": "2ND SEM IT", "sub": "DMS-2A-LAB"},
      "FRI2": {"class": "2ND SEM IT", "sub": "DMS-2A-LAB"},
      "FRI3": {"class": "2ND SEM IT", "sub": "DMS-2A-LAB"},
      "FRI4": {"class": "2ND SEM IT", "sub": "DMS"},
      "FRI5": {"class": "2ND SEM IT", "sub": "DMS"},
      "FRI6": {"class": "2ND SEM IT", "sub": "DMS"}
    },
    
        "BEC071017": {
          "MON4": { "class": "6th sem IT B", "sub": "ML" },
          "MON5": { "class": "6th sem IT A", "sub": "CD" },
          "TUE3": { "class": "6th sem IT B", "sub": "ML" },
          "TUE4": { "class": "6th sem IT", "sub": "ML-B1-LAB" },
          "TUE5": { "class": "6th sem IT", "sub": "ML-B1-LAB" },
          "TUE6": { "class": "6th sem IT", "sub": "ML-B1-LAB" },
          "WED1": { "class": "6th sem IT", "sub": "ML-A1-LAB" },
          "WED2": { "class": "6th sem IT", "sub": "ML-A1-LAB" },
          "WED3": { "class": "6th sem IT", "sub": "ML-A1-LAB" },
          "WED5": { "class": "6th sem IT", "sub": "ML" },
          "THU5": { "class": "6th sem IT A", "sub": "CD" },
          "FRI3": { "class": "6th sem IT A", "sub": "CD" },
          "FRI4": { "class": "6th sem IT", "sub": "ML-B2-LAB" },
          "FRI5": { "class": "6th sem IT", "sub": "ML-B2-LAB" },
          "FRI6": { "class": "6th sem IT", "sub": "ML-B2-LAB" },
          "SAT1": { "class": "6th sem IT B", "sub": "ML" },
          "SAT3": { "class": "6th sem IT A", "sub": "CD" },
          "SAT4": { "class": "6th sem IT", "sub": "ML-A2-LAB" },
          "SAT5": { "class": "6th sem IT", "sub": "ML-A2-LAB" },
          "SAT6": { "class": "6th sem IT", "sub": "ML-A2-LAB" }
        },
        "BEC071018": {
          "MON4": { "class": "6th sem IT", "sub": "CNS" },
          "TUE1": { "class": "4TH SEM IT", "sub": "WT-2B-LAB" },
          "TUE2": { "class": "4TH SEM IT", "sub": "WT-2B-LAB" },
          "TUE3": { "class": "4TH SEM IT", "sub": "WT-2B-LAB" },
          "TUE6": { "class": "6th sem IT", "sub": "CNS" },
          "THU1": { "class": "6TH SEM IT", "sub": "IIOT-3B-LAB" },
          "THU2": { "class": "6TH SEM IT", "sub": "IIOT-3B-LAB" },
          "THU3": { "class": "6TH SEM IT", "sub": "IIOT-3B-LAB" },
          "THU4": { "class": "4TH SEM IT", "sub": "WT-2B-LAB" },
          "THU5": { "class": "4TH SEM IT", "sub": "WT-2B-LAB" },
          "THU6": { "class": "4TH SEM IT", "sub": "WT-2B-LAB" },
          "FRI2": { "class": "6th sem IT", "sub": "CNS" },
          "FRI4": { "class": "6TH SEM IT", "sub": "IIOT-3B-LAB" },
          "FRI5": { "class": "6TH SEM IT", "sub": "IIOT-3B-LAB" },
          "FRI6": { "class": "6TH SEM IT", "sub": "IIOT-3B-LAB" },
          "SAT2": { "class": "6th sem IT", "sub": "CNS" }
        },
        "BEC071019": {
          "MON5": { "class": "2th sem IT", "sub": "PPS-A" },
          "TUE1": { "class": "2th sem IT", "sub": "PPS-A" },
          "TUE4": { "class": "6TH SEM IT", "sub": "DWDM" },
          "WED3": { "class": "2th sem IT", "sub": "PPS-A" },
          "WED4": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "WED5": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "WED6": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "THU2": { "class": "6TH SEM IT", "sub": "DWDM" },
          "THU4": { "class": "2TH SEM IT", "sub": "PPS-IT-A-LAB" },
          "THU5": { "class": "2TH SEM IT", "sub": "PPS-IT-A-LAB" },
          "THU6": { "class": "2TH SEM IT", "sub": "PPS-IT-A-LAB" },
          "FRI1": { "class": "6TH SEM IT", "sub": "DBMS LAB 2B" },
          "FRI2": { "class": "6TH SEM IT", "sub": "DBMS LAB 2B" },
          "FRI3": { "class": "6TH SEM IT", "sub": "DBMS LAB 2B" },
          "FRI5": { "class": "6TH SEM IT", "sub": "DWDM" },
          "SAT1": { "class": "6TH SEM IT", "sub": "DWDM" },
          "SAT5": { "class": "2th sem IT", "sub": "PPS-A" }
        },
        "BEC071020": {
          "MON1": { "class": "4th sem EE", "sub": "PP-EE-2B LAB" },
          "MON2": { "class": "4th sem EE", "sub": "PP-EE-2B LAB" },
          "MON3": { "class": "4th sem EE", "sub": "PP-EE-2B LAB" },
          "MON4": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "MON5": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "MON6": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "TUE1": { "class": "4th sem IT", "sub": "PP-IT-2B LAB" },
          "TUE2": { "class": "4th sem IT", "sub": "PP-IT-2B LAB" },
          "TUE3": { "class": "4th sem IT", "sub": "PP-IT-2B LAB" },
          "WED2": { "class": "6th sem IT", "sub": "COI" },
          "WED4": { "class": "4th sem EE", "sub": "PP-EE-2B LAB" },
          "WED5": { "class": "4th sem EE", "sub": "PP-EE-2B LAB" },
          "WED6": { "class": "4th sem EE", "sub": "PP-EE-2B LAB" },
          "THU3": { "class": "4th sem EE", "sub": "PP" },
          "THU4": { "class": "6th sem IT", "sub": "COI" },
          "FRI1": { "class": "4th sem IT", "sub": "PP-IT-2B LAB" },
          "FRI2": { "class": "4th sem IT", "sub": "PP-IT-2B LAB" },
          "FRI3": { "class": "4th sem IT", "sub": "PP-IT-2B LAB" },
          "FRI5": { "class": "4th sem EE", "sub": "PP" },
          "SAT2": { "class": "6th sem IT", "sub": "COI" },
          "SAT4": { "class": "4th sem EE", "sub": "PP" },
          "SAT5": { "class": "4th sem EE", "sub": "PP" }
        },
        "BEC071004": {
          "MON4": { "class": "2ND sem IT", "sub": "DMS-A" },
          "MON6": { "class": "2ND sem IT", "sub": "DMS-B" },
          "TUE3": { "class": "2ND sem IT", "sub": "DMS-A" },
          "TUE5": { "class": "2ND sem IT", "sub": "DMS-B" },
          "WED4": { "class": "2ND sem IT", "sub": "DMS-A" },
          "THU2": { "class": "2ND sem IT", "sub": "DMS-B" },
          "FRI5": { "class": "2ND sem IT", "sub": "DMS-A" },
          "SAT5": { "class": "2ND sem IT", "sub": "DMS-B" }
        },
        "BEC071005": {
          "MON1": { "class": "6TH sem IT", "sub": "FSD-A LAB" },
          "MON2": { "class": "6TH sem IT", "sub": "FSD-A LAB" },
          "MON3": { "class": "6TH sem IT", "sub": "FSD-A LAB" },
          "MON5": { "class": "6TH sem IT", "sub": "FSD" },
          "TUE1": { "class": "6TH sem IT", "sub": "COI" },
          "TUE4": { "class": "6TH sem IT", "sub": "FSD-B LAB" },
          "TUE5": { "class": "6TH sem IT", "sub": "FSD-B LAB" },
          "TUE6": { "class": "6TH sem IT", "sub": "FSD-B LAB" },
          "WED1": { "class": "6TH sem IT", "sub": "FSD" },
          "WED4": { "class": "6TH sem IT", "sub": "COI" },
          "THU1": { "class": "6TH sem IT", "sub": "FSD-B LAB" },
          "THU2": { "class": "6TH sem IT", "sub": "FSD-A LAB" },
          "THU3": { "class": "6TH sem IT", "sub": "FSD-A LAB" },
          "THU6": { "class": "6TH sem IT", "sub": "COI" },
          "FRI2": { "class": "6TH sem IT", "sub": "FSD" },
          "SAT1": { "class": "4TH SEM IT", "sub": "DBMS A LAB" },
          "SAT2": { "class": "4TH SEM IT", "sub": "DBMS A LAB" },
          "SAT3": { "class": "4TH SEM IT", "sub": "DBMS A LAB" },
          "SAT4": { "class": "6TH sem IT", "sub": "FSD-B LAB" },
          "SAT5": { "class": "6TH sem IT", "sub": "FSD-B LAB" },
          "SAT6": { "class": "6TH sem IT", "sub": "FSD-B LAB" }
        },
        "BEC071007": {
          "MON2": { "class": "2ND sem IT", "sub": "PPS-B" },
          "MON4": { "class": "6th sem IT", "sub": "CNS-B" },
          "TUE1": { "class": "4th sem EE", "sub": "PP-EE-B LAB" },
          "TUE2": { "class": "4th sem EE", "sub": "PP-EE-B LAB" },
          "TUE3": { "class": "4th sem EE", "sub": "PP-EE-B LAB" },
          "TUE4": { "class": "6TH sem IT", "sub": "FSD-3B LAB" },
          "TUE5": { "class": "6TH sem IT", "sub": "FSD-3B LAB" },
          "TUE6": { "class": "2th sem IT", "sub": "PPS-B" },
          "WED2": { "class": "2th sem IT", "sub": "PPS-B" },
          "THU1": { "class": "6TH sem IT", "sub": "FSD-3B LAB" },
          "THU2": { "class": "6TH sem IT", "sub": "FSD-3B LAB" },
          "THU3": { "class": "6TH sem IT", "sub": "FSD-3B LAB" },
          "THU6": { "class": "6th sem IT", "sub": "CNS-B" },
          "FRI1": { "class": "6th sem IT", "sub": "CNS-B" },
          "FRI4": { "class": "4th sem IT", "sub": "PP-IT-B LAB" },
          "FRI5": { "class": "4th sem IT", "sub": "PP-IT-B LAB" },
          "FRI6": { "class": "4th sem IT", "sub": "PP-IT-B LAB" },
          "SAT1": { "class": "2th sem IT", "sub": "PPS-B" },
          "SAT4": { "class": "6th sem IT", "sub": "CNS-B" }
        },
        "BEC071009": {
          "MON1": { "class": "6TH sem IT", "sub": "FSD-3A LAB" },
          "MON2": { "class": "6TH sem IT", "sub": "FSD-3A LAB" },
          "MON3": { "class": "6TH sem IT", "sub": "FSD-3A LAB" },
          "MON4": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "MON5": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "MON6": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "TUE3": { "class": "6TH sem IT", "sub": "FSD" },
          "TUE5": { "class": "4TH sem IT", "sub": "WT" },
          "TUE6": { "class": "4TH sem IT", "sub": "WT" },
          "WED1": { "class": "4TH sem IT", "sub": "WT" },
          "WED4": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "WED5": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "WED6": { "class": "4TH SEM IT", "sub": "WT-2A-LAB" },
          "THU1": { "class": "6TH sem IT", "sub": "FSD" },
          "THU4": { "class": "4TH sem IT", "sub": "WT" },
          "FRI2": { "class": "4TH sem IT", "sub": "WT" },
          "FRI6": { "class": "6TH sem IT", "sub": "FSD" },
          "SAT4": { "class": "6TH sem IT", "sub": "FSD-3A LAB" },
          "SAT5": { "class": "6TH sem IT", "sub": "FSD-3A LAB" },
          "SAT6": { "class": "6TH sem IT", "sub": "FSD-3A LAB" }
        },
        "BEC071001": {
          "MON2": { "class": "6TH sem IT", "sub": "DWDM-B" },
          "TUE2": { "class": "6TH sem IT", "sub": "DWDM-B" },
          "TUE4": { "class": "4TH sem IT", "sub": "DAA-A" },
          "WED3": { "class": "6TH sem IT", "sub": "DWDM-B" },
          "THU1": { "class": "4TH sem IT", "sub": "DAA-A" },
          "FRI5": { "class": "4TH sem IT", "sub": "DAA-A" },
          "FRI6": { "class": "4TH sem IT", "sub": "DAA-A" },
          "SAT4": { "class": "4TH sem IT", "sub": "DAA-A" },
          "SAT6": { "class": "6TH sem IT", "sub": "DWDM-B" }
        },
        "BEC071002": {
          "MON1": { "class": "4TH sem IT", "sub": "CD" },
          "MON6": { "class": "6TH sem IT", "sub": "ML" },
          "TUE2": { "class": "6TH sem IT", "sub": "ML" },
          "TUE4": { "class": "6TH sem IT", "sub": "ML-B1-LAB" },
          "TUE5": { "class": "6TH sem IT", "sub": "ML-B1-LAB" },
          "TUE6": { "class": "6TH sem IT", "sub": "ML-B1-LAB" },
          "WED1": { "class": "6TH sem IT", "sub": "ML-A1-LAB" },
          "WED2": { "class": "6TH sem IT", "sub": "ML-A1-LAB" },
          "WED3": { "class": "6TH sem IT", "sub": "ML-A1-LAB" },
          "WED4": { "class": "4TH sem IT", "sub": "CD" },
          "THU4": { "class": "6TH sem IT", "sub": "ML" },
          "FRI1": { "class": "6TH sem IT", "sub": "ML" },
          "FRI3": { "class": "4TH sem IT", "sub": "CD" },
          "FRI4": { "class": "6TH sem IT", "sub": "ML-B2-LAB" },
          "FRI5": { "class": "6TH sem IT", "sub": "ML-B2-LAB" },
          "FRI6": { "class": "6TH sem IT", "sub": "ML-B2-LAB" },
          "SAT3": { "class": "4TH sem IT", "sub": "CD" },
          "SAT4": { "class": "6TH sem IT", "sub": "ML-A2-LAB" },
          "SAT5": { "class": "6TH sem IT", "sub": "ML-A2-LAB" },
          "SAT6": { "class": "6TH sem IT", "sub": "ML-A2-LAB" }
        },
        "BEC071003": {
          "MON1": { "class": "6TH sem IT", "sub": "PP" },
          "MON5": { "class": "4TH sem IT", "sub": "DBMS" },
          "TUE2": { "class": "4TH sem IT", "sub": "DBMS" },
          "TUE4": { "class": "4TH sem IT", "sub": "DBMS" },
          "TUE6": { "class": "4TH sem IT", "sub": "DBMS" },
          "WED3": { "class": "6TH sem IT", "sub": "PP" },
          "WED6": { "class": "4TH sem IT", "sub": "DBMS" },
          "THU1": { "class": "6TH sem IT", "sub": "PP" },
          "THU3": { "class": "4TH sem IT", "sub": "DBMS" },
          "THU5": { "class": "4TH sem IT", "sub": "DBMS" },
          "FRI1": { "class": "6TH sem IT", "sub": "PP" },
          "FRI4": { "class": "4TH sem IT", "sub": "DBMS" },
          "SAT2": { "class": "4TH sem IT", "sub": "DBMS" },
          "SAT4": { "class": "4TH sem IT", "sub": "DBMS" }
        }
      }
      
  
 
  

app.get('/', (req, res) => {
    res.send("Sample GET request API");
});


app.use(cors());
const corsOptions = {
    origin: '*', // Allow only requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  app.use(cors(corsOptions));
// Middleware 
app.use(express.json());

// Register User
app.post('/api/register', async (req, res) => {
    try {
        const register = await Register.create(req.body);
        res.status(200).json(register);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login User
app.post('/api/login', async (req, res) => {
    try {
        const { gmail, password } = req.body;
        const user = await Register.findOne({ gmail });
        console.log(user)

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await Register.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Other routes for updating, deleting, etc. (Similar to what you already have)
app.post('/api/apply-leave', async (req, res) => {

 
    try {

        const leave = await Leave.create(req.body);
        res.status(201).json(leave);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/api/applied-leaves/', async (req, res) => {
    try {
        const {userId} = req.body
        const leaves = await Leave.find({userId: userId});
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/api/pending-leaves', async (req, res) => {
    try {
        const pendingLeaves = await Leave.find({ leaveStatus: 'Pending' });
        res.status(200).json(pendingLeaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/api/users', async (req, res) => {
    try {
        const users = await Register.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/get/leaves', async (req, res) => {
    try {
        const {userId} = req.body
        const avleaves = await Leave.find({userId:userId});
        res.status(200).json(avleaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/get/pending/leaves', async (req, res) => {
    try {
        const avleaves = await Leave.find({leaveStatus:'Pending'});
        res.status(200).json(avleaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/get/hodapproved/leaves', async (req, res) => {
    try {
        const avleaves = await Leave.find({leaveStatus:'HOD-Approved'});
        res.status(200).json(avleaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




//Workload to Database
app.post('/api/workload-add', async (req, res) => {
    try {
        const register = await WorkLoad.create(req.body);
        res.status(200).json(register);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update leave status by user ID
app.put('/api/update-leave-status/', async (req, res) => {
    try {
        const { leaveStatus, userId } = req.body;
        const leave = await Leave.findOneAndUpdate({ userId }, { leaveStatus:leaveStatus }, { new: true });
        
        if (!leave) {
            return res.status(404).json({ message: 'Leave not found' });
        }

        res.status(200).json(leave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//Workload 
// Function to get weekdays between two dates
function calculateWeekdays(startDate, endDate) {
    const weekdays = [];
    let currentDate = new Date(startDate);
    endDate = new Date(endDate);
    while (currentDate <= endDate) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            weekdays.push(currentDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase());
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return weekdays;
}

app.post('/api/workload/schedule', (req, res) => {
    const { userId, startDate, endDate } = req.body;
    const weekdays = calculateWeekdays(startDate, endDate);
    console.log(weekdays)
    const userLeaveData = schedule[userId];

    if (!userLeaveData) {
        res.status(400).json({ error: 'Invalid userId' });
        return;
    }

    const result = {};
    weekdays.forEach(weekday => {
        const periods = Object.keys(userLeaveData).filter(key => key.includes(weekday));
       

        if (periods.length > 0) {
            result[weekday] = periods.map(period => ({
                period: period.slice(-1),
                class: userLeaveData[period].class,
                sub: userLeaveData[period].sub
            }));
        }
    });

    res.json(result);
});

// Route to handle user input for start and end date

