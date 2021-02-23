import React, { useEffect, useState } from "react";
import indexedDb from "src/utils/indexdb";
import MainLayout from "src/layouts/MainLayout";
import Home from "src/pages/Home";
import {
  OBJECT_STORE_USERS,
  OBJECT_STORE_INCOMES,
  OBJECT_STORE_EXPENSES,
  OBJECT_STORE_PRINTERS,
} from "src/constants";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runIndexDb = async () => {
      await indexedDb.createObjectStore([
        OBJECT_STORE_USERS,
        OBJECT_STORE_INCOMES,
        OBJECT_STORE_EXPENSES,
        OBJECT_STORE_PRINTERS,
      ]);
      setLoading(false);
    };
    runIndexDb();
  }, []);

  if (loading) return null;

  return (
    <div className="App">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
