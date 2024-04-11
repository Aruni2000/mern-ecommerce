"use client";

import React from "react";
import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

interface SetColorProps {
    images: SelectedImgType[];
    cartProduct: CartProductType;
    handleColorSelect: (value: SelectedImgType) => void;
}
const SetColor: React.FC<SetColorProps>= ({
    images,
    cartProduct,
    handleColorSelect,
}) => {
    return ( 
        <div>
            <div className="flex gap-4 items-center"> 
                <span className="font-semibold">SELECT IMAGE:</span>
                <div className="flex gap-1">
                    {images.map((image) => {
                        return (
                            <div 
                                key={image.image}
                                onClick={() => handleColorSelect(image)}
                                className={`
                                    h-5
                                    w-5
                                    rounded-full
                                    border-teal-300
                                    flex
                                    items-center
                                    justify-center
                                    ${cartProduct.selectedImg.image === image.image ? "border-[1.5px]" : "border-none"}
                                `}
                            >
                                <div 
                                    style={{ background: image.image}} className="h-3 w-3 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default SetColor;