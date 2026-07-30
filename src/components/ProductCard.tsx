import type { Product } from "../types/product";
import addToCart from "/assets/images/icon-add-to-cart.svg"
import { useCart } from "../context/CartContext";
type ProductCardProps = {
    product: Product;
};
/* const context = useContext(CartContext); */

function ProductCard({product} : ProductCardProps ){

    const {
            id,
            category,
            name,
            price,
            image: { thumbnail, mobile, tablet, desktop },
     } = product ;


       const { cart, setCart } = useCart();    /* here we destructure cart , setCart which */
       const isExist = cart.find((item)=>(item.id===product.id));
       const itemQty = cart.find((item) => item.id === id)?.quantity ?? 0 ; /*နိပ်လိုက်တဲ့ id စစ်ပြီး qty ရှိလားမရှိလား စစ်ပြီး undfeined ရှိရင် သုညပေးမယ်။*/ 

   
       function handleAddToCart() {
                    
            if(isExist){
                setCart((prev)=>prev.map((item)=>item.id === id ? {...item,quantity : item.quantity + 1} : item))
            }else{

                setCart ((prev)=>[...prev,{...product,quantity : 1}])
            }
    }

     function reduceQty() {
                if(itemQty > 1) {               
                        setCart((prev)=>prev.map((item)=>item.id === id ? {...item,quantity : item.quantity - 1} : item))
                }else{
                     setCart((prev) =>
                            prev.filter((item) => item.id !== id)
                        ); 
                }
    }

    return(
   
        <div className="" >
            <div >
                <picture >
                    <source media="(min-width: 1024px)" srcSet={desktop} />
                    <source media="(min-width: 768px)" srcSet={tablet} />
                    <source media="(min-width: 480px)" srcSet={mobile} />
                    <img
                        src={mobile}
                        alt={thumbnail}
                        
                        className={`${isExist ? "border-3 border-[hsl(14,86%,42%)] rounded-xl " : ""}  "w-full h-auto rounded-xl"`}
                    />
                </picture>

                {
/* *****************************************************Add to Cart**************************************************** */

                    isExist ?  
                    
                    
                    
                    
                    
                                <div className="relative bg-[hsl(14,86%,42%)]  left-1/2 -translate-x-1/2 
                                                -translate-y-1/2 w-50 h-14 border-2 border-[hsl(7,20%,60%)] 
                                                rounded-4xl flex justify-center items-center ">

                                    <div className="hover:cursor-pointer  w-45 flex justify-between items-center text-[hsl(20,50%,98%)]">
                                        <span onClick={reduceQty} className="w-8 h-8 rounded-2xl border-2 border-[hsl(20,50%,98%)] 
                                                        flex items-center justify-center  text-4xl "> - </span>
                                        <span className="font-bold  text-xl">{itemQty}</span>
                                    <span onClick={handleAddToCart}  className="hover:cursor-pointer  w-8 h-8 rounded-2xl border-2 border-[hsl(20,50%,98%)] 
                                                        flex items-center justify-center  text-4xl"> + </span>

                                    </div>
                                    
                                </div> 
                
                            :  
   
/* *******************************************************button**************************************************** */

                                <button  onClick={handleAddToCart} className="hover:cursor-pointer 
                                                hover:border-[hsl(14,86%,42%)] 
                                                hover:text-[hsl(14,86%,42%)] relative left-1/2 -translate-x-1/2 
                                                -translate-y-1/2 w-50 h-14 border-2 border-[hsl(7,20%,60%)] 
                                                bg-[hsl(20,50%,98%)] flex justify-center items-center gap-3 
                                                rounded-4xl ">
                                        <img className="w-8 " src={addToCart} alt="Add to Cart" />
                                        <p className="font-bold">Add to Cart</p>
                                </button>
                }

            </div>
            <div>
                    <label className="text-[hsl(7,20%,60%)] text-lg">{category}</label>
                    <h3 className="text-[hsl(12,20%,44%)] mt-1 mb-1 font-bold text-lg">{name}</h3>
                    <p className="text-[#BC6A4C] text-xl font-bold">${price}.00</p>
            </div>
        </div>
        

 )


}
export default ProductCard;

						