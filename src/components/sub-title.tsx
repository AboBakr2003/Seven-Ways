import { useLanguageStore } from "../hooks/useLanguageSwitcher"
import SecondaryLogo from "../../public/secondary-logo.webp"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "motion/react"


export default function SubTitle({children, justify, textDirection}: {children: React.ReactNode, justify?: string, textDirection?: string}) {
  const { isEnglish } = useLanguageStore()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isMedium = useMediaQuery("(max-width: 1280px)")
  return (
    <motion.div
      initial={{ opacity: 0, ...(justify === 'justify-center' ? { y: 100 } : { x: isEnglish ? -100 : 100 }) }} 
      whileInView={{ opacity: 1, ...(justify === 'justify-center' ? { y: 0 } : { x: 0 }) }} 
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      className={` ${isMedium && justify !== 'justify-center' ? (isEnglish ? 'ml-10' : 'mr-10') : ''} flex ${justify} ${isEnglish ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`relative w-fit items-center`}>
        <img src={SecondaryLogo} alt="" className={`absolute z-50 top-6 ${justify === 'justify-center' ? 'left-1/2 -translate-x-1/2' : (isEnglish ? (isMobile ? '-left-5' : '-left-10') : (isMobile ? '-right-5' : '-right-10'))} ${isMobile ? 'w-[70px]' : 'w-[90px]'} opacity-50`} />
        <h2 className={`relative z-51 ${isMobile ? 'text-4xl' : 'text-5xl'} font-bold my-10 ${textDirection} text-secondary`}>{children}</h2>
      </div>
    </motion.div>
  )
}