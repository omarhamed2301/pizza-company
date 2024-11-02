const userInitialState = {
  userName: "",
};
export default function UserSlice(state = userInitialState, action) {
  switch (action.type) {
    case "account/userName":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}
export function updateName(name){
  return {
    type: "account/userName",
    payload: name,
  };
}