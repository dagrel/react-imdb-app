import styled from '@emotion/styled';
// import { keyframes } from '@emotion/react';
import Dashboard from "./Components/Movies/Dashboard.js"

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #FFFFFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
       <Dashboard />
      </AppHeader>
    </AppContainer>
  );
}

export default App;