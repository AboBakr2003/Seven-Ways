import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../hooks/useLanguageSwitcher";
import PageTitle from "../../components/page-title";
import SubTitle from "../../components/sub-title";
import AboutUsVideo from "../../../public/videos/about-us-video.mp4";
import WhiteCar from "../../svg/white-car";
import Sliders from "../../svg/red-sliders";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { lazy } from "react";
import { useEffect, useRef } from "react";


const Advantages = lazy(() => import("../../components/advantages"));

export default function About() {
  const { t } = useTranslation("about-us");
  const { isEnglish } = useLanguageStore();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          video.play().catch(() => {});
        } else {
          video.pause();
          video.muted = true;
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {isEnglish ? "About Us |  Seven Ways" : "من نحن |   Seven Ways"}
        </title>
        <meta
          name="description"
          content={
            isEnglish
              ? "Learn about our company's history, values, and commitment to excellence in automotive services in Saudi Arabia and the Gulf."
              : "تعرّف على تاريخ شركتنا، قيمنا، والتزامنا بالتميّز في خدمات السيارات في السعودية والخليج."
          }
        />
        <meta
          name="keywords"
          content={
            isEnglish
              ? "about us, company history, car services, Saudi Arabia, premium automotive, G-Class, excellence"
              : "من نحن، تاريخ الشركة، خدمات السيارات، السعودية، سيارات فاخرة، مرسيدس G-Class، تميّز"
          }
        />
        <meta
          property="og:title"
          content={isEnglish ? "About Us - Who We Are" : "من نحن - قصتنا"}
        />
        <meta
          property="og:description"
          content={
            isEnglish
              ? "Discover the story behind our brand and our dedication to automotive quality and customer satisfaction."
              : "اكتشف قصة علامتنا التجارية والتزامنا بجودة السيارات ورضا العملاء."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seven-wayes.com/about-us" />
        <meta
          property="og:image"
          content="https://seven-wayes.com/og_image.png"
        />
        <html lang={isEnglish ? "en" : "ar"} />
      </Helmet>

      <div className="relative">
        <PageTitle>{t("header")}</PageTitle>
        <section
          className="relative z-10 pb-20 about-us-bg mt-15
          bg-[#000] shadow-[0_-40px_80px_140px_rgba(0,0,0,1)]
          inset-shadow-[0_0px_30px_30px_rgba(0,0,0,1)]"
        >
          <div className="relative w-11/12 mx-auto pb-10 flex flex-col ">
            <SubTitle>{t("history-title")}</SubTitle>
            <div
              className={`w-11/12 mx-auto flex flex-col gap-10 ${
                isEnglish ? `lg:flex-row` : `lg:flex-row-reverse text-right`
              } items-center justify-center lg:justify-between`}
            >
              <motion.div
                initial={{ opacity: 0, x: isEnglish ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.7, once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="flex items-start w-full h-full lg:w-1/2 leading-11 text-xl"
              >
                <p>{t("history-description")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: isEnglish ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.7, once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="flex items-center justify-center sm:h-[80vh]"
              >
                <video
                  ref={videoRef}
                  src={AboutUsVideo}
                  controls
                  muted
                  className="h-full border-y-10 border-primary rounded-2xl shadow-[0_0_20px_20px_rgba(0,0,0,8)]"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <Advantages />
      </div>
      <Sliders />
      <WhiteCar />
    </>
  );
}