import React from "react";
import useUser from "src/hooks/useUser";
import Login from "./login";

const Home = () => {
  const { user, loadingUser, userError, loginUser } = useUser();

  return <>{user ? user.username : <Login />}</>;
};

export default Home;
