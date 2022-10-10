const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

const Order = require('../models/order')

//Hämta alla tjänster
router.get('/', async (req, res) => {
    try{
        const orders = await Order.find()
        res.send(orders)

    }
    catch(error){
        res.status(500).send({ msg: error.message })
    }
})

//Beställ en tjänst
router.post('/:id', async (req, res) => {
    try {

        //Kan olika personer boka samma tjänst samtidigt?

        const order = new Order({
            service: req.params.id,
            date: req.body.date
          //  cabin: 

        })

        const newOrder = await order.save()

        res.send(newOrder)
        console.log("Tjänst bokad.")



    } catch (error) {
        //console.log("")
        res.status(500).send({ msg: error.message })
    }
})

//Modifiera beställningen
router.patch('/:id', async (req, res) => {
    try{
        const modifiedOrder = await Order.findOneAndUpdate({_id: req.params.id}, req.body)

        if(!modifiedOrder){
            return res.status(404).send({msg: "Order not found."})
        }
        res.send({msg: "Order updated!", modifiedOrder: modifiedOrder})
    }

    catch(error){
        res.status(500).send({ msg: error.message })
    }


})


//Radera beställning
router.delete('/:id', async (req, res) => {

    try {
        const order = await Order.findOneAndDelete({ 
            _id: req.params.id, })

        
        if (!order) {
            return res.status(404).send({ msg: "Order not found." })
        }
        else { return res.send({ msg: "Order deleted." }) }


    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
})


module.exports = router