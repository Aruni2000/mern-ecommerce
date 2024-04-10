"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300px-8 rounded py-2 px-3';

const  SetQuanity: React.FC<SetQtyProps> = ({
    cartCounter,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease,
}) => {
    return (
        <div className="flex gap-8 items-center">
            {cartCounter? null : 
            <div className="font-semibold">QUNTITY: </div>}
     <div className="flex gap-4 items-center text-base">
           <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
           <div>{cartProduct.quantity}</div>
           <button onClick={handleQtyIncrease}className={btnStyles}>+</button> 
           </div>
           </div>
        
    )
}

 
export default SetQuanity;