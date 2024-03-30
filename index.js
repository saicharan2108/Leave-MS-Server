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

app.get('/', (req, res) => {
    res.send("Sample GET request API");
});


app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only requests from this origin
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


app.post('/api/applied-leaves/:id', async (req, res) => {
    try {
        const leaves = await Leave.find({userName: req.body.userName});
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
        console.log(userId)
        const avleaves = await Leave.find({userId:userId});
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