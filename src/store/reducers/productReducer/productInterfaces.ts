export interface ProductCharacteristic {
  _id: string,
  name: string,
  text: string
}

export interface IProduct {
  sale:number,
  discount: number,
  _id: string,
  title: string,
  characteristics: ProductCharacteristic[],
  createdAt: string,
  description: string,
  photos: string[],
  preview: string,
  price: number,
  updatedAt: string,
  views: number,
  __v: number
}

export type PoductsState = {
  isLoading: boolean,
  newProducts: IProduct[],
  allProducts: IProduct[],
  productsPerPage: number,
  totalCatalogPages: number,
  currentCatalogPage: number,
  isSearching: boolean,
  filteredProducts: IProduct[],
  tags: [],
  manufacturers: []
}