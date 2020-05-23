const app = require('express')()

app.listen(3000, () => {
    console.log('Backend executando...')
})

const consign = require('consign')
const db = require('./config/db')
app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

