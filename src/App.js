import { useState } from "react";
import styled from "styled-components";

import Selector from "./components/Selector";
import Pomodoro from "./components/Pomodoro";
import Modal from "./components/Modal";
import SVGIcon from "./svg/SVGIcon";

const AppStyles = styled.div`
  background-color: var(--app-primary-bk);
  height: 100vh; // may need to get rid of
`;

const TitleStyles = styled.h1`
  color: var(--app-primary-white);
  font-family: "Kumbh Sans";
  font-size: 28px;
  margin: 4rem 0;
`;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
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
        <div style={{ marginTop: "4rem" }}>
          <Pomodoro />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <SVGIcon onclick={toggleModal} name="gear" />
        </div>
      </div>
      <Modal isOpen={modalOpen} toggleModal={toggleModal} />
    </AppStyles>
  );
}

export default App;
