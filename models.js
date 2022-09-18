const mongoose=require('mongoose')

const schema=mongoose.Schema({
    featured:{
       type :Boolean,
       default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    name:{
     type:String,
     require:[true,'product name must be provided']
    },
    price:{
        type:Number,
        require:[true,'product price must be provided']
    },
    company:{
        type:String,
        require:[true,'company name must be provided']
    }

}
)
const Products=new mongoose.model('product',schema)

module.exports=Products

 