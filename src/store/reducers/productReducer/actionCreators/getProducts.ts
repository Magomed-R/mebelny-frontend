import { serverAdress } from "../../../../utils"
import { END_LOADING, GET_ALL_PRODUCTS, GET_MANUFACTURERS, GET_NEW_PRODUCTS, GET_TAGS } from "../actions"
import { IProduct } from "../productInterfaces"

export const getProducts = () => {

  return (dispatch: any) => {
    fetch(serverAdress + '/furniture/all')
      .then(response => response.json())
      .then((productsFromServer) => {

        const tagsFromServer = Array.from(new Set(productsFromServer.map(({ tags }: { tags: string }) => {
          return tags
        })))

        const manufacturersFromServer = Array.from(new Set(productsFromServer.map(({ manufacturer }: { manufacturer: string }) => {
          return manufacturer
        })))
        
        const filteredProducts = productsFromServer.filter((product: any) => {
          return !product.isDeleted
        }).sort((a: IProduct, b: IProduct) => {
          return a.title > b.title
        })

        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: filteredProducts
        })

        dispatch({
          type: GET_TAGS,
          payload: tagsFromServer
        })

        dispatch({
          type: GET_MANUFACTURERS,
          payload: manufacturersFromServer
        })

        dispatch({
          type: END_LOADING
        })
      })

    fetch(serverAdress + '/furniture/all?sort=date')
      .then(response => response.json())
      .then((productsFromServer) => {

        const filteredProducts = productsFromServer.filter((product: any) => {
          return !product.isDeleted
        })
        dispatch({
          type: GET_NEW_PRODUCTS,
          payload: filteredProducts
        })
      })
  }
}
