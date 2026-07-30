import { useCart } from "../context/CartContext";
import orderConfirm from "/assets/images/icon-order-confirmed.svg";



function OrderConfirm(){
     const {cart ,setCart,  setShowOrderConfirm} = useCart();
      
     function resetAll() {
            setShowOrderConfirm(false);
            setCart([])
     }

     const total = cart.reduce((total,item)=>{
            return (total + item.price*item.quantity)
       },0)
   

    return(
        
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
            <div className=" w-full flex items-center justify-center p-4 ">
                <div className="  max-h-[90vh] overflow-y-auto bg-[hsl(20,50%,98%)] rounded-2xl w-[90%] max-w-xl p-5 ">
                                        <div className="w-full   h-20 grid items-center mb-25 pl-3 mt-5 ">
                                            <img src={orderConfirm} alt="checked.png"/>
                                            <h1 className="text-[hsl(14,65%,9%)] mt-4 font-bold text-4xl">
                                                Order Confirmed
                                            </h1>
                                            <p className="text-[hsl(14,25%,72%)]">We hope you enjoy your food</p>
                                        </div>

                                    
                                     {
                                        cart.map((item)=>{
                                            return(
                                                   <div className=" w-full h-20  flex items-center flex-col mb-3">
                                                        <div className="w-[85%] flex justify-center h-full  border-b-2  border-[hsl(13,31%,94%)]">
                                                            <div className="w-full grid  min-h-20  gap-1 pb-5 rounded-2xl">
                                                                    <label className="pt-1 font-bold">{item.name}</label>
                                                                <div className="flex gap-5">
                                                                        <span className="text-[hsl(14,86%,42%)] font-bold text-lg">{item.quantity}x</span>
                                                                        <span className="text-[hsl(14,25%,72%)]  text-lg">@ {item.price.toFixed(2)}</span>
                                                                        <span  className="text-[hsl(7,20%,60%)] font-bold text-lg">${(item.quantity * item.price).toFixed(2)}</span>
                                                                    </div>
                                                                    
                                                            </div>

{/* *************************************************************Delete Button*********************************************************************************************************************** */}
                                                          
                                                       </div>
                                                    </div>
                                            )
                                        })
                                     }
 
{/* *************************************************************Order Total / Carbon-neutural / Confrim Order *********************************************************************************************************************** */}
                                    
                                     <div className="flex flex-col w-full items-center gap-5 mt-5 mb-5">
                                        <div className="flex justify-between w-[90%] pl-5 pr-5 h-15  items-center ">
                                            <span className="text-[hsl(12,20%,44%)]">Order Total</span>
                                            <span className="font-bold text-3xl">${total.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-center items-center gap-2 w-[85%] pl-5 pr-5 h-15 bg-[hsl(13,31%,94%)] rounded-xl ">
                                            <img src="/assets/images/icon-carbon-neutral.svg" className="w-6" alt="icon-carbon-neutral"/>
                                            <span > This is a <b> carbon-neutral </b> delivery</span>
                                        </div>
                                        <div onClick={resetAll} className="hover:cursor-pointer flex justify-center bg-[hsl(14,86%,42%)] gap-2 w-[85%] h-15 rounded-4xl">
                                            <button onClick={resetAll} className=" hover:cursor-pointer font-semibold text-white">Start New Order</button>
                                        </div>
                                     </div>
            </div> 
            </div>
            
        </div>        
           
                
                        
   
    ) 


}

export default OrderConfirm;