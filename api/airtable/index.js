const Airtable = require('airtable')
const secrets = require('../../config').AIRTABLE
const base = new Airtable({ apiKey: secrets.API_KEY }).base(secrets.BASE);

module.exports.getExperiences = (baseView = "Grid view") => new Promise((resolve, reject) => {
	base('experiences').select({
		view: baseView
	}).firstPage(function(err, records) {
    if (err) reject(err)
   	resolve(records.map(record => record.fields))
	})
})

module.exports.getMiscellaneous = () => new Promise((resolve, reject) => {
	base('misc').select({
		view: 'Grid view'
	}).firstPage(function(err, records) {
    if (err) reject(err)
  		resolve(records[0].fields)
	})
})