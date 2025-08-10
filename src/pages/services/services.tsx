import { motion } from "motion/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import PageTitle from "../../components/page-title";
import SubTitle from "../../components/sub-title";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../hooks/useLanguageSwitcher";
import XpelLogo from "../../../public/xpel/logo.webp";
import HexisLogo from "../../../public/hexis/logo.webp";
import UxpLogo from "../../../public/uxp/logo.webp";
import ThreemLogo from "../../../public/3m/logo.webp";
import CarproLogo from "../../../public/carpro/logo.webp";
import XpelProductImgOne from "../../../public/xpel/xpel-package-(1).webp";
import XpelProductImgTwo from "../../../public/xpel/xpel-package-(3).webp";
import HexisProductImgOne from "../../../public/hexis/hexis-package-(1).webp";
import HexisProductImgTwo from "../../../public/hexis/hexis-package-(2).webp";
import UxpProductImgOne from "../../../public/uxp/uxp-package-(1).webp";
import UxpProductImgTwo from "../../../public/uxp/uxp-package-(2).webp";
import ThreemProductImgOne from "../../../public/3m/3m-package-(1).webp";
import ThreemProductImgTwo from "../../../public/3m/3m-package-(2).webp";
import CarproProductImgOne from "../../../public/carpro/carpro-package-(1).webp";
import CarproProductImgTwo from "../../../public/carpro/carpro-package-(2).webp";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { lazy } from "react";

const ServicesSliders = lazy(() => import("./component/services-sliders"));

interface Product {
  title: string;
  description: string;
}

interface Brand {
  title: string;
  "products-list": Product[];
}

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


  const brands = Object.values(
    t("brands-list", { returnObjects: true })
  ) as Brand[];

  const isMobile = useMediaQuery("(max-width: 768px)");

  const location = useLocation();

  useEffect(() => {
    const idleCallback =
      window.requestIdleCallback ||
      function (cb: () => void) {
        return setTimeout(cb, 1);
      };
    if (location.hash) {
      idleCallback(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const offset = 150;
          const y =
            element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "auto" });
        }
      });
    }
  }, [location, isMobile]);

  return (
    <>
    <Helmet>
        <title>{isEnglish ? "Paint Protection & Car Services | Seven Ways" : "\u062E\u062F\u0645\u0627\u062A \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u062A\u0644\u0645\u064A\u0639\u0647\u0627 | Seven Ways"}</title>
        <meta name="description" content={isEnglish ? "Explore premium car paint protection, thermal insulation, ceramic coating, and polishing services using trusted brands like XPEL, HEXIS, and 3M." : "اكتشف خدمات حماية طلاء السيارات، العزل الحراري، النانو سيراميك، والتلميع باستخدام منتجات XPEL و HEXIS و 3M."} />
        <meta name="keywords" content={isEnglish ? "car protection Saudi Arabia, paint protection film, ceramic coating, XPEL, 3M, thermal insulation, car detailing, nano ceramic, vehicle polish, Riyadh car services" : "حماية السيارات السعودية، حماية طلاء السيارة، أفلام حماية الطلاء، النانو سيراميك، XPEL، 3M، العزل الحراري، تلميع السيارات، خدمات سيارات الرياض"} />

        <meta property="og:title" content={isEnglish ? "Seven Ways | Car Protection and Detailing Services" : "Seven Ways | خدمات السيارات وباقات الحماية"} />
        <meta property="og:description" content={isEnglish ? "Trusted protection and detailing services for luxury vehicles in Saudi Arabia." : "خدمات موثوقة لحماية وتلميع السيارات الفاخرة في السعودية."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seven-ways.com/services" />
        <meta property="og:image" content="https://seven-ways.com/og_image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isEnglish ? "Seven Ways | Car Protection" : "Seven Ways | خدمات حماية السيارات"} />
        <meta name="twitter:description" content={isEnglish ? "Premium car protection & detailing services using XPEL, HEXIS, and 3M." : "خدمات متخصصة لحماية وتلميع السيارات باستخدام منتجات عالمية."} />
        <meta name="twitter:image" content="https://seven-ways.com/og_image.png" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Seven Ways Car Protection Services",
            "url": "https://seven-ways.com/services",
            "logo": "https://seven-ways.com/og_image.png",
            "description": "${isEnglish ? "Premium car protection services including PPF, ceramic coating, and polishing using top brands like XPEL and 3M in Saudi Arabia." : "خدمات حماية السيارات تشمل أفلام الحماية، النانو سيراميك، والتلميع باستخدام أفضل العلامات التجارية مثل XPEL و3M في السعودية."}",
            "areaServed": {
              "@type": "Place",
              "name": "${isEnglish ? "Saudi Arabia" : "السعودية"}"
            },
            "provider": {
              "@type": "Organization",
              "name": "Seven Ways",
              "url": "https://seven-ways.com"
            }
          }
          `}
        </script>
      </Helmet>

      <PageTitle>{t("header")}</PageTitle>
      <div className="relative z-10 bg-[#000] shadow-[0_0_80px_180px_rgba(0,0,0,1)]">
        {/* Services Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <ServicesSliders />
        </Suspense>
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
                        loading="lazy"
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
                        key={brand.title}
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
