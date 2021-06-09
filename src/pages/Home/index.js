import React from "react";
import useUser from "src/hooks/useUser";
import MainLayout from "src/layouts/MainLayout";
import Dashboard from "../Reports";
import Login from "../Login";

const Home = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
