import React, { useEffect, useState } from "react";
import indexedDb from "src/utils/indexdb";
import { UserContextProvider } from "src/context/UserContext";
import { Route, Switch } from "wouter";
import Home from "src/pages/Home";
import Incomes from "src/pages/Incomes";
import Expenses from "src/pages/Expenses";
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
    <UserContextProvider>
      <div className="App">
        <Switch>
          <Route component={Home} path="/" />
          <Route component={Incomes} path="/incomes" />
          <Route component={Expenses} path="/expenses" />
        </Switch>
      </div>
    </UserContextProvider>
  );
}

export default App;
