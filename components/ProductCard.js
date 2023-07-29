import Image from "next/image";
import styles from "./ProductCard.module.css";
import { useState } from "react";

export default function ProductCard({ name, price, imageURL1, imageURL2 }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={styles.container}>
      <div
        className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hover ? (
          <Image
            src={imageURL2}
            alt="cover picture 1"
            width={400}
            height={400}
          />
        ) : (
          <Image
            src={imageURL1}
            alt="cover picture 2"
            width={400}
            height={400}
          />
        )}
      </div>

      {/* <Image src={imageURL1} height={345} alt="cover picture" width={345} />
      <Image src={imageURL2} height={345} alt="cover picture" width={345} /> */}
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.price}>{`₹ ${price}`}</div>
      <button className={styles.buybutton}>Buy Now</button>
    </div>
  );
}
