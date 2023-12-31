import React, { useEffect } from 'react';
import { Footer, FormSection, Header, AboutIndividual, AboutSteps, AboutAdvanteges, AboutInfo, AboutProfit, AboutWork, HeaderMobile } from "../components";
import img from '../assets/aboutPage.png';
import img2 from '../assets/about2.png';
import img3 from '../assets/about3.png';

export const AboutPage = () => {
  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])

  return (
    <div className="about">
      <Header />
      <HeaderMobile />
      <AboutIndividual image={img} />
      <AboutSteps image={img2} />
      <AboutAdvanteges image={img3} />
      <AboutWork />
      <AboutInfo />
      {/* <AboutProfit /> */}
      {/* <Form title="Индивидуальный расчет" /> */}
      <FormSection />
      <Footer />
    </div>
  )
}