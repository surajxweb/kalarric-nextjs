import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the useRouter hook
import tshirt1 from "../resources/Header/tshirtone.png";
import tshirt2 from "../resources/Header/tshirt2.png";
import tshirt3 from "../resources/Header/tshirt3.png";
import styles from "./Tshirts.module.css";

export default function Tshirts() {
  // Initialize the useRouter hook
  const router = useRouter();

  // Define the roadToTShirt function to navigate to the "/tshirts" page
  const roadToTShirt = () => {
    router.push("/tshirts");
  };

  return (
    <div>
      <Carousel
        autoPlay
        interval={3000}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        swipeable={true}
        showIndicators={false}
        onClickItem={roadToTShirt} // Set the onClickItem attribute to the function
        className={styles.carousel}
      >
        <div>
          {/* Call the roadToTShirt function when the image is clicked */}
          <Image
            width={1536}
            height={600}
            src={tshirt1}
            alt="Image 1"
            unoptimized="true"
            loading="lazy"
          />
        </div>
        <div>
          {/* Similarly, the onClickItem attribute is applied to other images */}
          <Image
            width={1536}
            height={600}
            src={tshirt2}
            alt="Image 2"
            unoptimized="true"
            loading="lazy"
          />
        </div>
        <div>
          <Image
            width={1536}
            height={600}
            src={tshirt3}
            alt="Image 3"
            unoptimized="true"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
}
