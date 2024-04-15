"use client"
import { useState } from 'react';
import Link from "next/link";
import { CartProductType } from "../product/ProductDetails";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuanity from "../components/products/SetQuanity";
import { useCart } from '@/hooks/useCart';

interface ItemContentProps{
    item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const {handleRemoveProductFromCart} = useCart ()
    const [quantity, setQuantity] = useState(item.quantity);
    const [total, setTotal] = useState(item.price * item.quantity);

    const handleQtyIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setTotal(item.price * newQuantity);
    };

    const handleQtyDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setTotal(item.price * newQuantity);
        }
    };

    return (
        <div className="grid grid-cols-3 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 ">
            <div className="col-span-8 justify-self-start flex gap-9 md:gap-4"> 
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[70px] aspect-square">
                        <Image src={item.selectedImg.image}
                        alt={item.name}
                        fill
                        className="object-contain"/>
                    </div>
                </Link>
                
                <div className="flex flex-col justify-between ">
                    <Link href={`/product/${item.id}`}>
                        {truncateText(item.name)} </Link>
                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button className="text-slate-500
                        underline" onClick={() => handleRemoveProductFromCart(item)}>Remove
                        </button>
                    </div>
                </div>
                
            <div className="justify-self-center">
                {formatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuanity
                   cartCounter={true}
                   cartProduct={item}
                   handleQtyIncrease={handleQtyIncrease}
                   handleQtyDecrease={handleQtyDecrease}
                   />
            </div>
            <div className="justify-self-end font-semibold">
                {formatPrice(total)}
            </div>
            </div>
            </div >
    );
};
 
export default ItemContent;
