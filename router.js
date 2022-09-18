const express=require('express')
const router= new express.Router()
const products=require('./products')

const Products=require('./models')
require('express-async-errors')


router.post('/v1/products',async(req,res)=>
{
    // throw new Error
 await Products.deleteMany()
  const result=await Products.create(products)
    res.json(result)

})


router.get('/v1/products',async(req,res)=>
{
    console.log(req.query)

   const {name,price,featured,company,sort,field,limit,page}=req.query
  const object={}

  if(name)
  {
    object.name={$regex:name,$options:'i'}

  }

  if(price)
  {
    object.price=price
  }

  if(featured)
  {
    if(featured==='true')
   object.featured=true
   else
   object.featured=false
  }

if(company)
{
    object.company=company
}
let result= Products.find(object)

if(sort)
{
 const sortlist=sort.split(',').join(' ')
 result=result.sort(sortlist)
 
}
else{
    result=result.sort('createdAt')
}

if(field)
{
    const sel=field.split(',').join(' ')
    result=result.select(sel)

}
if(limit)
{
    result=result.limit(limit)
}
if(page)
result=result.skip(page)

const products=await result
res.send(products)



})


router.get('/v1/productstatic',async(req,res)=>
{
    // const result=await Products.find({name:{$regex:'Va',$options:'i'}})
    const result=await Products.find({}).sort('name -price')
    // const result=await Products.find({}).sort('-name -price')
    // const {sort}=req.query

    // sort= sort.split(",").join(' ');
        // const result=await Products.find({}).sort(sort)

        // const limit=Number(req.query.limit)

// const result=Products.find({},req.query)

// const result=await Products.find({price:{$gt:25,$lt:100}}).limit(Number(req.query.limit))

// const result=await Products.find(req.query)

res.send(result)


})

module.exports=router
