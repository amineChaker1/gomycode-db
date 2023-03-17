import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App py-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Shop />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
