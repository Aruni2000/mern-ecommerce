"use client";

import { Rating } from "@mui/material";
import exp from "constants";
import { useState } from "react";

interface ProductDetailsProps{
    product: any;
}
export type CartProductType = {
    name: string,
    description: string,
    category: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number
}



export type SelectedImgType ={
    image: string
}


const Horizontal = () => {
    return <hr className="w-[30%] my-2"/>
};



const ProductDetails: React.FC<ProductDetailsProps> =
({ product }) => {

    const [cartProduct, setCardProduct] =
    useState<CartProductType>({
    id: product.string,
    name: product.string,
    description: product.string,
    category: product.string,
    selectedImg: product.SelectedImgType,
    quantity: 1,
    price: product.number

} );

    const productRating = product.reviews.reduce
    ((acc:number, item:any) => item.rating + acc, 0) /
    product.reviews.length

    return (
    <div className="grid grid-cols-1 md:grid-cols-2
    gap-12">
        <div>Images</div>
        <div className="flex flex-col gap-1
        text-slate-500 text-sm">
            <h2 className="text-3xl font-medium
            text-slate-700">{product.name}</h2>
            <div className="flex items-center gap-2">
                <Rating value={productRating} readOnly/>
            </div>
            <Horizontal/>
            <div className="text-justify">{product.
            description}</div>
              <Horizontal/>
              <div>
                <span className="font-semibold">CATEGORY:</span>
                {product.category}
              </div>
              <div>
                <span className="font-semibold">WEIGHT:</span>
                {product.weight}
              </div>
              <div className={product.inStock ?
                "text-teal-400" : "text-rose-400"}>
              {product.inStock ? "In stock" : "Out of stock"}
              </div>
              <Horizontal/>
              <div>
                quantity
              </div>
              <Horizontal/>
              <div>Add to cart</div>

        </div>
      </div>
    );
};
    
export default ProductDetails;