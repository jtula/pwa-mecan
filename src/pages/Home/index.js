import React from "react";
import useUser from "src/hooks/useUser";
import MainLayout from "src/layouts/MainLayout";
import Login from "./login";

const Home = () => {
  const { user } = useUser();

  return <>{user ? <MainLayout /> : <Login key="login" />}</>;
};

export default Home;
