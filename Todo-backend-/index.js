require('dotenv').config()
const app = require('./app')
const port = 5000;
// const port = process.env.PORT

app.listen(port,()=>{
    console.log(`running on port ${port}`)
})