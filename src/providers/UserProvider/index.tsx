import { createContext, FC, ReactNode, useReducer } from "react";
import UserReducer from "./UserReducer";
import * as userServices from "../../services/user";
import * as actionTypes from "../actionTypes";

type Props = {
  children: ReactNode;
};

type UserType = {
  accountBalance: string;
  accountNumber: string;
  email: string;
  userName: string;
  education: {
    duration: string;
    employmentStatus: string;
    level: string;
    loanRepayment: string;
    monthlyIncome: string[];
    officeEmail: string;
    sector: string;
  };
  profile: {
    avatar: string;
    bvn: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    address: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
};

type InitialState = {
  allUsers: { loaded: boolean; data: UserType[] };
  singleUser: { loaded: false; data: UserType };
  getAllUsers: () => void;
  getSingleUser: (userId: string) => void;
};

const initialState: InitialState = {
  allUsers: { loaded: false, data: [] },
  singleUser: {
    loaded: false,
    data: {
      accountBalance: "0",
      accountNumber: "",
      email: "",
      userName: "",
      education: {
        duration: "",
        employmentStatus: "",
        level: "",
        loanRepayment: "",
        monthlyIncome: [],
        officeEmail: "",
        sector: "",
      },
      profile: {
        avatar: "",
        bvn: "",
        firstName: "",
        gender: "",
        lastName: "",
        phoneNumber: "",
      },
      socials: {
        facebook: "",
        instagram: "",
        twitter: "",
      },
      guarantor: {
        address: "",
        firstName: "",
        gender: "",
        lastName: "",
        phoneNumber: "",
      },
    },
  },

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
