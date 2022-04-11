const express = require('express')
const router = express.Router()
const PurchaseSchema = require("../models/Purchase")


router.get("/get-purchases" , async(req,res)=>{
    let purchases = PurchaseSchema.find({} , function(err , purchases){
        if(err){
            res.json({msg:err})
        }else{
            res.json({purchases})
        }
    })
})

router.post("/add-purchases" , async(req,res)=>{
    // console.log(req.body)
    var invoice_date = req.body.invoice_date;
    var unit_price = req.body.unit_price;
    var quantity = req.body.quantity;
    var total_amount = req.body.total_amount;
    var supplier_id = req.body.supplier_id;
    var item_id = req.body.item_id;

    var newPurchase = new PurchaseSchema({
        invoice_date:invoice_date,
        unit_price:unit_price,
        quantity:quantity,
        total_amount:total_amount,
        supplier_id:supplier_id,
        item_id:item_id,

    })
    newPurchase.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Purchase Created!"})
        }
    })

})

module.exports = router;