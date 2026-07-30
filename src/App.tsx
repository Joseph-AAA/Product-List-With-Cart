
import ProductList from './components/ProductList';
import products from './data/data.json';
import OrderConfirm from './components/OrderConfirm';
import { useCart } from './context/CartContext';
function App(){

    const { showOrderConfirm } = useCart();

    return (
        <main className="w-full min-h-screen flex justify-center bg-[hsl(13,31%,94%)]">
            <ProductList products={products} />
            {showOrderConfirm && <OrderConfirm  /> } 
         
        </main>
    );
}
export default App;