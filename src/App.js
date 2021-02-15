import styled from "styled-components";

import Selector from "./components/Selector";

const AppStyles = styled.div`
  background-color: var(--app-primary-bk);
  height: 100vh; // may need to get rid of
`;

const TitleStyles = styled.h1`
  color: var(--app-primary-white);
  font-family: "Kumbh Sans";
  font-size: 28px;
  margin: 3rem 0;
`;

function App() {
  return (
    <AppStyles>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TitleStyles>pomodoro</TitleStyles>
        <Selector />
      </div>
    </AppStyles>
  );
}

export default App;
