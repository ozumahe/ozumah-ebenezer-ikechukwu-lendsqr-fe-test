import * as actionTypes from "../actionTypes";

const setAllUsers = (state: any, action: { payload: any }) => {
  return {
    ...state,
    allUsers: action.payload,
  };
};

const setSingleUser = (state: any, action: { payload: {} }) => {
  return {
    ...state,
    singleUser: action.payload,
  };
};

const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return setAllUsers(state, action);
    case actionTypes.SET_USER:
      return setSingleUser(state, action);

    default:
      return state;
  }
};

export default UserReducer;
