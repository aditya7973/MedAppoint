const mongooseConnectToDb=require('./db')
const express = require('express')
var cors = require('cors')
mongooseConnectToDb();

const app = express()
app.use(cors())
const port = process.env.PORT || 5000

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/contact',require('./Routes/contact.js'))
app.use('/api/appointment',require('./Routes/appointment.js'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})