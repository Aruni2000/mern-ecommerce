"use client";

import { CartContextProviderComponent } from "@/hooks/useCart";

interface CartProviderProps {
    children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({
    children }) => {
    return <CartContextProviderComponent>{children}</CartContextProviderComponent> ;
}
 
export default CartProvider;