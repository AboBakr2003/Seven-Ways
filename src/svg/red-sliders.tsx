import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion" // ✅ ده الصحيح، مش "motion/react"
import { useLanguageStore } from "../hooks/useLanguageSwitcher"

export default function Sliders() {
  const isMedium = useMediaQuery("(max-width: 1280px)")
  const isLaptop = useMediaQuery("(max-width: 1536px)")
  const { isEnglish } = useLanguageStore()

  return (
    <div className="relative z-6">
      {!isMedium &&
        Array.from({ length: (isLaptop ? 12 : 10) }).map((_, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              x: 20,
              rotate: isEnglish ? 155 : 25,
              skewX: (isEnglish ? -20 : 20),
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: isEnglish ? 155 : 25,
              skewX: isEnglish ? -50 : 50,
            }}
            viewport={{ amount: 0.1, once: true }}
            transition={{ delay: i * 0.05 }}
            style={{
              top: `${(isLaptop ? (isEnglish ? -1200 : -1200) : (isEnglish ? -1200 : -1200)) + i * (isLaptop ? 100 : 120)}px`,
            }}
            className={`absolute w-[50vw] h-[10vh] rounded-2xl bg-primary opacity-50 z-13 shadow-[0_0_10px_10px_rgba(0,0,0,0.8)] ${
              isEnglish ? "-right-[450px]" : "-left-[450px]"
            }`}
          />
        ))}
    </div>
  )
}
