import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import type { Product } from "../types/product";





    type CartProviderProps = {
      children: React.ReactNode;
    };

   type CartItem = Product & {
    quantity: number;
};
    type CartContextType = {
      cart: CartItem[];
      setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
      showOrderConfirm: boolean;
      setShowOrderConfirm : React.Dispatch<React.SetStateAction<boolean>>;
    };

 

const CartContext = createContext<CartContextType | null>(null);

  export function CartProvider({ children } : CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showOrderConfirm, setShowOrderConfirm] = useState(false);
      return (
          <CartContext.Provider value={{cart,setCart,showOrderConfirm, setShowOrderConfirm}}>    {/*context values are obj. so array values are destructure as obj and send.*/}
              {children}                                   {/*eg. {cart : cart, setCart : setCart} so, in ProductCard rec
                                                                receive as obj destructure by const {cart,setCart}}useCarat()*/}
          </CartContext.Provider>
      );
  }
  export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
      throw new Error("useCart must be used within CartProvider");
    }

    return context;
  }




export default CartContext;