import { useEffect } from 'react';
import { Header, MainPageSlider, BasicSlider, Individual, History, Advantages, Delivery, FormSection, Footer, Title, MyBtn, MyContainer, HeaderMobile, Loader } from '../components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import slideImg1 from '../assets/mainSlider1.png'
import slideImg2 from '../assets/mainSlider2.png'
import slideImg3 from '../assets/mainSlider3.png'
import formImage from '../assets/formImage.png';
import '../reset.scss';

export const MainPage = () => {
  const newProducts = useSelector((state: any) => state.products.newProducts)
  const isLoading = useSelector((state: any) => state.products.isLoading)

  //Переписать, когда сделаем бекенд
  const items = [
    {
      "image": slideImg1,
      "btnBackgroundColor": "#FF9619",
      "btnColor": "#4B4844",
      "background": "#873101",
      "text": "Создаем уют вместе!",
      "btnText": "Перейти в каталог",
      "secondaryText": "Основано в 2006 году"
    },
    {
      "image": slideImg2,
      "btnBackgroundColor": "#CCB2A3",
      "btnColor": "#4B4844",
      "background": "#4B4844",
      "text": "Есть все для дома и офиса!",
      "btnText": "Перейти в каталог",
      "secondaryText": "Основано в 2006 году"
    },
    {
      "image": slideImg3,
      "btnBackgroundColor": "#FF9619",
      "btnColor": "#FFFFFF",
      "background": "#CCB2A3",
      "text": "Создаем уют вместе!",
      "btnText": "Перейти в каталог",
      "secondaryText": "Основано в 2006 году"
    }
  ]

  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])

  return (
    <div className='main'>
      {isLoading ?
        <Loader />
        :
        (
          <>
            <Header />
            <HeaderMobile />
            <MainPageSlider items={items} />

            <MyContainer>
              <Title mb='50px' dark>новинки</Title>
            </MyContainer>

            <BasicSlider
              showPrice
              slidesToShow={3}
              items={newProducts}
              mb='60px'
            />
            <Link to='/catalog'>
              <MyBtn
                color='#fff'
                bgColor='#873101'
                margin='0px auto 195px auto'
              >
                Перейти в каталог
              </MyBtn>
            </Link>
            <Individual />
            <History />

            <Advantages />

            <MyContainer>
              <Title mb='50px' dark>Доставка</Title>
            </MyContainer>
            <Delivery />

            <FormSection
              image={formImage}
            />

            <Footer />
          </>
        )
      }

    </div>
  );
}
