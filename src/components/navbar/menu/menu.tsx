import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLanguageStore } from '../../../hooks/useLanguageSwitcher'

export default function MenuButton() {
  const { t } = useTranslation('navbar')
  const { isEnglish, toggleLanguage } = useLanguageStore()
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(prev => !prev)

  return (
    <StyledWrapper>
      {/* Hamburger Button */}
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={open}
          onChange={handleToggle}
        />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1" />
          <div className="bars" id="bar2" />
          <div className="bars" id="bar3" />
        </label>
      </div>

      {/* Menu Dropdown */}
      <AnimatePresence>
      {open && (
        <motion.nav
        initial="hidden"
        animate="visible"
        exit="hidden"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { x: "100%" },
          visible: { x: "0%" },
        }}
          className="menu">
          <NavLink to="/" onClick={handleToggle}>{t("home")}</NavLink>
          <NavLink to="/about" onClick={handleToggle}>{t("about-us")}</NavLink>
          <NavLink to="/services" onClick={handleToggle}>{t("services")}</NavLink>
          <NavLink to="/contact-us" onClick={handleToggle}>{t("contact-us")}</NavLink>
          <NavLink to="/register" onClick={handleToggle}>{t("register")}</NavLink>
          {/* Language Switcher */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isEnglish}
              onChange={toggleLanguage}
              className="sr-only peer"
            />
            <div className="flex items-center gap-2 w-14 h-7 bg-gray-300 peer-checked:bg-primary rounded-full transition-all duration-300 inset-shadow-[0_5px_5px_rgba(0,0,0,0.3)] ">
            <span className={`ml-2 ${isEnglish ? 'translate-x-0' : 'translate-x-5 text-primary'} transition-all duration-300 text-sm font-medium`}>
              {isEnglish ? 'EN' : 'AR'}
            </span>
            </div>
            <span className={`absolute left-1 top-1 w-5 h-5 ${isEnglish ? 'bg-white' : 'bg-primary'} rounded-full transition-transform duration-300 transform peer-checked:translate-x-7`}></span>
          </label>
        </motion.nav>
      )}
      </AnimatePresence>
    </StyledWrapper>
  )
}


export const StyledWrapper = styled.div`
  position: relative;

  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: .5s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: #e6272f;
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: .8s;
  }

  #bar1, #bar3 {
    width: 70%;
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: .5s;
    transform: rotate(180deg);
  }

  .menu {
    width: 200px;
    height: 100vh;
    position: absolute;
    right: -24px;
    top: 50px;
    background-color: black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 2rem;
    z-index: 999;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.3);
  }

  .menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }

  .menu a:hover {
    color: #e6272f;
  }
`
