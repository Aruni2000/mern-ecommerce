import { CartProductType } from "@/app/product/ProductDetails";
import { createContext, use, useCallback, useContext, useEffect, useState } from "react";
import {toast} from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleClearCart: () => void
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    children?: React.ReactNode; // It's better to explicitly define children prop for clarity
}

// Renamed the component to avoid naming conflict
export const CartContextProviderComponent = ({ children }: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    console.log('qty', cartTotalQty)
    console.log('amount',cartTotalAmount)

    useEffect(() => {

        const cartItems: any = localStorage.getItem('eShopCartItems')
        const cartProducts: CartProductType[] | null = JSON.parse(cartItems)
        setCartProducts(cartProducts)
    }, []);

    useEffect (() => {
        const getTotals = () => {
            if(cartProducts) {
                const {total, qty} = cartProducts?.reduce(
                    (acc, item) => {
                        const itemTotal = item.price*item.
                        quantity;
    
                        acc.total += itemTotal;
                        acc.qty += item.quantity;
    
                        return acc;
                    },
                    {
                        total: 0,
                        qty:0,
                    }
                );
                 setCartTotalQty(qty)
                 setCartTotalAmount(total)
            }
         
        };
        getTotals();
    }, [cartProducts]);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (prev) {
                // Check if the product already exists in the cart
                const existingProductIndex = prev.findIndex((item) => item.id === product.id);
                if (existingProductIndex > -1) {
                    // Update the quantity of the existing product
                    updatedCart = prev.map((item, index) => {
                        if (index === existingProductIndex) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    });
                } else {
                    // Add the new product to the cart
                    updatedCart = [...prev, { ...product, quantity: 1 }];
                }
            } else {
                updatedCart = [{ ...product, quantity: 1 }];
            }

            toast.success("Product added to cart");
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
            return updatedCart;
        });
        // Update the total quantity in the cart
        setCartTotalQty((prevQty) => prevQty + 1);
    }, []);

    const handleClearCart = useCallback(() => {
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("eShopCartItems", JSON.stringify(null));

    },[cartProducts]);
    
    const handleRemoveProductFromCart = useCallback((
        product: CartProductType
    ) =>  {
        if(cartProducts){
            const fillteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(fillteredProducts)
            toast.success("Product removed");
            localStorage.setItem('eShopCartItems', JSON.stringify(fillteredProducts))

        }

    } , 
    [cartProducts]);

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleClearCart
        
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProviderComponent");
    }

    return context;
};
