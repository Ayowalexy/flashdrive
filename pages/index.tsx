import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import { ImLocation2 } from "react-icons/im";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useMediaQuery from "../public/images/usemediaquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Home: NextPage = () => {
  const [active, setActive] = useState(1);
  const swiper = useSwiper();
  const [showPreloader, setShowPreloader] = useState(true);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 4000);
  }, []);
  // console.log('data--', data)
  return (
    <div>
      {showPreloader ? (
        <div className={styles.preloader_parent}>
          <div className={styles.preloader_}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={styles.flash}>FlashDrive</div>
        </div>
      ) : (
        <div>
          <div className={styles.header}>
            <Image
              src="/images/logo.png"
              width={matches ? 220 : 100}
              height={matches ? 80 : 30}
              
            />
          </div>
          <div className={styles.container_}>
            <div className={styles.images}>
              <img
                src="/images/corrola.jpg"
                width={matches ? "65%" : "100%"}
                height={matches ? "100%" : "50%"}
               
              />
              <div className={styles.side}>
                <div className={styles.side_header}>
                  {matches ? (
                    <div className={styles.side_header_text_one}>
                      Do you know that at
                      <br /> <span> FLASHDRIVENG,</span> you can get a car on
                      hire purchase?
                    </div>
                  ) : (
                    <div className={styles.side_header_text_one}>
                      Do you know that at
                      <br /> <span> FLASHDRIVENG,</span> you can <br /> get a car
                      on hire purchase?
                    </div>
                  )}
                  <div className={styles.side_header_text_two}>
                    Come to flashdrive at Lydia street, Odii road or call
                    <a href="tel:07089973142"> 07089973142</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.footer_1}>
              <BsFacebook fill="#F8CE58" size={matches ? 25 : 20} />
              <BsInstagram size={matches ? 25 : 20} fill="#F8CE58" />
              <BsTwitter size={matches ? 25 : 20} fill="#F8CE58" />
              <span className={styles.footer_text}>flashdriveng</span>
            </div>
            <div className={styles.footer_2}>
              <ImLocation2 size={20} fill="#F8CE58" />
              <div className={styles.footer_text}>
                Afor Market, 1 Lydia street, Odili road. PHC
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
