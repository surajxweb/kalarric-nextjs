import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Tshirts from "../components/Tshirts";
import Caps from "../components/Caps";
import Wallets from "../components/Wallets";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Offers from "../components/Offers";
import JoinTribe from "../components/JoinTribe";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title={`Kalarric: Your Fashion Oasis for Men's & Women's Clothing and Accessories!`}
        description={`Welcome to Kalarric, the ultimate fashion destination where style meets substance! Unveil a curated selection of the finest men's and women's clothing and accessories, handpicked to elevate your fashion game. Dive into a world of trends and timeless pieces, all waiting for you to explore and make your own. Get ready to unleash your inner fashionista at Kalarric!.`}
      />
      <Navbar />
      <Offers />
      <Tshirts />
      {/* <Wallets />
      <Caps /> */}
      <JoinTribe />
      <Footer />
    </div>
  );
}
