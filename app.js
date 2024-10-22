const express = require('express')
const engines = require('consolidate')
const config = require('./config')

const apiRoutes = require('./api/index')

const app = express()

app.use('/api', apiRoutes)
app.get('/resume', (req, res) => {
  return apiRoutes.get("/api/resume")
})
app.engine('njk', engines.nunjucks)
app.set('view engine', 'njk')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.render('pages/index', {
	appname: config.APPNAME
  })
})

app.listen(config.PORT, () => {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`)
})