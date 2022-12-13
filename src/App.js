import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled, { ThemeProvider } from "styled-components";

import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import SearchHeader from "./components/SearchHeader";
import { theme } from "./styles/theme";
import "./styles/global.css";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchHeader />
      <VideoContainer>
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </VideoContainer>
    </ThemeProvider>
  );
}

const VideoContainer = styled.div`
  max-width:100%;
  margin: 0 auto;
  padding: 0; auto;
`;

export default App;
