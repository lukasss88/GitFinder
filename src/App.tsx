import {BrowserRouter, Route, Routes} from "react-router";
import './App.css'
import Home from "./pages/Home.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Container } from "@mui/material";
import {SearchQueryProvider} from "./context/SearchQueryContext.tsx";
import {ReactNode} from "react";

const queryClient = new QueryClient();

type ProviderConfig = {
    Component: React.ComponentType<any>;
    props?: Record<string, any>;
};

const providers: ProviderConfig[] = [
    { Component: SearchQueryProvider },
    { Component: BrowserRouter },
    { Component: QueryClientProvider, props: { client: queryClient } },
];

// Functional technique: function composing
const ComposeProviders = ({ children }: {children: ReactNode}) =>
    providers.reduceRight(
        (acc, { Component, props }) => <Component {...props}>{acc}</Component>,
        children
    );

function App() {
  return (
    <ComposeProviders>
        <Container sx={{ p: 4, m: 2, bgcolor: "grey.100" }}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Container>
    </ComposeProviders>
  )
}

export default App
