import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { FONT_MAP } from "../constants";
import { convertMstoMins } from "../utils";

import ProgressBar from "./ProgressBar";

const PomodoroStyles = styled.div`
  width: 366px;
  height: 366px;
  border-radius: 100%;
  background-color: var(--app-secondary-bk);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

const TimerStyles = styled.div`
  font-size: 100px;
  font-family: ${({ font }) => FONT_MAP[font]};
  color: var(--app-primary-white);
  letter-spacing: -3px;
`;
const TimerWrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimerButton = styled.button`
  font-family: ${({ font }) => FONT_MAP[font]};
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 16px;
  display: block;
  background: transparent;
  border: none;
  letter-spacing: 15px;
  position: absolute;
  bottom: 100px;
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
        <TimerWrapper>
          <TimerStyles font={font}>{convertMstoMins(currentTimer)}</TimerStyles>
          <TimerButton color={color} font={font}>
            START
          </TimerButton>
        </TimerWrapper>
      </PomodoroStyles>
    </OuterPomodoroStyles>
  );
}
