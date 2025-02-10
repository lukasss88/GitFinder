import {BrowserRouter, Route, Routes} from "react-router";
import './App.css'
import Home from "./pages/Home.tsx";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
