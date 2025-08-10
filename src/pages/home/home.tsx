import "../../global-style.css";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../hooks/useLanguageSwitcher";
import GclassEn from "../../../public/g-class-en.webp";
import GclassAr from "../../../public/g-class-ar.webp";
import CtaButton from "../../components/cta-button";
import { Suspense, lazy } from "react";

const Sliders = lazy(() => import("../../svg/red-sliders"));
const WhiteCar = lazy(() => import("../../svg/white-car"));
const Advantages = lazy(() => import("../../components/advantages"));
const ServicesSection = lazy(() => import("./components/services-section/services-section"));

import { Helmet } from "react-helmet-async";

export default function Home() {
  const { t } = useTranslation("home");
  const { isEnglish } = useLanguageStore();

  return (
    <div>
      {/* ✅ SEO TAGS */}
      <Helmet>
        <title> Seven Ways  </title>
        <meta name="description" content={t("home.description")} />
        <meta property="og:title" content={t("home.title")} />
        <meta property="og:description" content={t("home.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://seven-ways.com/og_image.png" />
        <meta property="og:locale" content={isEnglish ? "en_US" : "ar_EG"} />
        <html lang={isEnglish ? "en" : "ar"} />
        <link rel="preload" as="image" href="/public/g-class-ar.webp" type="image/webp" />
        <link rel="preload" as="image" href="/public/g-class-en.webp" type="image/webp" />
      </Helmet>

      {/* Hero Section */}
      <section
        className={`relative z-10 flex flex-col ${
          isEnglish ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-14 lg:gap-0 lg:items-start justify-between lg:justify-start home-bg lg:h-[100vh] pt-10 lg:pt-0 overflow-hidden inset-shadow-[0_10px_20px_20px_rgba(0,0,0,1)] shadow-[0_10px_20px_10px_rgba(0,0,0,1)]`}
      >
        <div className="flex flex-col gap-18 items-center justify-center px-6 py-25 lg:px-10 text-center w-full lg:w-1/2 h-full">
          <div className="flex flex-col items-center gap-4">
            <motion.h1
              className="text-5xl font-bold text-primary text-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {t("header.title")}
            </motion.h1>
            <motion.p
              className="text-2xl font-medium w-[80%] text-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {t("header.sub-title")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <CtaButton link="/about-us">{t("header.cta-button")}</CtaButton>
          </motion.div>
        </div>
        <div className="flex flex-row-reverse lg:flex-col-reverse relative w-full lg:w-1/2 lg:h-full">
          <motion.div
            className="relative z-20 flex items-center justify-end"
            initial={{ opacity: 0, x: isEnglish ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              width={800}
              height={600}
              src={isEnglish ? GclassEn : GclassAr}
              alt={t("header.image-alt")}
              {...{fetchpriority: "high"}}
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <Advantages />
        <Sliders />
        <WhiteCar />
        <ServicesSection />
      </Suspense>
    </div>
  );
}
