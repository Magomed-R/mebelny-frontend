import { PoductsState, Action } from '../..'
import { GET_ALL_PRODUCTS, GET_NEW_PRODUCTS, NEXT_CATALOG_PAGE, PREV_CATALOG_PAGE, SEARCHING_OR_FILTERING_PRODUCTS, GET_TAGS, GET_MANUFACTURERS, END_LOADING } from './actions';

const initialState: PoductsState = {
  isLoading: true,
  newProducts: [],
  allProducts: [],
  productsPerPage: 16,
  totalCatalogPages: 1,
  currentCatalogPage: 1,
  isSearching: false,
  filteredProducts: [],
  tags: [],
  manufacturers: []
};

export const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      const pagesCount = Math.ceil(action.payload.length / state.productsPerPage)
      return { ...state, allProducts: [...action.payload], filteredProducts: [...action.payload], totalCatalogPages: pagesCount };
    case GET_NEW_PRODUCTS:
      return { ...state, newProducts: [...action.payload] };
    case NEXT_CATALOG_PAGE:
      return { ...state, currentCatalogPage: state.currentCatalogPage + 1 }
    case PREV_CATALOG_PAGE:
      return { ...state, currentCatalogPage: state.currentCatalogPage - 1 }
    case SEARCHING_OR_FILTERING_PRODUCTS:
      const pagesCountFiltered = Math.ceil(action.payload.length / state.productsPerPage)
      return { ...state, filteredProducts: action.payload, totalCatalogPages: pagesCountFiltered, currentCatalogPage: 1 }
    case GET_TAGS:
      return { ...state, tags: action.payload }
    case GET_MANUFACTURERS:
      return { ...state, manufacturers: action.payload }
    case END_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
};