"use client";

import { Rating } from "@mui/material";
import React from "react";

interface ProductDetailsProps {
    product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = 
( {product}) => {

    const productRating = product.reviews.reduce
        ((acc:number, item:any) => item.rating + acc, 0) /
        product.reviews.length

        const Horizontal = () => {
            return <hr className="w-[30%] my-2" />;
        };
        

    return (
        <div className="grid grid-cols-1 md:grid-cols-2
        gap-12">
            <div>Images</div>
            <div>
            <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                </div>
                <Horizontal />
                <div className="text-justify  text-slate-700">{product.description}</div>
                <Horizontal />
                <div>
                    <span className="font-semibold  text-slate-700">CATEGORY:</span>
                    {product.category}
                </div>
                <Horizontal />
                <div>
                    <span className="font-semibold  text-slate-700">WEIGHT:</span>
                    {product.weight}
                </div>
                <Horizontal />
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "In stock" : "Out of stock"}
                </div>
                <Horizontal />
                <div>color</div>
                <Horizontal />
                <div>Quantity</div>
                <Horizontal />
                <div>Add to Cart</div>

            </div>
        </div>
    );
};
 
export default ProductDetails;