const express       =require('express')
const mongoose      =require('mongoose')
const morgan        =require('morgan')
const bodyParser    =require('body-parser')
const Authrouter    =require('./routes/auth')

const EmployeeRouter = require('./routes/employee')
mongoose.connect('mongodb://127.0.0.1:27017/testdb', {useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
const datacon = ()=>{
    console.log('Database Connection Established')
}
db.once('open',datacon)

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/employee',EmployeeRouter)
app.use('/api',Authrouter)