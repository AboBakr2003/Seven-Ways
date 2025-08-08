import RedAudiAr from "../assets/red-audi-ar.png"
import RedAudiEn from "../assets/red-audi-en.png"
import { useLanguageStore } from "../hooks/useLanguageSwitcher"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

export default function RedAudi() {
  const { isEnglish } = useLanguageStore()
  const isTablet = useMediaQuery("(max-width: 1024px)")
  return (
    <>
      {!isTablet &&
        <motion.div
          initial={{ opacity: 0, x: isEnglish ? -100 : 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={`absolute bottom-0 scale-110 lg:w-[35vw] 2xl:w-[40vw] ${isEnglish ? 'left-10' : 'right-10'}`}>
            <img src={isEnglish ? RedAudiEn : RedAudiAr} alt="" />
          </div>
        </motion.div>
      }
    </>
  )
}