const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload.foundUser,
        token: action.payload.encodedToken,
      };
    case "LOGOUT":
      localStorage.clear();
      return { isAuthenticated: false, userData: "", token: "" };
    default:
      return state;
  }
};
export { authReducer };
