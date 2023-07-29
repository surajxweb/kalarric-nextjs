import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Tshirts from "../components/Tshirts";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Offers from "../components/Offers";
import JoinTribe from "../components/JoinTribe";
import Design from "../components/Design";
import BestSellers from "../components/BestSellers";
import Wallets from "../components/Wallets";

export default function Home() {
  const database = {
    products: [
      {
        productId: 1,
        productName: "Travel Oversized T-Shirt",
        category: 1,
        description: "",
        quantity: 3,
        originalPrice: 1499,
        offerPrice: 899,
        imageURL: [
          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/TTUArksSO6zKe1RKJW0e",
          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gwOo8lCPSZWopkUpx5Pv",
          "",
          "",
          "",
          "",
        ],
      },
      {
        productId: 2,
        productName: "High Quality Leather Wallet",
        category: 2,
        description: "",
        quantity: 3,
        originalPrice: 1499,
        offerPrice: 899,
        imageURL: [
          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/6croTOFS6Id4P5LgunWg",
          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/klxN817cT3eaox2bLTQS",
          "",
          "",
          "",
        ],
      },
      {
        productId: 3,
        productName: "What's up Beach?",
        category: 1,
        description: "",
        quantity: 3,
        originalPrice: 1499,
        offerPrice: 899,
        imageURL: [
          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/REi4GOXoRWBxJbetiiib",
          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/0HvABpbTdKPur9FTCHcr",
          "",
          "",
          "",
        ],
      },
    ],
    accounts: [
      {
        rollNo: 1,
        name: "Suraj Katyayan",
        email: "katyayansuraj@gmail.com",
        number: 7042019352,
        address: {
          line1: "404, Somewhere in Bangalore",
          line2: "404, Somewhere in Bangalore",
          city: "Delhi",
          pincode: 999999,
          nation: "India",
        },
        orderHistory: [
          {
            date: "",
            totalPrice: 1798,
            purchasedProducts: [
              { productId: 1, pricePaid: 899 },
              { productId: 3, pricePaid: 899 },
            ],
          },
          {
            date: "",
            totalPrice: 399,
            purchasedProducts: [{ productId: 2, pricePaid: 399 }],
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <NextSeo
        title={`Kalarric: Your Fashion Oasis for Men's & Women's Clothing and Accessories!`}
        description={`Welcome to Kalarric, the ultimate fashion destination where style meets substance! Unveil a curated selection of the finest men's and women's clothing and accessories, handpicked to elevate your fashion game. Dive into a world of trends and timeless pieces, all waiting for you to explore and make your own. Get ready to unleash your inner fashionista at Kalarric!.`}
      />
      <Navbar />
      <Offers />
      <Tshirts />
      <h1 className={styles.title}>Kalarric</h1>
      <BestSellers products={database.products} />
      <Wallets />
      <Design />
      <JoinTribe />
      <Footer />
    </div>
  );
}
