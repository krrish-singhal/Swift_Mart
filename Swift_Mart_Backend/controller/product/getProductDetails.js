const productModel = require("../../models/productModel")

const getProductDetails= async(req,res)=>{
    try {
        const {productId}=req.body
        const product=await productModel.findById(productId)

        res.json({
            message:"product",
            data:product,
            success:true,
            error:false,
        })
       
    
    } catch (err) {
        res.status(400).json({
            message:err.message|| err,
            success:false,
            error:true,
        })
        
    }

}

module.exports=getProductDetails