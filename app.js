const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.listen(8000, ()=>{
    console.log('Server running in http://localhost:8000')
})

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
//app.use(express.urlencoded({extended:true}))
//app.use(cookieParser)


app.use('/',require('./routes/router'))