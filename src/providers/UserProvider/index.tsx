import { createContext, FC, ReactNode, useReducer } from "react";
import UserReducer from "./UserReducer";
import * as userServices from "../../services/user";
import * as actionTypes from "../actionTypes";

type Props = {
  children: ReactNode;
};

type InitialState = {
  allUsers: { loaded: boolean; data: [] };
  singleUser: { loaded: false; data: {} };
  getAllUsers: () => void;
  getSingleUser: (userId: string) => void;
};

const initialState: InitialState = {
  allUsers: { loaded: false, data: [] },
  singleUser: { loaded: false, data: {} },

  getAllUsers: () => {},
  getSingleUser: () => {},
};

export const UserContext = createContext(initialState);

const UserProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // GET ALL USERS
  const getAllUsers = async () => {
    try {
      const res = await userServices.getAllUsers();

      if (res.status === 200) {
        dispatch({
          type: actionTypes.SET_USERS,
          payload: { loaded: true, data: res.data },
        });
      }
    } catch (e) {}
  };

  // GET SINGLE USER
  const getSingleUser = async (userId: string) => {
    try {
      const res = await userServices.getSingleUser(userId);
      console.log(res);

      if (res.status === 200) {
        dispatch({
          type: actionTypes.SET_USER,
          payload: { loaded: true, data: res.data },
        });
      }
    } catch (e) {}
  };

  return (
    <UserContext.Provider
      value={{
        allUsers: state.allUsers,
        singleUser: state.singleUser,
        getAllUsers,
        getSingleUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
