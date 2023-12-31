import { useEffect } from "react"
import { Footer, Header, HeaderMobile, UserProfile } from "../components"

export const UserPage = () => {
  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])
  return (
    <div className="user">
      <Header />
      <HeaderMobile />

      <UserProfile />

      <Footer />
    </div>
  )
}