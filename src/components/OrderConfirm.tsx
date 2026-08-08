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
                <div className=" max-h-[90vh] overflow-y-auto bg-[hsl(20,50%,98%)] rounded-2xl w-[90%] max-w-xl p-5  ">
                                        <div className="w-full    h-25 flex flex-col items-center pl-0 mb-25 md:mb-15  mt-5 ">
                                            <div className="w-[85%] flex items-center justify-between ">
                                                <img src={orderConfirm} className="w-12" alt="icon-order-confirmed"/>
                                                <span onClick={resetAll}  className="w-10 h-10 hover:cursor-pointer  border-2 border-[hsl(7,20%,60%)] 
                                                                       text-[hsl(7,20%,60%)]  font-bold text-xl items-center rounded-lg flex justify-center">
                                                                    X
                                                </span>
                                            </div>
                                            
                                            <div className="w-[85%] flex flex-col items-start justify-center mb-5">
                                                <h1 className="text-[hsl(14,65%,9%)] mt-4 font-bold pb-3 text-4xl md:text-4xl">
                                                     Order Confirmed
                                                </h1>
                                                 <p className="text-[hsl(14,25%,72%)] ">We hope you enjoy your food</p>
                                            </div>
                                        </div>

                                <div className="w-full mb-5 justify-center items-center rounded-2xl flex flex-col ">

                                    <div className="w-[85%] bg-[hsl(13,31%,94%)] rounded-2xl">
 {
                                            cart.map((item)=>{
                                                return(
                                                    <div key={item.id} className=" w-full h-20  flex items-center flex-col ">
                                                            <div className="w-[90%] flex justify-center items-center h-full    border-[hsl(14,25%,72%)]">
                                                                
                                                                <div className="w-[90%] flex justify-center items-center h-full bg-[hsl(13,31%,94%)] border-b   border-[hsl(13,21%,87%)]">
                                                                    
                                                                    <div className="w-full flex gap-2 md:gap-5 items-center  ">
                                                                        <img src={item.image.thumbnail} className=" w-10 h-10 md:w-12 md:h-12 rounded-md" alt={item.name}/>
                                                                        <div className="w-full grid items-center   rounded-2xl">
                                                                               
                                                                            <div className="flex gap-2 md:gap-5 justify-between items-center">
                                                                                    <div className="grid ">
                                                                                         <label className=" font-bold text-[13px] md:text-lg truncate">{item.name}</label>
                                                                                         <span className="text-[hsl(14,86%,42%)] font-bold text-[13px] md:text-lg">{item.quantity}x</span>
                                                                                    {/* <span className="text-[hsl(14,25%,72%)]  text-sm md:text-lg">@ {item.price.toFixed(2)}</span> */}
                                                                                  
                                                                                    </div>
                                                                                    <span  className="text-[hsl(14,65%,9%)] font-bold text-[13px] md:text-xl ">${(item.quantity * item.price).toFixed(2)}</span>
                                                                            </div>
                                                                                
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        </div>
                                                )
                                            })
                                        }
                                        <div className="flex justify-center w-full pl-5 pr-5 h-20 items-center ">
                                                <div className="flex justify-between w-[90%]  h-15 items-center ">
                                                    <span className="text-[hsl(14,65%,9%)] text-md md:text-xl">Order Total</span>
                                                    <span className="font-bold text-[15px] md:text-3xl">${total.toFixed(2)}</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                    

{/* *************************************************************Order Total / Carbon-neutural / Confrim Order *********************************************************************************************************************** */}
                                    
                                     <div className="flex flex-col w-full items-center gap-5  mb-5">
                                        
                                        {/* <div className="flex justify-center items-center gap-2 w-[85%] pl-5 pr-5 h-15 bg-[hsl(13,31%,94%)] rounded-xl ">
                                            <img src="/assets/images/icon-carbon-neutral.svg" className="w-6" alt="icon-carbon-neutral"/>
                                            <span className="text-sm md:text-2xl"> This is a <b> carbon-neutral </b> delivery</span>
                                        </div> */}
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