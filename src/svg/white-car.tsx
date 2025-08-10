import { motion } from "motion/react"
import useMediaQuery from "../hooks/useMediaQuery"
import { useLanguageStore } from "../hooks/useLanguageSwitcher"
import WhCar from "../../public/white-car.webp"

export default function WhiteCar() {
  const isMedium = useMediaQuery("(max-width: 1280px)")
  const isLaptop = useMediaQuery("(max-width: 1536px)")
  const { isEnglish } = useLanguageStore()
  return(
    <>
      {!isMedium && 
      <div className="relative z-12">
        <motion.div 
          className={`absolute ${isLaptop ? `${isEnglish ? "right-10" : "left-10"}` : `${isEnglish ? "right-20" : "left-20"}`} z-6`}
          style={{ top: isLaptop ? (isEnglish ? "-750px" : "-700px") : (isEnglish ? "-800px" : "-750px") }}
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ amount: 0.1, once: true }}
          transition={{ delay: 0.7, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}>
          <img src={WhCar} loading="lazy" className={`${isLaptop ? "w-[240px]" : "w-[270px]"}`} alt="" />
        </motion.div>
      </div>
      }
    </> 
  )
}