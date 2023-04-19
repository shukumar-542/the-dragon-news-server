const express = require('express')
const category = require('./data/categories.json')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
    res.send('the dragon news')
})

app.get('/category',(req,res)=>{
    res.send(category)
})

app.listen(port, () => {
    console.log(`The dragon news listening port: ${port}`)
})