import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.page";
import Navigation from "./routes/navigation/navigation.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
