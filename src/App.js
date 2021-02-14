import React from "react";
import MainLayout from "src/layouts/MainLayout";
import Home from "src/pages/Home";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
