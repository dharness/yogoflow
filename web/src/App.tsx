import { useEffect } from "react";
import RequireAuth from "./components/RequireAuth";
import { useAppDispatch } from "./app/store";
import { loadUser } from "./reducers/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [loadUser]);

  return (
    <>
      <RequireAuth>
        <div>Hello</div>
      </RequireAuth>
    </>
  );
}

export default App;
