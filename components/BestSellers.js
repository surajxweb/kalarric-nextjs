import ProductCard from "./ProductCard";
import styles from "./BestSellers.module.css";

export default function BestSellers({ products }) {
  return (
    <div className={styles.container}>
      <h2>Fan Favorites</h2>
      <ul className={styles.hascards}>
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            name={product.productName}
            price={product.offerPrice}
            imageURL1={product.imageURL[0]}
            imageURL2={product.imageURL[1]}
          />
        ))}
      </ul>
    </div>
  );
}
