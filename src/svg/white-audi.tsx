import AudiAr from "../assets/audi-ar.png"
import AudiEn from "../assets/audi-en.png"
import { useLanguageStore } from "../hooks/useLanguageSwitcher"
import useMediaQuery from "../hooks/useMediaQuery"

export default function WhiteAudi() {

  const isTablet = useMediaQuery("(max-width: 1024px)")

  const { isEnglish } = useLanguageStore()

  return (
    <>
      {!isTablet &&
        <div className={`absolute bottom-12 w-[45vw] ${isEnglish ? 'right-10' : 'left-10'}`}>
          <img 
            src={isEnglish ? AudiEn : AudiAr}
            alt="White Audi"
          />
        </div>
      }
    </>
  )
}