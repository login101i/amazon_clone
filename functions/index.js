const functions = require('firebase-functions');
const express = require("express")
const cors = require('cors')
const stripe = require("stripe")(secretyKey)


// API


// App config

const app = express()




// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())


// Api routes

app.get('/', (request, response) => response.status(200).send("hello word"))
app.get('/mk', (request, response) => response.status(200).send("hello "))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log("Payment request recieved hihih>>>>>>>>>>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: 'usd'
    })
    // ok -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})



// LIsten command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-mckrus/us-central1/api

