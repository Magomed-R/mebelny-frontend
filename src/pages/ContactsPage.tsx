import { useEffect } from "react";
import { Advantages, Footer, FormSection, Header, MyContainer, Title, HeaderMobile, ContactMap, ContactsAdress } from "../components";

export const ContactsPage = () => {
  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])
  return (
    <div className="contacts">
      <Header />
      <HeaderMobile />

      <MyContainer>
        <Title
          dark
          mb="50px"
        >
          Контакты
        </Title >
      </MyContainer>
      <ContactsAdress />

      <MyContainer>
        <Title
          dark
          mb="50px"
        >
          Факты
        </Title >
      </MyContainer>

      <Advantages />

      <ContactMap />

      <FormSection />

      <Footer />
    </div>
  )
}