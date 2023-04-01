import { FC, ReactNode } from "react";
import Navbar from "../Navbar";
import SideBar from "../Navbar/SideBar";
import "../../styles/layout.scss";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
