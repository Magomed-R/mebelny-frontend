import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer, Header, HeaderMobile, ProductContent, ProductInfo } from "../components";
import { Navigate, useParams } from 'react-router-dom';
import { IProduct } from "../store";

export const ProductPage = () => {
  const { id } = useParams();
  const isAuth = useSelector((state: any) => state.user.isAuth)

  const product: IProduct[] = useSelector((state: any) => state.products.allProducts.filter((product: IProduct) => {
    return product._id === id
  }))

  const productInCart = useSelector((state: any) => state.cart.filter(((cart: any) => {
    return (isAuth ? cart.furniture._id : cart._id) === id
  })))[0]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])

  if (!product.length) {
    return <Navigate to='/' />
  }

  return (
    <div className='product'>
      <Header />
      <HeaderMobile />

      {product.length ?
        <ProductContent
          product={product[0]}
          productInCart={productInCart}
        /> : ""}

      {product.length ?
        <ProductInfo
          product={product[0]}
        /> : ""}
      {/* <ProductInfoMobile /> */}

      <Footer />
    </div>
  )
}