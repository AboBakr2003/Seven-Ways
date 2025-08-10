import { useTranslation } from "react-i18next"
import { motion } from "motion/react"
import XpelLogo from "../../public/xpel/logo.webp"
import { Link } from "react-router-dom"
import useMediaQuery from "../hooks/useMediaQuery"
import SubTitle from "./sub-title"
import { useLanguageStore } from "../hooks/useLanguageSwitcher"

interface Advantage {
  title: string
  description: string
}

export default function Advantages() {
  
  const { t } = useTranslation("ourAdvantages")
  const { isEnglish } = useLanguageStore()
  // const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const isMedium = useMediaQuery("(max-width: 1280px)")
  const isLaptop = useMediaQuery("(max-width: 1536px)")

  const advantages = Object.values(t("competitive-advantages", { returnObjects: true })) as Advantage[]

  return (
    <section className="relative overflow-hidden bg-zinc-800 adv-bg pt-10 pb-20 shadow-[0_10px_40px_10px_rgba(0,0,0,8)]">
      <div className={`w-11/12 mx-auto flex flex-col gap-10 ${isEnglish ? 'items-start' : 'items-end'}`}>
        <SubTitle textDirection={isEnglish ? 'text-left' : 'text-right'}>{t("why-seven-ways")}</SubTitle>
        <div className={`flex flex-wrap justify-around ${isMedium ? 'w-full' : 'w-auto lg:max-w-15/18'} gap-y-10 mt-10 ${isEnglish ? `flex-row` : `flex-row-reverse`}`}>
        {advantages.map((adv, index) => {
          const isLast = index === advantages.length - 1;
          return (
            <motion.article
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ amount: 0.1, once: true }}
              transition={{ duration: 0.5 }}
              key={index}
              className={`relative flex flex-col justify-center p-5 ${isTablet ? 'w-full' : 'lg:w-auto min-w-[400px] max-w-[460px] 2xl:max-w-[500px]'}`}
            >
              <h3 className={`absolute -top-5 text-center w-fit px-4 py-2 rounded-lg ${isEnglish ? 'skew-x-15 left-5' : '-skew-x-15 right-5'} text-xl lg:text-2xl font-semibold`}
                style={
                  isLast ? {backgroundImage: "linear-gradient(55deg, var(--color-secondary) 5%, var(--color-primary))"} : {backgroundColor: "var(--color-primary)"}
                }
              >
                <span className={`inline-block ${isEnglish ? '-skew-x-15' : 'skew-x-15'}`}>{adv.title}</span>
              </h3>
              <div className={`flex ${!isEnglish && 'flex-row-reverse'} items-center mt-4`}>
                <span className={`drop-shadow-[0_0_10px_#aaa] ${isEnglish ? 'pr-5' : 'pl-5'} ${isLast && `text-[#ffb81c]`} text-[70px] font-bold text-red`}>{index + 1}</span>
                <p className={`leading-relaxed mt-2 p-2 ${!isLaptop && 'text-lg'} ${isEnglish ? 'text-left' : 'text-right'}`}>{adv.description}</p>
              </div>
              {isLast && <div className={`flex justify-center ${isEnglish && 'mt-3'}`}><Link to="https://www.xpel.com"  aria-label="زيارة موقع XPEL الرسمي"target="_blank">
                <img src={XpelLogo} loading="lazy" className="w-[100px] aspect-[20/6]" alt="" />
              </Link></div>}
            </motion.article>
          )
        })} 
        </div>
      </div>
    </section>
  )
}

