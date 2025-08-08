import './global-style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { useLanguageStore } from './hooks/useLanguageSwitcher'
import { lazy, Suspense, useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollToTop from './components/scroll-to-top'

const Home = lazy(() => import('./pages/home/home'))
const About = lazy(() => import('./pages/about-us/about-us'))
const Services = lazy(() => import('./pages/services/services'))
const ContactUs = lazy(() => import('./pages/contact-us/contact-us'))
const Register = lazy(() => import('./pages/register/register'))

export default function App() { 
  const setLanguage = useLanguageStore(state => state.setLanguage)

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'en' | 'ar' | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [setLanguage])
  return (
    <div className="bg-[#000] overflow-hidden text-white">
        <BrowserRouter>
          <ScrollToTop />
          <ParallaxProvider>
            <Navbar />
            <Suspense 
              fallback={
                <div className="flex justify-center items-center w-screen h-screen">
                  <div className="w-[100px] h-[100px] border-t-[5px] border-primary rounded-full animate-spin">
                    {/* <img src={Logo} alt="Loading..."/> */}
                  </div>
                </div>
              }
            >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            </Suspense>
            <Footer />
          </ParallaxProvider>
        </BrowserRouter>
      </div>
  )
}
