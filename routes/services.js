const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

const Service = require('../models/service')

//Ladda upp tjänster
router.post('/upload', async (req, res) => {
    try {
        const service = new Service({
            name: req.body.name

        })

        const newService = await service.save()

        res.send(newService)
        console.log("Tjänst publicerad.")



    } catch (error) {
        //console.log("")
        res.status(500).send({ msg: error.message })
    }
})

//Hämta alla tjänster
router.get('/', async (req, res) => {
    try{
        const services = await Service.find()
        res.send(services)

    }
    catch(error){
        res.status(500).send({ msg: error.message })
    }
})

//Modifiera tjänst
router.patch('/:id', async (req, res) => {
    try{
        const modifiedService = await Service.findOneAndUpdate({_id: req.params.id}, req.body)

        if(!modifiedService){
            return res.status(404).send({msg: "Service not found."})
        }
        res.send({msg: "Service updated!", modifiedService: modifiedService})
    }

    catch(error){
        res.status(500).send({ msg: error.message })
    }


})

//Radera tjänst
router.delete('/:id', async (req, res) => {

    try {
        const service = await Service.findOneAndDelete({ 
            _id: req.params.id, })

        
        if (!service) {
            return res.status(404).send({ msg: "Service not found." })
        }
        else { return res.send({ msg: "Service deleted." }) }


    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
})

module.exports = router