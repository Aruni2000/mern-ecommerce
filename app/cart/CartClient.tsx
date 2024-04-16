"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";

const CartClient = () => {
    const { cartProducts , handleClearCart, cartTotalAmount} = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="text-2xl">Your cart is empty</div>
                <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                    <MdArrowBack />
                    <span>Start shopping</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="text-slate-800">
            <Heading title="Shopping Cart" center />
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 text-slate-800">
            <div className="col-span-2
    justify-self-start">PRODUCT</div>
    <div className="justify-self-center">PRICE</div>
    <div className="justify-self-center">QUANYITY</div>
    <div className="justify-self-end">TOTAL</div>
    <div>
        {cartProducts && 
        cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item}/>;
        })}
           </div>
            </div>
            <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                <div className="w-[90px]">
                <Button label="Clear Cart" onClick={() => {
                    handleClearCart();
                }} small outline />
                </div>
                <div className="text-sm flex flex-col gap-1 items-end">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <p className="text-slate-500">
                        Taxes and shipping calculated at checkout
                    </p>
                    <Button label="Checkout" onClick={() => {}} />
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                        <span>Continue shopping</span>
                    </Link>
                </div>
            </div>
            </div>
     
    );
};

export default CartClient;
