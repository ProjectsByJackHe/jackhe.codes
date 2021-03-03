const express = require('express')
const bodyParser = require('body-parser')
var router = express.Router()

router.use(express.static('public'))
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const config = require('../config')

const AirtableHandler = require('./airtable/index')

var availableRoutes = [
  {
    title: 'Experiences',
    routename: '/experiences',
    methods: ["GET"],
    description: [
      "Gets all experiences listed in Airtable base."
    ]
  },
  {
    title: 'Miscellaneous',
    routename: '/miscellaneous',
    methods: ["GET"],
    description: [
      "Gets the one record that helps fill out the card on Nathan."
    ]
  }
]

router.get('/', (req, res) => {
  res.render('pages/api-entry', {
    appname: config.APPNAME,
    routes: availableRoutes
  })
})

const internalServerError = 
    (res, reason, source) => res.status(500).send({ error: `Error retrieving data from ${source}.`, reason: reason })
const badUserRequestError = 
    (res, reason) => res.status(400).send({ error: `Invalid user request to ${route} API endpoint.`, reason: reason })

router.get(availableRoutes[0].routename, (req, res) => {
  try { AirtableHandler.getExperiences().then(answer => res.send(answer)) }
  catch (e) { return internalServerError(res, availableRoutes[0].routename, e) }
})

router.get(availableRoutes[1].routename, (req, res) => {
  try { AirtableHandler.getMiscellaneous().then(answer => res.send(answer)) }
  catch (e) { return internalServerError(res, availableRoutes[0].routename, e) }
})


//nothing matched our api requests, return 404
router.get('*', (req, res) => res.status(404).send({ error: 'Invalid API usage. Response not found.' }))

module.exports = router