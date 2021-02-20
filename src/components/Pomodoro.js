import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { FONT_MAP } from "../constants";
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
const OuterPomodoroStyles = styled.div`
  width: 406px;
  height: 406px;
  border-radius: 100%;
  background: linear-gradient(to left, #2e325a, #0e112a);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 5px 14px var(--app-secondary-bk),
    -5px 0 34px -29px var(--app-grey);
`;

const TimerStyles = styled.span`
  position: absolute;
  font-size: 80px;
  font-family: ${({ font }) => FONT_MAP[font]};
  color: var(--app-primary-white);
`;

export default function Pomodoro() {
  const dispatch = useDispatch();

  const { font, color, currentTimer } = useSelector((state) => ({
    font: state.theme.font,
    color: state.theme.color,
    currentTimer: state.theme.currentTimer,
  }));

  return (
    <OuterPomodoroStyles>
      <PomodoroStyles>
        <ProgressBar />
        <TimerStyles font={font}>{currentTimer}</TimerStyles>
      </PomodoroStyles>
    </OuterPomodoroStyles>
  );
}
