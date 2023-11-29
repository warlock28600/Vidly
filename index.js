const express=require('express')
const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server is on')
})
app.listen(3000,()=>{
    console.log('server listen on 3000')
})
