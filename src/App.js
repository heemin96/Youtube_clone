import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";

import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import SearchHeader from "./components/SearchHeader";

import "./styles/global.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Container>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </Container>
  );
}

const Container = styled.div`
  max-width:95%;
  margin: 0 auto;
  padding: 0; auto;
`;

export default App;
