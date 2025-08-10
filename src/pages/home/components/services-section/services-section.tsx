import TyreMarkOne from "../../../../svg/tyre-marks-one"
import SubTitle from "../../../../components/sub-title"
import { useTranslation } from "react-i18next"
import { motion } from "motion/react"
import useMediaQuery from "../../../../hooks/useMediaQuery"
import { useLanguageStore } from "../../../../hooks/useLanguageSwitcher"
import PolishingImg from "../../../../../public/polishing.webp"
import NanoCeramicImg from "../../../../../public/nano-ceramic.webp"
import ThermalInsulationImg from "../../../../../public/thermal-insulation.webp"
import ProtectionImg from "../../../../../public/protection.webp"
import CtaButton from "../../../../components/cta-button"
import XpelLogo from "../../../../../public/xpel/logo.webp"
import HexisLogo from "../../../../../public/hexis/logo.webp"
import UxpLogo from "../../../../../public/uxp/logo.webp"
import ThreemLogo from "../../../../../public/3m/logo.webp"
import CarproLogo from "../../../../../public/carpro/logo.webp"
import { useNavigate } from "react-router-dom"

const servicesImg = [ProtectionImg, ThermalInsulationImg, NanoCeramicImg, PolishingImg]
const products = [
  {logo: XpelLogo, bg: "#ffb81c", target: "#xpel"},
  {logo: HexisLogo, bg: "#fff", target: "#hexis"},
  {logo: UxpLogo, bg: "#000", target: "#uxp"},
  {logo: ThreemLogo, bg: "#d7b6a3", target: "#3m"},
  {logo: CarproLogo, bg: "#a1a1a1", target: "#carpro"}
]

export default function ServicesSection() { 
  const { t } = useTranslation("services&products")
  const isSmallMobile = useMediaQuery("(max-width: 640px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const isMedium = useMediaQuery("(max-width: 1280px)")
  const { isEnglish } = useLanguageStore()

  const navigate = useNavigate()

  const services = Object.values(t("services-list", { returnObjects: true })) as {
    title: string
  }[]

  const handleProductClick = (target: string) => {
    navigate(`services${target}`);
  };

  return (
    <section className="relative py-24 services-bg">
      <TyreMarkOne position="top-0 left-0" />
      <div className="w-11/12 mx-auto flex flex-col gap-15 items-center">
        <SubTitle justify="justify-center" textDirection="text-center">{t("header")}</SubTitle>
        <div className={`w-full h-fit flex gap-y-20 ${!isEnglish && 'flex-row-reverse'} ${isMobile ? 'gap-20' : 'gap-x-10'} ${isSmallMobile ? 'px-8' : 'px-15'} ${isMedium && 'flex-wrap'} justify-center items-center mt-10`}>
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: isEnglish ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ delay: 0.3 + 0.3*serviceIndex, duration: 0.7, type: "spring", stiffness: 100 }}
              className={`${isMobile && 'mx-15'}`}
            >
              <div className={`${isEnglish ? 'skew-x-25' : '-skew-x-25'} relative flex flex-col flex-wrap w-auto min-w-[200px] max-w-[300px] max-h-[180px]  text-center`}>
                <div className={`absolute z-2 ${isEnglish ? 'left-0' : 'right-0'} -top-10 p-4 rounded-lg flex items-center justify-center bg-primary w-fit h-[50px]`}>
                  <h3 className={`text-lg lg:text-xl font-semibold leading-5 ${isEnglish ? '-skew-x-25' : 'skew-x-25'}`}>{service.title}</h3>
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={servicesImg[serviceIndex]}
                    alt={service.title}
                    loading="lazy"
                    className={`scale-155 md:scale-155 object-cover ${isEnglish ? '-skew-x-25' : 'skew-x-25'} mb-10`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={`w-full flex ${!isEnglish && 'flex-row-reverse'} ${isTablet ? 'flex-wrap' : 'flex-nowrap'} justify-center gap-x-5 gap-y-10 px-10`}>
        {products.map((product, productIndex) => (
          <motion.div
            key={productIndex}
            initial={{ opacity: 0, x: isEnglish ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{
              delay: 0.3*productIndex,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
            className="flex justify-center w-full min-w-[200px] md:max-w-[300px] 2xl:max-w-[350px]"
          >
            <div 
            onClick={() => handleProductClick(product.target)}
            style={{backgroundColor: product.bg}}
            className={`h-full ${isMobile ? 'w-full' : 'w-[280px]'} relative cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10 flex items-center justify-center px-15 py-5 rounded-2xl overflow-hidden ${isEnglish ? '-skew-x-25' : 'skew-x-25'}`}
            >
              <img
                src={product.logo}
                alt=""
                loading="lazy"
                className={`max-h-[40px] ${isEnglish ? 'skew-x-25' : '-skew-x-25'}`}
              />
            </div>
          </motion.div>
        ))}
        </div>
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <CtaButton link="/services">{t("cta-button")}</CtaButton>
        </motion.div>
      </div>
    </section>
  )
}