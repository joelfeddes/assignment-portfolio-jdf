const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'index',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000;


app.get('/', (req, res) => res.render('index')) 

app.get('/views', (req, res) => {
})


app.listen(port, () => {
  console.log( `Express started on http://localhost:${port}` +
    '; press Ctrl-C to terminate.' )
})
