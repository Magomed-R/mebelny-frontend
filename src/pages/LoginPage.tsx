import { useEffect } from "react"
import { LoginForm, Footer, Header, HeaderMobile } from "../components"

export const LoginPage = () => {
  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])
  return (
    <div className="login">
      <Header />
      <HeaderMobile />

      <LoginForm />

      <Footer />
    </div>
  )
}