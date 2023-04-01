import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";
import "./home.scss";

const Home: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sign-in");
  }, []);

  return (
    <div className="home">
      <SpinnerRoundOutlined color="#39CDCC" />
    </div>
  );
};

export default Home;
