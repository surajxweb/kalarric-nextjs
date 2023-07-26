import Image from "next/image";
import Link from "next/link";
import biglogo from "../resources/logo/biglogo.png";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={biglogo} alt="big logo" weidth={313} height={222} />
        </div>
        <div className={styles.shop}>
          <ul className={styles.links}>
            <Link href="/tshirts">
              <li>T-Shirts</li>
            </Link>
            <Link href="/wallets">
              <li>Wallets</li>
            </Link>
            <Link href="/caps">
              <li>Caps</li>
            </Link>
          </ul>
        </div>
        <div className={styles.company}>
          <ul className={styles.links}>
            <Link href="/about">
              <li>About Us</li>
            </Link>
            <Link href="/shippingandreturns">
              <li>Shipping and Returns</li>
            </Link>
            <Link href="/privacypolicy">
              <li>Privacy Policy</li>
            </Link>
            <Link href="/jobsatkalarric">
              <li>We are Hiring</li>
            </Link>
          </ul>
        </div>
        <div className={styles.socials}>
          <div>
            <Link href="https://www.instagram.com/kalarric">
              <BsInstagram className={styles.insta} size="2em" />
            </Link>
            <Link href="https://www.twitter.com/kalarric">
              <BsTwitter className={styles.insta} size="2em" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.credit}>
        <div>Made with 💝 by Suraj Katyayan</div>
        <div>&copy; 2022-23 Kalarric Lifestyle</div>
      </div>
    </div>
  );
}
