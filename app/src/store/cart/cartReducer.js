import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cartTypes"

const initialState = {
  products: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload]: state.products[action.payload]
            ? state.products[action.payload] + 1
            : 1,
        },
      }
    case REMOVE_PRODUCT: {
      const { [action.payload]: _, ...restWithoutKey } = state.products
      return {
        ...state,
        products: {
          ...(state.products[action.payload] > 1
            ? {
                ...state.products,
                [action.payload]: state.products[action.payload] - 1,
              }
            : restWithoutKey),
        },
      }
    }

    default:
      return state
  }
}

export default cartReducer
