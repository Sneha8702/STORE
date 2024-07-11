import express from 'express'
import { Product } from '../models/Product.js';
const router = express.Router(); 
import { AdminRouter } from './auth.js';

router.post('/add',AdminRouter , async (req, res) => { 
    try {
        const { name, number,imageUrl } = req.body;
        const newProduct = new Product({
            name,
            number,
            imageUrl
        });
        await newProduct.save();
        return res.json({ added: true });
    } catch (err) {
        return res.json({ message: "Error adding product" });
    }
})

router.get('/products',async (req,res)=> {
    try{
        const products =  await Product.find()
        return res.json(products)
    }catch(err){
        return res.json(err)
    }
})

router.post('/update', async (req,res)=> {
    
    try {
         const { name,number ,imageUrl, id} = req.body;
         constbupdatedProduct = await Product.findByIdAndUpdate(id,{name,number,imageUrl},{new:true});
         if(!constbupdatedProduct){
             return res.status(404).json({message: "No product found with id"});
         }
         return res.json({updated: true,product: updatesProduct});
     } catch(err) {
         return res.status(500).json({message:"Error in updating"});
     }
 });

router.post('/delete', async (req,res)=> {
    console.log("hi")
    try {
         const {id} = req.body;
         constbupdatedProduct = await Product.findByIdAndDelete(id)
         if(!constbupdatedProduct){
             return res.status(404).json({message: "No product found with id"});
         }
         return res.json({updated: true,product: updatesProduct});
     } catch(err) {
         return res.status(500).json({message:"Error in updating"});
     }
 });

 

export { router as productRouter };
