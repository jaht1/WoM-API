const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

const Service = require('../models/service')

router.post('/upload', async (req, res) => {
    try {
        const service = new Service({
            service: req.body.service

        })

        const newService = await service.save()

        res.send(newService)
        console.log("Tjänst publicerad.")



    } catch (error) {
        //console.log("")
        res.status(500).send({ msg: error.message })
    }
})


module.exports = router