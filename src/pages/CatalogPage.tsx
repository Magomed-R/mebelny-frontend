import { useEffect } from "react";
import { useState } from "react";
import { Footer, FormSection, Header, Catalog, SortPanel, HeaderMobile, Loader } from "../components";
import img from '../assets/formImage.png';
import { useSelector } from "react-redux";


export const CatalogPage = () => {
  const [cardColumns, setCardColumns] = useState(4);
  const isLoading = useSelector((state: any) => state.products.isLoading)
  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])

  return (
    <div className='catalog'>

      {isLoading ?
        <Loader />
        :
        <>
          <Header />
          <HeaderMobile />
          <SortPanel
            cardColumns={cardColumns}
            setCardColumns={setCardColumns}
          />
          <Catalog
            cardColumns={cardColumns}
          />

          <FormSection image={img} />
          <Footer />
        </>
      }
    </div>
  )
}