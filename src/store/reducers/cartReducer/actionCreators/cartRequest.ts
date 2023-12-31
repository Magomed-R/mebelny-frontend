import { serverAdress } from "../../../../utils"
import { GET_USER_CART } from "../actions"

interface product {
  _id: string,
  count: number
}

export const cartRequest = (requestType: string,  isAuth: boolean, productId: string) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!isAuth) {
    return async (dispatch: any) => {
    const cartFromStorage = localStorage.getItem('cart');
    let parsedCart: product[] = cartFromStorage ? JSON.parse(cartFromStorage) : []
    
    if (requestType === 'clear') {
      console.log('clear')
      localStorage.removeItem('cart')
      return dispatch({type: GET_USER_CART, payload: []})
    }

    if (!parsedCart.length) {
        const item: product = {
          _id: productId,
          count: 1
        }
        dispatch({type: GET_USER_CART, payload: [item]})
        localStorage.setItem('cart', JSON.stringify([item]))
    } else {
      if (!!parsedCart.find((item: any) => item._id === productId)) {
        for (let product of parsedCart) {
          if (product._id === productId) {
            if (requestType === 'plus') {
              product.count++
            } 
            else if (requestType === 'minus') {
                product.count--
            } else if (requestType === 'delete') {
              parsedCart = parsedCart.filter((item: any) => {
                return item._id !== product._id
              })
            }
          }
        }
        dispatch({type: GET_USER_CART, payload: parsedCart})
        localStorage.setItem('cart', JSON.stringify(parsedCart))
      } else {
          const item: product = {
            _id: productId,
            count: 1
          }
          parsedCart.push(item)
          dispatch({type: GET_USER_CART, payload: parsedCart})
          localStorage.setItem('cart', JSON.stringify(parsedCart))
      }
    }
  }
  } else {
    return async (dispatch: any) => {
      try {
        if (requestType === 'clear') {
          localStorage.removeItem('cart')
        }
        const res = await fetch(serverAdress + '/cart/' + requestType, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
          },
          body: productId ? JSON.stringify({
            id: productId
          }) : '',
        })
        const user = await res.json()
        dispatch({ type: GET_USER_CART, payload: user.cart })
      } catch (err) {
        console.log(err)
      }
    }
  }
  
}