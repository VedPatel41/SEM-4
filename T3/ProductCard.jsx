function ProductCard(props) {
    return (
        <>{
            props.data.map((product, index) => (
                <div key={index}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                </div>

            ))
        }
        </>
    )

}
export default ProductCard