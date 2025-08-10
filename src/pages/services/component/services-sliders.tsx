import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../../hooks/useLanguageSwitcher";
import SubTitle from "../../../components/sub-title";
import PaintProtectionFilmsVideo from "../../../../public/videos/paint-protection-films.mp4";
import ThermalInsulationVideo from "../../../../public/videos/thermal-insulation.mp4";
import NanoCeramicVideo from "../../../../public/videos/nano-ceramic.mp4";
import CarPolishingVideo from "../../../../public/videos/car-polishing.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface Service {
  title: string;
  description: string;
}

export default function ServicesSliders() {
  const { t } = useTranslation("services&products");
  const { isEnglish } = useLanguageStore();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const services = Object.values(
    t("services-list", { returnObjects: true })
  ) as Service[];

  const serviceVideos = [
    PaintProtectionFilmsVideo,
    ThermalInsulationVideo,
    NanoCeramicVideo,
    CarPolishingVideo,
  ];

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
              video.play();
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
                  services-bg shadow-xl rounded-xl overflow-hidden
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
                    preload="none"
                    src={serviceVideos[index]}
                    controls={isTablet}
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
  )
}
