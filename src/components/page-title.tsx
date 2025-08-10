import { motion } from "motion/react"
import { Parallax } from "react-scroll-parallax"
import useMediaQuery from "../hooks/useMediaQuery"
import Logo from "../../public/logo.webp"

type Props = {
  children: React.ReactNode
}

export default function PageTitle({ children }: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  return (
    <Parallax speed={-40}>
      <section className="flex justify-center items-center h-[90vh] pages-title-bg pt-15 pb-30">
        <Parallax scale={[1, 0.8]}>
          <motion.h1 
            initial={{ opacity: 0, y: -200, scale: 0.3 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.7 }}
            className={`relative text-center text-shadow-lg/100  ${isMobile ? 'text-[50px]' : 'text-[70px]'} font-bold text-secondary`}
          >
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ delay: 0.8, duration: 0.7 }}
              src={Logo} 
              {...{fetchpriority: "high"}}
              decoding="async"
              alt="" 
              className="w-60 blur-xs -z-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {children}
          </motion.h1>
        </Parallax>
      </section>
    </Parallax>
  )
}
