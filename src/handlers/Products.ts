
import { Request, Response } from "express";
import Product from "../models/Products-models";

export async function createProduct(req:Request , res:Response) {

    const product = await Product.create(req.body)

    res.json({data:product})

}


export async function getProducts(req:Request , res:Response) {

    const product = await Product.findAll()

    res.json({data:product})

}



export async function getProductsByID(req:Request , res:Response) {
    const {id} = req.params
    const product = await Product.findByPk(id)

    res.json({data:product})
}


export async function updateProduct(req:Request , res:Response){
    const {id} = req.params
    const product = await Product.findByPk(id)

    await product.update(req.body)
   await product.save()

    res.json({data:product})

}


export async function updateAvailability (req: Request, res: Response)  {
    const { id } = req.params;
  
    const product = await Product.findByPk(id);
  
    
  
    //Actualizar
    product.availability = !product.dataValues.availability
    await product.save()
    console.log(req.body);
  
    res.json({data:product})
  };


  export async function deleteProducts(req: Request, res: Response) {
    const { id } = req.params;
  
    const product = await Product.findByPk(id);
  
        await product.destroy()

        res.json({message:"Cagaste"})
  }