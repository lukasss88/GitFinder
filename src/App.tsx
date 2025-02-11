import {BrowserRouter, Route, Routes} from "react-router";
import './App.css'
import Home from "./pages/Home.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Container } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Container sx={{ p: 4, m: 2, bgcolor: "grey.100" }}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
          </Container>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
