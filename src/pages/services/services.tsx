import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useMediaQuery from "../../hooks/useMediaQuery";
import PageTitle from "../../components/page-title";
import SubTitle from "../../components/sub-title";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../hooks/useLanguageSwitcher";
import PaintProtectionFilmsVideo from "../../assets/videos/paint-protection-films.mp4";
import ThermalInsulationVideo from "../../assets/videos/thermal-insulation.mp4";
import NanoCeramicVideo from "../../assets/videos/nano-ceramic.mp4";
import CarPolishingVideo from "../../assets/videos/car-polishing.mp4";
import XpelLogo from "../../assets/xpel/logo.png";
import HexisLogo from "../../assets/hexis/logo.png";
import UxpLogo from "../../assets/uxp/logo.png";
import ThreemLogo from "../../assets/3m/logo.png";
import CarproLogo from "../../assets/carpro/logo.png";
import XpelProductImgOne from "../../assets/xpel/xpel-package-(1).png";
import XpelProductImgTwo from "../../assets/xpel/xpel-package-(3).png";
import HexisProductImgOne from "../../assets/hexis/hexis-package-(1).png";
import HexisProductImgTwo from "../../assets/hexis/hexis-package-(2).png";
import UxpProductImgOne from "../../assets/uxp/uxp-package-(1).png";
import UxpProductImgTwo from "../../assets/uxp/uxp-package-(2).png";
import ThreemProductImgOne from "../../assets/3m/3m-package-(1).png";
import ThreemProductImgTwo from "../../assets/3m/3m-package-(2).png";
import CarproProductImgOne from "../../assets/carpro/carpro-package-(1).png";
import CarproProductImgTwo from "../../assets/carpro/carpro-package-(2).png";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Service {
  title: string;
  description: string;
}

interface Product {
  title: string;
  description: string;
}

interface Brand {
  title: string;
  "products-list": Product[];
}

const serviceVideos = [
  PaintProtectionFilmsVideo,
  ThermalInsulationVideo,
  NanoCeramicVideo,
  CarPolishingVideo,
];

const brandsLogos = [XpelLogo, HexisLogo, UxpLogo, ThreemLogo, CarproLogo];

const brandsProducts = [
  [XpelProductImgOne, XpelProductImgTwo],
  [HexisProductImgOne, HexisProductImgTwo],
  [UxpProductImgOne, UxpProductImgTwo],
  [ThreemProductImgOne, ThreemProductImgTwo],
  [CarproProductImgOne, CarproProductImgTwo],
];

const brandsId = ["xpel", "hexis", "uxp", "3m", "carpro"];

export default function Services() {
  const { t } = useTranslation("services&products");
  const { isEnglish } = useLanguageStore();

  const services = Object.values(
    t("services-list", { returnObjects: true })
  ) as Service[];
  const brands = Object.values(
    t("brands-list", { returnObjects: true })
  ) as Brand[];

  const isMobile = useMediaQuery("(max-width: 768px)");

  const location = useLocation();

  useEffect(() => {
    const idleCallback = window.requestIdleCallback || function (cb: () => void) {
      return setTimeout(cb, 1);
    };
    if (location.hash) {
      idleCallback(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const offset = 150;
          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "auto" });
        }
      });
    }
  }, [location, isMobile]);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
  
    videoRefs.current.forEach((video) => {
      if (!video) return;
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.muted = false;
              video.play().catch(() => {});
            } else {
              video.pause();
              video.muted = true;
            }
          });
        },
        { threshold: 0.6 } // نسبة الظهور المطلوبة لتشغيل الفيديو (60%)
      );
  
      observer.observe(video);
      observers.push(observer);
    });
  
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);



  return (
    <>
      <Helmet>
        <title>
          {isEnglish
            ? "Paint Protection & Car Services |  Seven Ways"
            : "خدمات حماية السيارات وتلميعها |  Seven Ways"}
        </title>
        <meta
          name="description"
          content={
            isEnglish
              ? "Explore premium car paint protection, thermal insulation, ceramic coating, and polishing services using trusted brands like XPEL, HEXIS, and 3M."
              : "اكتشف خدمات حماية طلاء السيارات، العزل الحراري، النانو سيراميك، والتلميع باستخدام منتجات XPEL و HEXIS و 3M."
          }
        />
        <meta
          name="keywords"
          content={
            isEnglish
              ? "car protection, paint protection, ceramic coating, XPEL, 3M, nano ceramic, car polishing, Saudi Arabia"
              : "حماية السيارة، حماية الطلاء، نانو سيراميك، تلميع السيارات، XPEL، 3M، السعودية"
          }
        />
        <meta
          property="og:title"
          content={
            isEnglish
              ? "Car Services & Protection Packages"
              : "خدمات السيارات وباقات الحماية"
          }
        />
        <meta
          property="og:description"
          content={
            isEnglish
              ? "Trusted protection and detailing services for luxury vehicles in Saudi Arabia."
              : "خدمات موثوقة لحماية وتلميع السيارات الفاخرة في  مصر والسعودية."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://seven-ways.com/services"
        />
        <meta
          property="og:image"
          content="https://seven-ways.com/og_image.png"
        />
        <html lang={isEnglish ? "en" : "ar"} />
      </Helmet>

      <PageTitle>{t("header")}</PageTitle>
      <div className="relative z-10 bg-[#000] shadow-[0_0_80px_180px_rgba(0,0,0,1)]">
        {/* Services Section */}
        <section className="pb-10 mt-15 shadow-[0_100px_50px_30px_rgba(0,0,0,1)]">
          <div className={`w-11/12 mx-auto md:py-5`}>
            <motion.div
              initial={{ opacity: 0, x: isEnglish ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.7, once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            >
              <SubTitle>{t("services-title")}</SubTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isEnglish ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="lg:mt-10"
            >
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
              >
                {services.map((service, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <article
                      className={`
                        relative flex flex-col items-center 
                        w-5/6 ${
                          isMobile
                            ? "h-fit p-4"
                            : "max-h-[70vh] justify-between px-20"
                        } max-w-6xl gap-6
                        services-articles-bg shadow-xl rounded-xl overflow-hidden
                        ${
                          isEnglish
                            ? "md:flex-row md:skew-x-12"
                            : "md:flex-row-reverse md:-skew-x-12"
                        }
                      `}
                    >
                      {/* Text */}
                      <div
                        className={`w-full md:w-1/2 flex flex-col gap-4 md:p-4 
                        ${
                          isEnglish
                            ? "md:-skew-x-12 md:ml-5"
                            : "items-end text-right md:skew-x-12 md:mr-5"
                        } 
                        text-white`}
                      >
                        <h2 className="text-xl md:text-2xl font-bold text-primary">
                          {service.title}
                        </h2>
                        <p className="text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      {/* Video */}
                      <div
                        className={`w-full h-full md:w-1/4 flex justify-center items-center 
                        ${isEnglish ? "md:-skew-x-12" : "md:skew-x-12"}`}
                      >
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[index] = el;
                            }
                          }}
                          src={serviceVideos[index]}
                          controls
                          muted
                          playsInline
                          className="h-full rounded-lg shadow-lg object-cover"
                        />
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>
        {/* Products Section */}
        <section className="">
          <div className="relative py-30 products-bg">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, x: isEnglish ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.7, once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="w-11/12 mx-auto mb-5"
            >
              <SubTitle>{t("products-title")}</SubTitle>
            </motion.div>
            {/* Products */}
            {brands.map((brand, brandIndex) => (
              <div
                key={brandIndex}
                id={brandsId[brandIndex]}
                className={`w-11/12 mx-auto my-20`}
              >
                <div
                  className={`relative flex items-center justify-between mb-5 ${
                    !isEnglish && "flex-row-reverse"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEnglish ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.5, once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <div>
                      <img
                        src={brandsLogos[brandIndex]}
                        alt=""
                        className={`w-40 sm:w-50 md:w-60 lg:w-70 xl:w-80 2xl:w-90 relative z-10 ${
                          !isEnglish && "text-right"
                        }`}
                      />
                    </div>
                  </motion.div>
                  <div>
                    {brandsProducts[brandIndex].map((product, productIndex) => (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: productIndex === 0 ? 100 : -100,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.8, once: true }}
                        transition={{ duration: 0.7 }}
                        key={productIndex}
                        className={`absolute 
                          ${
                            brandIndex === 0 &&
                            productIndex === 0 &&
                            "w-2/5 -top-10 right-10 sm:w-2/6 sm:top-0 md:-top-5 md:right-20 lg:-top-10 xl:-top-10 2xl:-top-20 2xl:right-25"
                          }
                          ${
                            brandIndex === 0 && productIndex === 0 && !isEnglish
                              ? "left-5 md:left-10 2xl:left-25"
                              : ""
                          }
                          ${
                            brandIndex === 0 &&
                            productIndex === 1 &&
                            "w-2/5 -top-25 -right-5 sm:w-2/8 sm:-top-15 sm:right-5 md:w-2/7 md:-top-30 md:right-10 lg:w-2/8 lg:-top-35 lg:right-10 xl:-top-40 xl:right-10 2xl:-top-55 2xl:right-5"
                          }
                          ${
                            brandIndex === 0 && productIndex === 1 && !isEnglish
                              ? "left-20 sm:left-30 md:left-40 lg:left-50 xl:left-60 2xl:left-75"
                              : ""
                          }
                          ${
                            brandIndex === 1 &&
                            productIndex === 0 &&
                            "w-2/10 -top-5 right-20 sm:-top-10 sm:right-30 md:w-2/13 md:-top-5 lg:-top-15 lg:right-35 xl:w-2/15 2xl:w-2/17 2xl:right-60"
                          }
                          ${
                            brandIndex === 1 && productIndex === 0 && !isEnglish
                              ? "left-5 md:left-10 2xl:left-25"
                              : ""
                          }
                          ${
                            brandIndex === 1 &&
                            productIndex === 1 &&
                            "w-2/10 -top-5 right-5 sm:-top-10 md:w-2/12 md:-top-5 lg:-top-15 xl:w-2/14 2xl:w-2/16 2xl:right-20"
                          }
                          ${
                            brandIndex === 1 && productIndex === 1 && !isEnglish
                              ? "left-20 sm:left-30 md:left-40 lg:left-50 xl:left-50 2xl:left-65"
                              : ""
                          }
                          ${
                            brandIndex === 2 &&
                            productIndex === 0 &&
                            "w-2/8 z-2 -top-15 right-25 sm:-top-18 sm:right-35 md:w-2/11 md:-top-15 md:right-25 lg:w-2/12 lg:-top-18 lg:right-40 xl:w-2/14 xl:-top-15 xl:right-45 2xl:-top-20 2xl:right-65"
                          }
                          ${
                            brandIndex === 2 && productIndex === 0 && !isEnglish
                              ? "left-5 md:left-10 2xl:left-25"
                              : ""
                          }
                          ${
                            brandIndex === 2 &&
                            productIndex === 1 &&
                            "w-2/8 -top-15 right-2 sm:-top-18 sm:right-5 md:w-2/13 md:-top-10 lg:w-2/14 lg:-top-14 lg:right-15 xl:w-2/16 xl:-top-10 2xl:-top-15 2xl:right-30"
                          }
                          ${
                            brandIndex === 2 && productIndex === 1 && !isEnglish
                              ? "left-25 sm:left-30 md:left-40 lg:left-50 xl:left-50 2xl:left-65"
                              : ""
                          }
                          ${
                            brandIndex === 3 &&
                            productIndex === 0 &&
                            "w-2/6 z-2 top-0 right-15 sm:-top-5 sm:right-35 md:w-2/6 md:-top-10 md:right-40 lg:-top-15 lg:right-50 xl:-top-20 xl:right-60 2xl:w-2/7 2xl:-top-20 2xl:right-75"
                          }
                          ${
                            brandIndex === 3 && productIndex === 0 && !isEnglish
                              ? "left-5 md:left-10 2xl:left-25"
                              : ""
                          }
                          ${
                            brandIndex === 3 &&
                            productIndex === 1 &&
                            "w-2/5 top-5 right-4 sm:top-0 sm:right-5 md:w-2/5 md:top-0 lg:top-0 lg:right-5 xl:-top-5 2xl:-top-10 2xl:right-0"
                          }
                          ${
                            brandIndex === 3 && productIndex === 1 && !isEnglish
                              ? "left-10 sm:left-30 md:left-40 lg:left-50 xl:left-50 2xl:left-65"
                              : ""
                          }
                          ${
                            brandIndex === 4 &&
                            productIndex === 0 &&
                            "w-2/7 -top-18 right-5 sm:w-2/8 sm:-top-18 sm:right-0 md:w-2/9 md:-top-20 lg:w-2/10 lg:-top-27 lg:right-5 xl:w-2/13 xl:-top-20 2xl:w-2/15 2xl:-top-25 2xl:right-0"
                          }
                          ${
                            brandIndex === 4 && productIndex === 0 && !isEnglish
                              ? "left-5 md:left-10 2xl:left-25"
                              : ""
                          }
                          ${
                            brandIndex === 4 &&
                            productIndex === 1 &&
                            "hidden w-2/5 top-5 right-0 sm:block sm:w-2/7 sm:-top-15 sm:right-40 md:w-2/8 md:-top-17 lg:w-2/10 lg:-top-17 lg:right-50 xl:-top-25 2xl:w-2/14 2xl:-top-20 2xl:right-45"
                          }
                          ${
                            brandIndex === 4 && productIndex === 1 && !isEnglish
                              ? "left-20 sm:left-30 md:left-40 lg:left-50 xl:left-50 2xl:left-65"
                              : ""
                          }
                        `}
                      >
                        <motion.div
                          initial={{ x: 20 }}
                          whileInView={{ x: -20 }}
                          viewport={{ amount: 0.8, once: true }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }}
                        >
                          <img src={product} alt="" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className={`${!isEnglish && "text-right"}`}>
                  {brand["products-list"].map((product, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.2, once: true }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        stiffness: 50,
                      }}
                      key={index}
                      className="mb-5"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary text-shadow-lg/100">
                        {product.title}
                      </h2>
                      <p className="text-lg lg:text-xl leading-relaxed text-shadow-lg/100">
                        {product.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
