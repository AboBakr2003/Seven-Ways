import Logo from "/public/logo.webp"
import BrandName from "/public/brand-name.webp"
import "../../global-style.css"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import useMediaQuery from "../../hooks/useMediaQuery"
import MenuButton from "./menu/menu"
import { useLanguageStore } from "../../hooks/useLanguageSwitcher"

export default function Navbar() {


  const isTablet = useMediaQuery("(max-width: 1023px)")
  const isMobile = useMediaQuery("(max-width: 768px)")

  const { t } = useTranslation('navbar')
  const { isEnglish, toggleLanguage } = useLanguageStore()
  return (
    <header className ={`bg-black/80 w-full h-[65px] fixed top-0 left-0 z-1000 shadow-[0_5px_10px_rgba(0,0,0,0.3)]`}>
      <div className="flex justify-between items-center xl:w-4/5 h-full mx-auto px-6 xl:px-0 py-3">
        {/* Logo */}
        <div className=" flex justify-center items-start gap-1 w-fit h-full">
          <div className="relative w-16">
            <img className="absolute left-0" loading="lazy" src={Logo} alt="" />
          </div>
          {!isMobile &&
            <div className="w-20">
              <img 
                src={BrandName} 
                alt=""
                loading="lazy"
              />
            </div>
          }
        </div>
        {/* Mobile Menu || Desktop Links */}
        {isTablet ? (
          <MenuButton />
        ) : (
          <nav className="flex gap-7 lg:gap-10 items-center">
            <NavLink className="text-gray-300 hover:text-white transition-all duration-300" to="/">{t("home")}</NavLink>
            <NavLink className="text-gray-300 hover:text-white transition-all duration-300" to="/about-us">{t("about-us")}</NavLink>
            <NavLink className="text-gray-300 hover:text-white transition-all duration-300" to="/services">{t("services")}</NavLink>
            <NavLink className="text-gray-300 hover:text-white transition-all duration-300" to="/contact-us">{t("contact-us")}</NavLink>
            <NavLink className="text-gray-300 hover:text-white transition-all duration-300" to="/register">{t("register")}</NavLink>
            {/* Language Switcher */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isEnglish}
                onChange={toggleLanguage}
                className="sr-only peer"
              />
              <div className="flex items-center gap-2 w-14 h-7 bg-gray-300 peer-checked:bg-primary rounded-full transition-all duration-300 inset-shadow-[0_5px_5px_rgba(0,0,0,0.3)] ">
              <span className={`ml-2 ${isEnglish ? 'translate-x-0 text-white' : 'translate-x-5 text-primary'} transition-all duration-300 text-sm font-medium`}>
                {isEnglish ? 'EN' : 'AR'}
              </span>
              </div>
              <span className={`absolute left-1 top-1 w-5 h-5 ${isEnglish ? 'bg-white' : 'bg-primary'} rounded-full transition-transform duration-300 transform peer-checked:translate-x-7`}></span>
            </label>
          </nav>
        )}
      </div>
    </header>
  )
}