import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Shop, MyPage, Login, Detail, Signup, CreateItem } from "./pages";
import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  const Redirect = () => {
    if (login) return <MyPage login={login} user={user} />;
    return <Navigate to={"/login"} />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main login={login} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/mypage" element={<Redirect />} />
        <Route
          path="/login"
          element={
            <Login
              login={login}
              setLogin={setLogin}
              user={user}
              setUser={setUser}
              Redirect={Redirect}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
