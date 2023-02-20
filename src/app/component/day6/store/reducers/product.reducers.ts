import { createReducer, on } from '@ngrx/store';
import { Product } from '../../Product';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsFailure,
  getAllProductsSuccess,
  updateProduct,
} from '../actions/product.actions';

export interface ProductState {
  allProducts: Product[];
  errorMessage: string;
}

export const initialProductState: ProductState = {
  allProducts: [],
  errorMessage: '',
};

const _productReducers = createReducer(
  initialProductState,
  on(createProduct, (state, data) => {
    return { ...state, allProducts: [data.product, ...state.allProducts] };
  }),
  on(updateProduct, (state, { id, data }) => {
    return {
      ...state,
      allProducts: state.allProducts.map((prod) =>
        prod.id == id ? { ...prod, ...data } : prod
      ),
    };
  }),
  on(deleteProduct, (state, { id }) => {
    return {
      ...state,
      allProducts: state.allProducts.filter((product) => product.id != id),
    };
  }),
  on(getAllProducts, (state) => state),
  on(getAllProductsSuccess, (state, { allProducts }) => {
    return {
      ...state,
      allProducts: allProducts,
      errorMessage: '',
    };
  }),
  on(getAllProductsFailure, (state, { errorMessage }) => {
    return {
      ...state,
      errorMessage: errorMessage,
      allProducts: [],
    };
  })
);

export function productReducer(state: any, action: any) {
  return _productReducers(state, action);
}
