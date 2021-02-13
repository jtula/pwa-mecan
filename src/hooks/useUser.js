import { useCallback, useContext, useState } from "react";
import Context from "src/context/UserContext";
import login from "src/services/";

export default function useUser() {
  const { user, setUser } = useContext(Context);
  const [loadingUser, setLoadingUser] = useState(false);
  const [userError, setUserError] = useState(false);

  const loginUser = useCallback(
    ({ username }) => {
      setLoadingUser(true);
      login({ username })
        .then((response) => {
          setLoadingUser(false);
          setUserError(false);
          setUser(response.user);
          window.sessionStorage.setItem(
            "username",
            JSON.stringify(response.user)
          );
        })
        .catch((err) => {
          window.sessionStorage.removeItem("username");
          setLoadingUser(false);
          setUserError(true);
        });
    },
    [setUser]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("user");
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
