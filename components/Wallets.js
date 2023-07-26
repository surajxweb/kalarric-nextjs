import Image from "next/image";
import walletbanner from "../resources/header/4.png";

export default function Wallets() {
  return (
    <>
      <Image
        src={walletbanner}
        width={1536}
        height={600}
        alt="banner for wallets"
      />
    </>
  );
}
