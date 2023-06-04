import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ReferredFriends from "./pages/ReferredFriends/ReferredFriends";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/referred" element={<ReferredFriends />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
