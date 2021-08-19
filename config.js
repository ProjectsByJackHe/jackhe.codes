if (process.env.NODE_ENV != 'production') require('dotenv').load()

module.exports = {
	APPNAME: process.env.APPNAME || 'App Template',
    PORT: process.env.JACKHE_PORT || 5000,
    DEVMODE: (process.env.NODE_ENV != 'production'),
    AIRTABLE: {
    	API_KEY: process.env.AIRTABLE_API_KEY,
    	BASE: process.env.AIRTABLE_BASE
    }
}