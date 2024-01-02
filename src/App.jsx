import { HashRouter as Rounter, Route, Routes } from "react-router-dom";
import { Home, Login, Main } from "./components";

const App = () => {
  return (
    <Rounter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Rounter>
  );
};

export default App;
