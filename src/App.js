import React, { Suspense } from "react";
import MainLayout from "src/layouts/MainLayout";

const Home = React.lazy(() => import("src/pages/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <MainLayout>
          <Home />
        </MainLayout>
      </Suspense>
    </div>
  );
}

export default App;
