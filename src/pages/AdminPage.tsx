import { useEffect } from "react"
import { AddProduct, AdminNav, AdminOrders, AdminSale, AdminUsers, Footer, Header, HeaderMobile } from "../components"
import { Navigate, useLocation, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export const AdminPage = () => {
  const location = useLocation().pathname
  const isAdmin = useSelector((state: any) => state.user.role) === 'admin'

  useEffect(() => {
    /*TODO */
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.position = 'static';
  }, [])
  return (
    <>
      {isAdmin ? (
        <div className="admin">

          <Header />
          <HeaderMobile />


          <AdminNav />

          {location === '/admin/add' &&
            <AddProduct />
          }

          {location.includes('/admin/edit') &&
            <AddProduct />
          }

          {location.includes('admin/users') &&
            <AdminUsers />
          }

          {location.includes('admin/orders') &&
            <AdminOrders />
          }

          {location.includes('admin/sale') &&
            <AdminSale />
          }

          <Footer />
        </div>
      ) : <Navigate to='/' />}
    </>
  )
}