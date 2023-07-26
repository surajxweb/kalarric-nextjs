import styles from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav1}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <div className={styles.imageContainer}></div>
          </Link>
        </div>
        <ul className={styles.pages}>
          <Link href={"/tshirts"}>
            <li className={styles.page}>T-Shirt</li>
          </Link>
          <Link href={"/caps"}>
            <li className={styles.page}>Caps</li>
          </Link>
          <Link href={"/wallets"}>
            <li className={styles.page}>Wallets</li>
          </Link>
          <Link href={"/blog"}>
            <li className={styles.page}>Blog</li>
          </Link>
          <Link href={"/support"}>
            <li className={styles.page}>Support</li>
          </Link>
          <Link href={"/about"}>
            <li className={styles.page}>About</li>
          </Link>
        </ul>
        <div className={styles.tools}>
          <Link href={"/search"}>
            <BsSearch className={styles.icon} size="1.8em" />
          </Link>
          <Link href={"/user"}>
            <AiOutlineUser className={styles.icon} size="2em" />
          </Link>
          <Link href={"/cart"}>
            <div className={styles.carts}>
              <BsFillBagFill className={styles.icon} size="2em" />
              <div className={styles.cartno}>10</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
