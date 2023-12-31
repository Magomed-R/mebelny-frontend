import { useEffect } from "react"
import { Cart, Footer, Header, HeaderMobile } from "../components"

export const CartPage = () => {
  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])

  return (
    <div className="cart">
      <Header />
      <HeaderMobile />

      <Cart />

      <Footer />
    </div>
  )
}