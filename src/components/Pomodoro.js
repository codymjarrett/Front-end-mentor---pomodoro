import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const PomodoroStyles = styled.div`
  width: 366px;
  height: 366px;
  border-radius: 100%;
  background-color: var(--app-secondary-bk);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Pomodoro() {
  return (
    <PomodoroStyles>
      <ProgressBar />
    </PomodoroStyles>
  );
}
