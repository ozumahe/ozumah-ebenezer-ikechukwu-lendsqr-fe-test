import { FC, ReactNode } from "react";
import UserProvider from "./UserProvider";

type Props = {
  children: ReactNode;
};

const GlobalProvider: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default GlobalProvider;
