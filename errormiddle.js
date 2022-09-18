const err=(err,req,res,next)=>
{
    console.log(err)
    
    res.send('some error occured')

}

module.exports=err
