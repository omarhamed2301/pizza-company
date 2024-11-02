const cartInitialState = {
  cart: [],
};
export default function cartReducer(state = cartInitialState, action) {
  switch (action.type) {
    case "cart/addItem":
      return {
        cart: [...state.cart, action.payload],
      };
    case "cart/removeItem":
      return {
        cart: state.cart.filter((pizza) => pizza.pizzaId !== action.payload),
      };
    case "cart/increaseQuantity":
      return {
        cart: state.cart.map((pizza) =>
          pizza.pizzaId === action.payload.id
            ? { ...pizza, quantity: pizza.quantity + 1, totalPrice: (pizza.quantity + 1) * pizza.unitPrice }
            : pizza
        ),
      };
    case "cart/decreaseQuantity":
      return {
        cart: state.cart.map((pizza) =>
          pizza.pizzaId === action.payload.id && pizza.quantity > 1
            ? { ...pizza, quantity: pizza.quantity - 1, totalPrice: (pizza.quantity - 1) * pizza.unitPrice }
            : pizza
        ),
      };
    case "cart/clearCart":
      return {
        cart: [],
      };
    default:
      return state;
  }
}
export function addItem(pizza) {
  return {
    type: "cart/addItem",
    payload: pizza,
  };
}
export function removeItem(pizzaId) {
  return {
    type: "cart/removeItem",
    payload: pizzaId,
  };
}

export function increaseQuantity(pizzaId) {
  return {
    type: "cart/increaseQuantity",
    payload: { id: pizzaId },
  };
}
export function decreaseQuantity(pizzaId) {
  return {
    type: "cart/decreaseQuantity",
    payload: { id: pizzaId },
  };
}
export function clearCart() {
  return {
    type: "cart/clearCart",
  };
}

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity?? 0
