import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component.jsx";
import Navigation from "./routes/Navigation/Navigation.component.jsx";
import SignIn from "./routes/SignIn/SignIn.component.jsx";

const Shop = () => {
  return <h1>Shop link</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
