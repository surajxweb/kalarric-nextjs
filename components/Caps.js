import Image from "next/image";
import walletbanner from "../resources/header/5.png";
import styles from "./Caps.module.css";

export default function Caps() {
  return (
    <>
      <Image
        src={walletbanner}
        width={1536}
        height={600}
        alt="banner for caps"
        loading="lazy"
        className={styles.capscontainer}
      />
    </>
  );
}
