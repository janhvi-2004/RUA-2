import styles from "./Banner.module.scss";
import Header from "../Header/Header";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex >= 8 ? 1 : prevIndex + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const dynamicImageUrl = `/assets/home${imageIndex}.jpg`;
  console.log(dynamicImageUrl);

  return (
    <div className={styles.Banner}>
      <div
        className={styles.Background}
        style={{
          backgroundImage: `url(${dynamicImageUrl})`,
        }}
      >
        <div className={styles.Content}>
          <Header />
        </div>
        <div className={styles.ChevronIcons}>
          <BsChevronLeft
            size={50}
            color="white"
            onClick={() =>
              setImageIndex((prevIndex) => (prevIndex <= 8 ? 1 : prevIndex - 1))
            }
          />
          <BsChevronRight
            size={50}
            color="white"
            onClick={() =>
              setImageIndex((prevIndex) => (prevIndex >= 8 ? 1 : prevIndex + 1))
            }
          />
        </div>
        <div className={styles.Info}>janhvi</div>
      </div>
    </div>
  );
};
export default Banner;
