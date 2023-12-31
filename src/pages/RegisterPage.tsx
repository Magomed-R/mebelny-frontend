import { useEffect } from "react"
import { Footer, Header, HeaderMobile, RegisterForm } from "../components"

export const RegisterPage = () => {
  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])
  return (
    <div className="register">
      <Header />
      <HeaderMobile />

      <RegisterForm />

      <Footer />
    </div>
  )
}