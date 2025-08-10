import { useTranslation } from "react-i18next";
import PageTitle from "../../components/page-title";
import SubTitle from "../../components/sub-title";
import { useLanguageStore } from "../../hooks/useLanguageSwitcher";
import { PhoneIcon } from "@heroicons/react/24/outline";
import WhatsappIcon from "../../svg/whatsapp-icon";
import { Helmet } from "react-helmet-async";

interface Branch {
  name: string;
  map: string;
  phone: string;
}

interface BranchesData {
  country: { key: string; name: string }[];
  [key: string]: Branch[] | { key: string; name: string }[];
}

export default function ContactUs() {
  const { t } = useTranslation("contact-us");
  const { isEnglish } = useLanguageStore();

  const branchesData = t("branches-list", {
    returnObjects: true,
  }) as BranchesData;

  return (
    <div>
      <Helmet>
        <title>
          {isEnglish ? "Contact Us | Seven Ways" : "تواصل معنا | Seven Ways"}
        </title>

        <meta
          name="description"
          content={
            isEnglish
              ? "Reach out to us through our branches across Saudi Arabia and Egypt. View maps, call, or message via WhatsApp."
              : "تواصل معنا عبر فروعنا المنتشرة في السعودية ومصر. اعرض الخرائط أو اتصل بنا أو راسلنا على واتساب."
          }
        />

        <meta
          name="keywords"
          content={
            isEnglish
              ? "contact us, branch locations, Saudi Arabia, Egypt, WhatsApp, car services, directions"
              : "تواصل معنا، مواقع الفروع، السعودية، مصر، واتساب، خدمات سيارات، الاتجاهات"
          }
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content={isEnglish ? "Contact Our Branches" : "تواصل مع فروعنا"}
        />
        <meta
          property="og:description"
          content={
            isEnglish
              ? "Find the nearest branch, view the location, and contact us directly."
              : "اعثر على أقرب فرع وتواصل معنا مباشرة."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seven-ways.com/contact-us" />
        <meta
          property="og:image"
          content="https://seven-ways.com/og_image.png"
        />
      </Helmet>

      <PageTitle>{t("header")}</PageTitle>
      <div className="relative z-10 w-11/12 mx-auto bg-[#000] shadow-[0_0_80px_120px_rgba(0,0,0,1)]">
        <section className="py-15 branches-bg inset-shadow-[0_0_80px_80px_rgba(0,0,0,1)]">
          <SubTitle>{t("branches-title")}</SubTitle>
          <div
            className={`w-11/12 mx-auto flex flex-col items-start md:flex-row gap-10 my-10 ${
              !isEnglish && "md:flex-row-reverse items-end text-right"
            }`}
          >
            {branchesData.country.map((country, index) => {
              const countryBranches = branchesData[country.key] as Branch[];
              return (
                <div key={index} className={`w-full xl:w-fit`}>
                  <h2 className="text-secondary text-3xl font-bold mb-10">
                    {country.name}
                  </h2>
                  <div
                    className={`flex flex-col flex-wrap items-center justify-center lg:flex-row gap-10 mx-10 md:mx-0 ${
                      isEnglish ? `ml-10` : `mr-10 lg:flex-row-reverse`
                    }`}
                  >
                    {countryBranches?.map((branch, i) => (
                      <div
                        key={i}
                        className={`w-full xl:w-fit relative flex flex-col ${
                          isEnglish ? " items-start" : "items-end"
                        }`}
                      >
                        <div
                          className={`absolute -top-5 z-20 bg-primary rounded-lg ${
                            isEnglish
                              ? "skew-x-25 -left-9"
                              : "-skew-x-25 -right-9"
                          }`}
                        >
                          <h3
                            className={`w-fit text-lg font-semibold py-2 px-4 ${
                              isEnglish ? "-skew-x-25" : "skew-x-25"
                            }`}
                          >
                            {branch.name}
                          </h3>
                        </div>
                        <a
                          href={`tel:${branch.phone}`}
                          className={`absolute -bottom-5 ${
                            isEnglish ? "right-5" : "left-5"
                          } z-5 hover:scale-110 transition-all duration-300 py-2 px-3 rounded-lg text-2xl bg-primary block ${
                            isEnglish ? "skew-x-25" : "-skew-x-25"
                          }`}
                        >
                          <PhoneIcon
                            className={`w-6 ${
                              isEnglish ? "-skew-x-25" : "skew-x-25"
                            }`}
                          />
                        </a>
                        <a
                          href={`https://wa.me/${branch.phone}`}
                          className={`absolute -bottom-5 ${
                            isEnglish ? "right-20" : "left-20"
                          } z-5 hover:scale-110 transition-all duration-300 py-2 px-3 rounded-lg text-2xl bg-primary block ${
                            isEnglish ? "skew-x-25" : "-skew-x-25"
                          }`}
                        >
                          <WhatsappIcon
                            className={`w-6 ${
                              isEnglish ? "-skew-x-25" : "skew-x-25"
                            }`}
                          />
                        </a>
                        <div
                          className={`w-full xl:w-[500px] overflow-hidden rounded-2xl ${
                            isEnglish ? "skew-x-25" : "-skew-x-25"
                          }`}
                        >
                          <a href={branch.map} target="_blank">
                            <iframe
                              src={branch.map}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className={`relative left-[-15%] w-[130%] h-full ${
                                isEnglish ? "-skew-x-25" : "skew-x-25"
                              }`}
                            ></iframe>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
