import TyreMarkTwo from "../../svg/tyre-marks-two";
import Logo from "../../../public/logo.webp";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useLanguageStore } from "../../hooks/useLanguageSwitcher";
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SocialMedia from "./components/social-media";
import WhiteAudi from "../../svg/white-audi";

export default function Footer() {
  const { t } = useTranslation("footer");
  const branches = t("branches-list", { returnObjects: true }) as Record<
    string,
    {
      name: string;
      branches: string[];
      phones: string[];
    }
  >;

  const { isEnglish } = useLanguageStore();
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const sectionsStyle = `${isTablet ? `w-full` : `w-1/3`} h-full flex flex-col pb-8 md:py-8`;

  return (
    <footer className="relative z-10 bg-black shadow-inner pt-15 text-white">
      <TyreMarkTwo position="top-0 left-0" />

      <div className={`w-11/12 mx-auto flex ${isTablet ? `flex-col` : isEnglish ? 'flex-row' : 'flex-row-reverse'} justify-between items-start gap-x-10`}>
        <div className={`${sectionsStyle} justify-center items-center gap-5`}>
          <div className="w-2/4">
            <img className="opacity-90" src={Logo} alt="Seven Ways Logo" />
          </div>
          <p className={`text-lg text-gray-200 font-medium ${isEnglish ? 'text-left' : 'text-right'}`}>
            {t("description")}
          </p>
          <div>
            <SocialMedia />
          </div>
        </div>

        <div className={`w-full flex flex-col gap-5 py-8`}>
          <h2 className={`text-4xl font-bold mb-2 text-secondary ${!isEnglish && 'text-right'}`}>
            {t("branches-title")}
          </h2>

          <div className={`flex gap-10 ${isTablet ? `flex-col` : isEnglish ? 'flex-row' : 'flex-row-reverse'}`}>
            {Object.entries(branches).map(([countryKey, country]) => (
              <div key={countryKey}>
                <h3 className={`text-xl font-bold mb-2 text-secondary ${!isEnglish && 'text-right'}`}>{country.name}</h3>

                <ul className="list-none">
                  {country.branches.map((branch, index) => (
                    <li key={index} className={`mb-2 flex items-center gap-2 text-gray-200 ${!isEnglish && 'flex-row-reverse text-right'}`}>
                      <MapPinIcon className="w-5 text-secondary" />
                      <p className="w-full">{branch}</p>
                    </li>
                  ))}
                </ul>

                <ul className="list-none mt-4">
                  {country.phones.map((phone, index) => (
                    <li key={index} className={`mb-2 flex items-center gap-2 text-gray-200 ${!isEnglish && 'flex-row-reverse text-right'}`}>
                      <PhoneIcon className="w-5 text-secondary" />
                      <a
                        href={`tel:${phone}`}
                        className="hover:text-green-300 transition duration-200"
                        aria-label={`Call ${country.name} branch phone number`}
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-15 border-t border-gray-700 mt-10 py-4">
        <p className="text-center text-base font-medium text-gray-400">
          <span className="inline-block">Coded by:</span>{" "}
          <a
            href="https://wa.me/201002667818"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-green-400 hover:underline"
            title="Send WhatsApp Message to Beko Haty"
          >
            Beko Haty
          </a>
        </p>
        <p className="text-center text-base font-medium text-gray-400">
          <span className="inline-block">Gmail:</span>{" "}
          <a
            href="mailto:bekohaty@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-red-400 hover:underline"
            title="Send Email to Beko Haty"
          >
            bekohaty@gmail.com
          </a>
        </p>
      </div>

      <WhiteAudi />
    </footer>
  );
}
