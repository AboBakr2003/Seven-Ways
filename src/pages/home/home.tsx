import "../../global-style.css";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../hooks/useLanguageSwitcher";
import GclassEn from "../../assets/g-class-en.png";
import GclassAr from "../../assets/g-class-ar.png";
import Sliders from "../../svg/red-sliders";
import WhiteCar from "../../svg/white-car";
import CtaButton from "../../components/cta-button";
import { lazy } from "react";

const Advantages = lazy(() => import("../../components/advantages"));
const ServicesSection = lazy(() => import("./components/services-section/services-section"));

import { Helmet } from "react-helmet-async"; // ✅ IMPORT HELMET

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
              transition={{ delay: 1, duration: 0.7 }}
            >
              {t("header.title")}
            </motion.h1>
            <motion.p
              className="text-2xl font-medium w-[80%] text-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.7 }}
            >
              {t("header.sub-title")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.7 }}
          >
            <CtaButton link="/about-us">{t("header.cta-button")}</CtaButton>
          </motion.div>
        </div>
        <div className="flex flex-row-reverse lg:flex-col-reverse relative w-full lg:w-1/2 lg:h-full">
          <motion.div
            className="relative z-20 flex items-center justify-end"
            initial={{ opacity: 0, x: isEnglish ? 400 : -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              className="w-[800px]"
              src={isEnglish ? GclassEn : GclassAr}
              alt={t("header.image-alt")}
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <Advantages />
      <Sliders />
      <WhiteCar />
      <ServicesSection />
    </div>
  );
}
