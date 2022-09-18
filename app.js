const express=require('express')
const app=express()
const err=require('./errormiddle')
const router=require('./router')
const notfound=require('./notfound')
require('dotenv').config()
app.use(router)
const connect=require('./conn')

app.use(express.json())

app.get('/',(req,res)=>{

    res.json({success:true})
})
const PORT=process.env.PORT||3000


const start=async()=>{

try {
    await connect(process.env.MONGO_URL)
    app.listen(PORT,()=>{
        console.log(`port is listening to ${PORT}`)
     })

} catch (error) 
    {
        res.send('some error')
    }

}

start()



app.use(notfound)
app.use(err)









