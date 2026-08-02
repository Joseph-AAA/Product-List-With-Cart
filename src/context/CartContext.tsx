import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import type { Product } from "../types/prodcut";





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
        addToCart: (product: Product) => void;
        increaseQty: (id: number) => void;
        decreaseQty: (id: number) => void;
    };
           

const CartContext = createContext<CartContextType | null>(null);

  export function CartProvider({ children } : CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showOrderConfirm, setShowOrderConfirm] = useState(false);

    function addToCart(product: Product) {
            const cartItem = cart.find((item) => item.id === product.id);

            if (cartItem) {
              setCart((prev) =>
                prev.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              );
            } else {
              setCart((prev) => [
                ...prev,
                { ...product, quantity: 1 },
              ]);
            }
          }

    
       function decreaseQty(id: number) {
                const cartItem = cart.find((item) => item.id === id);
                const itemQty = cartItem?.quantity ?? 0;

                if (itemQty > 1) {
                  setCart((prev) =>
                    prev.map((item) =>
                      item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    )
                  );
                } else {
                  setCart((prev) =>
                    prev.filter((item) => item.id !== id)
                  );
                }
              }
       
        function increaseQty(id: number) {
          setCart((prev) =>
            prev.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
          }

      



      return (
          <CartContext.Provider value={{cart,setCart,showOrderConfirm, setShowOrderConfirm, addToCart, increaseQty, decreaseQty}}>    {/*context values are obj. so array values are destructure as obj and send.*/}
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