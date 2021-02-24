import { useCallback, useContext, useState } from "react";
import Context from "src/context/UserContext";
import { login } from "src/services/users";

export default function useUser() {
  const { user, setUser } = useContext(Context);
  const [loadingUser, setLoadingUser] = useState(false);
  const [userError, setUserError] = useState(false);

  const loginUser = useCallback(
    (id) => {
      setLoadingUser(true);
      login(id)
        .then((response) => {
          setLoadingUser(false);
          setUserError(false);
          setUser(response);
          window.sessionStorage.setItem("username", JSON.stringify(response));
        })
        .catch((err) => {
          console.error(err);
          window.sessionStorage.removeItem("username");
          setLoadingUser(false);
          setUserError(true);
        });
    },
    [setUser]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("username");
    setUser(null);
  }, [setUser]);

  return {
    user,
    loadingUser,
    userError,
    loginUser,
    logout,
  };
}
