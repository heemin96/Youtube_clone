import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import "./styles/global.css";
import styled from "styled-components";

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
  max-width:90%;
  margin: 0 auto;
  padding: 0; auto;
`;

export default App;
