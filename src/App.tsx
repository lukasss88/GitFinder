import {BrowserRouter, Route, Routes} from "react-router";
import './App.css'
import Home from "./pages/Home.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
