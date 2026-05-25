// create a product card component to show product details like title,price,rating and image
//Use a product list component to store the products data to dispaly multiple product cards components using map function
import ProductCard from "./ProductCard.jsx"
import img1 from './assets/react.svg'
import img2 from './assets/vite.svg'
function ProductList() {
    var products = [
        {
            title: 'Product 1',
            price: "40000",
            rating: "4.8",
            image: img1
        },
        {
            title: 'Product 2',
            price: "200",
            rating: "4.0",
            image: img2
        }
    ]
    return (

        <div>
            <ProductCard data={products} />
        </div>
    )
}
export default ProductList