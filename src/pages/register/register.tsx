import { Helmet } from "react-helmet-async"; 

export default function Register() {
  return (
    <div className="relative">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Register for Services |  Seven Ways</title>
        <meta name="description" content="Fill out our registration form to book car services, protection packages, and more. Quick and easy registration." />
        <meta name="keywords" content="register, booking, car services, paint protection, ceramic coating, G-Class, Saudi Arabia" />
        <meta property="og:title" content="Register for Our Car Services" />
        <meta property="og:description" content="Easily register for premium automotive services through our online form." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seven-ways.com/register" />
        <meta property="og:image"  content="https://seven-ways.com/og_image.png" />
        <html lang="en" />
      </Helmet>

      <section className="w-11/12 mx-auto h-[270vh] py-20 z-10 shadow-[0_-40px_80px_140px_rgba(0,0,0,1)] flex justify-center items-center">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeO1UjtikWIneu_1VvxWViI4qNqEjsz5KwWvCsj5r4-pcSeRg/viewform?usp=header"
          className="w-[80%] h-full rounded-xl overflow-hidden"
          title="Google Form"
          scrolling="no"
        ></iframe>
      </section>
    </div>
  );
}
