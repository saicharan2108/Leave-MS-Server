const express = require('express')
const Register = require("../models/register.model")
const router =express.Router()

router.post('/api/users', async (req, res) => {
    console.log(req.body);
    // res.send(req.body)
    try {
        const register = await Register.create(req.body)
        res.status(200).json(register)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
})


router.get('/api/get/users', async (req, res) => {
    console.log(req.body);
    // res.send(req.body)
    try {
        const users = await Register.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
})

router.get('/api/get/:id', async (req, res) => {
    console.log(req.body);
    // res.send(req.body)
    try {
        const {id} = req.params
        const user = await Register.findById(id)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
})

router.get('/api/get/', async (req, res) => {
    console.log(req.body);
    // res.send(req.body)
    try {
        const {id} = req.params
        const user = await Register.findById(req.params.id)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
})


router.put('/api/update/:id', async (req, res) => {
    console.log(req.body);
    // res.send(req.body)
    try {
        const {id} = req.params
        const user = await Register.findByIdAndUpdate(id, req.body)

        if (!user){
            return res.status(404).json({message: 'User not found'})
        }

        res.status(200).json(user)



    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
})


.delete('/api/delete/:id', async (req, res) => {
    console.log(req.body);
    // res.send(req.body)
    try {
        const {id} = req.params
        const user = await Register.findByIdAndDelete(id, req.body)

        if (!user){
            return res.status(404).json({message: 'User not found'})
        }

        res.status(200).json("User deleted")



    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
})



