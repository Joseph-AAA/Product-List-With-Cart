import type { Product } from "../types/prodcut";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
    products: Product[];
};

function ProductList({products} : ProductCardProps) {


       const {cart ,setCart, showOrderConfirm, setShowOrderConfirm , increaseQty, decreaseQty} = useCart();
       
       const total = cart.reduce((total,item)=>{
            return (total + item.price*item.quantity)
       },0)
  
      
      
       function deleteItem(id:number){
             setCart((prev)=> prev.filter((item)=>item.id !==id))
       }

console.log(showOrderConfirm);
    return(
        <div className="w-full max-w-[1600px]  lg:m-20 m-14 grid grid-cols-1 xl:grid-cols-[7fr_3fr] gap-8">
            
            <div className="">
                <h1 className="text-5xl font-extrabold mb-10">Desserts</h1>

                <div className= "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 ">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
{/* **********************************Your Cart *********************************** */}
         {(cart.length>0) ?    
                        
                        <div className=" self-start min-h-88 bg-[hsl(20,50%,98%)] rounded-2xl grid">
                                        <div className="w-full  h-20 flex  justify-center items-center mb-5 mt-5 ">
                                            <div className="w-[85%] flex justify-between items-center ">
                                                <h1 className="text-[hsl(14,86%,42%)]  font-bold text-xl md:text-3xl">Your Cart ({cart.length}) </h1>
                                            </div>
                                            </div>

                                    
                                     {
                                        cart.map((item)=>{
                                            return(
                                                   <div className=" w-full h-20  flex items-center flex-col mb-3">
                                                        <div className="w-[85%] flex justify-center h-full  border-b-2  border-[hsl(13,31%,94%)]">
                                                            <div className="w-full grid  min-h-20  gap-1 pb-5 rounded-2xl">
                                                                    <label className="pt-1 font-bold text-sm md:text-lg">{item.name}</label>
                                                                <div className="flex gap-1 md:gap-5">
                                                                        <span className="text-[hsl(14,86%,42%)] font-bold text-sm md:text-lg">{item.quantity}x</span>
                                                                        <span className="text-[hsl(14,25%,72%)]  text-sm md:text-lg">@ {item.price.toFixed(2)}</span>
                                                                        <span  className="text-[hsl(7,20%,60%)] font-bold text-sm md:text-lg">${(item.quantity * item.price).toFixed(2)}</span>
                                                                    </div>
                                                                    
                                                            </div>

{/* *************************************************************Delete Button*********************************************************************************************************************** */}
                                                          
                                                            <div  className="flex items-center justify-center pb-5 rounded-4xl gap-2">
                                                               
                                                                <button onClick={()=>decreaseQty(item.id)} className="xl:hidden w-5 h-5 md:w-6 md:h-6
                                                                    hover:text-black hover:border-black hover:cursor-pointer rounded-4xl border-2 border-[hsl(7,20%,60%)] 
                                                                      flex items-center justify-center text-[hsl(7,20%,60%)] text-xl md:text-4xl pb-1"> - </button>
                                                                 <button onClick={()=>increaseQty(item.id)} className="xl:hidden w-5 h-5 md:w-6 md:h-6 hover:cursor-pointer rounded-4xl border-2 border-[hsl(7,20%,60%)] 
                                                                     hover:text-black hover:border-black flex items-center justify-center pt-1 text-[hsl(7,20%,60%)] text-xl md:text-4xl pb-1"> + </button>
                                                                 <button onClick={()=>deleteItem(item.id)} className="w-5 h-5 text-[hsl(7,20%,60%)] text-sm md:text-lg md:w-6 md:h-6 flex items-center justify-center
                                                                  hover:text-black hover:font-bold hover:border-black hover:cursor-pointer  border-2 border-[hsl(7,20%,60%)] 
                                                                                rounded-4xl ">
                                                                    X
                                                                </button>
                                                            </div>
                                                       </div>
                                                    </div>
                                            )
                                        })
                                     }
 
{/* *************************************************************Order Total / Carbon-neutural / Confrim Order *********************************************************************************************************************** */}
                                    
                                     <div className="flex flex-col w-full items-center gap-5 mt-5 mb-5">
                                        <div className="flex justify-between w-[85%]  h-15  items-center ">
                                            <span className="text-[hsl(12,20%,44%)] text-md md:text-xl">Order Total</span>
                                            <span className="font-bold text-xl md:text-3xl">${total.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-center items-center gap-2 w-[85%] pl-5 pr-5 h-15 bg-[hsl(13,31%,94%)] rounded-xl ">
                                            <img src="/assets/images/icon-carbon-neutral.svg" className="w-6" alt="icon-carbon-neutral"/>
                                            <span className="text-sm md:text-md"> This is a <b> carbon-neutral </b> delivery</span>
                                        </div>
                                        <div onClick={()=>setShowOrderConfirm(true)} className="hover:cursor-pointer flex justify-center bg-[hsl(14,86%,42%)] gap-2 w-[85%] h-15 rounded-4xl">
                                            <button onClick={()=>setShowOrderConfirm(true)} className=" hover:cursor-pointer font-semibold text-white">Confirm Order</button>
                                        </div>
                                     </div>
                            </div> 
                            
            :    
   
            
                        <div className=" self-start min-h-88 bg-[hsl(20,50%,98%)]  rounded-2xl grid grid-rows-[1fr_3fr]">

{/* *************************************************************  Your Cart ************************************************************************************** */}

                                    <div className="w-full  flex justify-center items-center ">
                                        
                                        <div className="w-[85%] flex  items-center ">
                                                <h1 className="text-[hsl(14,86%,42%)]  font-bold text-xl md:text-3xl">Your Cart (0) </h1>
                                            </div>
                                    </div>

                                    <div className=" w-full justify-center items-center flex flex-col">
                                        
                                            <div className="grid justify-center">
                                                    <img src="/assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
                                            </div>
                                            <div className="">
                                                <h2 className="text-xl  font-bold text-[hsl(12,20%,44%)] pl-5 pr-5 text-center">Your added items will appear here</h2>
                                            </div>
                                        
                                    </div>
                        </div>}
        </div>
    )
}
export default ProductList; 




