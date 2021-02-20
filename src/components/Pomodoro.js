import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  FONT_MAP,
  TOGGLE_TIMER,
  COMPLETE_TIMER,
  DECREMENT_TIMER,
  INITIATE_TIMER,
  PAUSE_TIMER,
} from "../constants";
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

  const {
    font,
    color,
    currentTimer,
    timerRunning,
    timerComplete,
  } = useSelector((state) => ({
    font: state.theme.font,
    color: state.theme.color,
    currentTimer: state.theme.currentTimer,
    timerRunning: state.theme.timerRunning,
    timerComplete: state.theme.timerComplete,
  }));

  const timerButtonText = () => {
    if (timerComplete) {
      return "RESTART";
    }
    if (timerRunning) {
      return "PAUSE";
    } else {
      return "START";
    }
  };

  useEffect(() => {
    if (timerRunning) {
      let myInterval = setInterval(() => {
        if (currentTimer > 0) {
          dispatch({ type: DECREMENT_TIMER });
        }
        if (currentTimer === 0) {
          clearInterval(myInterval);
          dispatch({ type: COMPLETE_TIMER });
          return;
        }
      }, 1000);

      return () => {
        clearInterval(myInterval);
      };
    }
  }, [currentTimer, timerRunning, timerComplete]);

  const handleInitiateTimer = () => {
    if (!timerRunning) {
      dispatch({ type: TOGGLE_TIMER, payload: { timerRunning: true } });
    }
    if (timerRunning) {
      dispatch({ type: PAUSE_TIMER });
    }
  };

  return (
    <OuterPomodoroStyles>
      <PomodoroStyles>
        <ProgressBar />
        <TimerWrapper>
          <TimerStyles font={font}>{convertMstoMins(currentTimer)}</TimerStyles>
          <TimerButton
            color={color}
            font={font}
            onClick={() => {
              dispatch({
                type: TOGGLE_TIMER,
                payload: { timerRunning: timerRunning ? false : true },
              });
              handleInitiateTimer();
            }}
          >
            {timerButtonText()}
          </TimerButton>
        </TimerWrapper>
      </PomodoroStyles>
    </OuterPomodoroStyles>
  );
}
