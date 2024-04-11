"use client";

import {
    CartProductType,
    SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImagesProps {
    cartProduct: CartProductType; // Corrected typo here
    product: any;
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImagesProps> = ({
    cartProduct, // Corrected typo here
    product,
    handleColorSelect,
}) => {
    return <div className="grid
    grid-cols-6
    gap-2
    h-full
    max-h-[500px]
    min-h-[300px]
    sm:min-h-[400px]
    ">
        <div className="flex
        flex-col
        items-center
        justify-center
        gap-4
        cursor-pointer
        border
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
        ">
         {product.images.map((image: SelectedImgType)  => { // Corrected typo here
            return (
               <div
               key={image.image}
               onClick={() => handleColorSelect(image)}
               className={`relative w-[80%]
               aspect-square rounded border-teal-300
               ${
                cartProduct.selectedImg.image === // Corrected typo here
                image.image
                   ? "border-[1.5px]"
                   : "border-none"
               }
               `}
               >
            <Image
            src={image.image}
            alt={image.image}
            fill
            className="object-contain"
            />
               </div>
            );
         })}     
        </div>
        <div className="col-span-5 relative
        aspect-sqaure">
            <Image fill src={cartProduct.selectedImg.image} alt={cartProduct.name} className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"/>

            

        </div>
    </div>
};

export default ProductImage; 
