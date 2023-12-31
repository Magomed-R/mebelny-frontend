import { useEffect, useLayoutEffect } from "react"
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GET_USER_CART, checkAccessToken, getAdminData, getProducts } from "./store";
import { CatalogPage, AboutPage, Page404, ProductPage, ContactsPage, MainPage, LoginPage, UserPage, RegisterPage, AdminPage, CartPage } from './pages';
import { useSelector } from "react-redux";

export const App = () => {
  const dispatch: any = useDispatch();
  const isAuth = useSelector((state: any) => state.user.isAuth)
  const cartFromStorage = localStorage.getItem('cart');

  useLayoutEffect(() => {
    dispatch(getProducts())
    dispatch(checkAccessToken())
    dispatch(getAdminData())
    if (!isAuth && cartFromStorage) {
      dispatch({ type: GET_USER_CART, payload: JSON.parse(cartFromStorage) })
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/add' element={<AdminPage />} />
        <Route path='/admin/users' element={<AdminPage />} />
        <Route path='/admin/orders' element={<AdminPage />} />
        <Route path='/admin/sale' element={<AdminPage />} />
        <Route path='/admin/edit/:id' element={<AdminPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}