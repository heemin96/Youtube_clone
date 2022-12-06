import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import "./styles/global.css";
import styled from "styled-components";

const queryClient = new QueryClient();

function App() {
  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "0 auto",
        overflowX: "hidden",
      }}
    >
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}

export default App;
