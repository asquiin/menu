const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.id === newItem.id && item.customization === newItem.customization
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity = newItem.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, newItem] };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.customization !== action.payload.customization
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
