import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/Home";
import UsersPage from "./pages/Users";
import routes from "./routes";
import { useAppDispatch } from "./store/hooks";
import { getUsersNumberAction } from "./store/queries";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsersNumberAction());
  }, [dispatch]);
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path={routes.homePageRoute} element={<HomePage />} />
          <Route path={routes.usersPageRoute} element={<UsersPage />} />
          <Route path="/*" element={<Navigate to={routes.homePageRoute} />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
