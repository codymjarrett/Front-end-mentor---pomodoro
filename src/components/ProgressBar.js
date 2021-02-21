import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

const ProgressBarStyles = styled.svg`
  transform: rotate(-90deg);
  circle {
    fill: none;
    stroke-linecap: round;
  }
`;

const CircleStyles = styled.circle`
  transition: all 800ms ease-in;
  ${({ dashoffset, color, circumference }) => css`
    stroke-dashoffset: ${dashoffset};
    stroke-width: 4;
    stroke: ${color};
    stroke-dasharray: ${circumference};
  `}
`;

export default function ProgressBar() {
  const { color, selection, currentTimer, currentTimerInit } = useSelector(
    (state) => ({
      color: state.theme.color,
      selection: state.theme.selection,
      currentTimer: state.theme.currentTimer,
      currentTimerInit: state.theme.currentTimerInit,
    })
  );

  const [value, setValue] = useState();

  /*  ring logic start */
  useEffect(() => {
    const initialCurrentTimer = currentTimerInit;
    setValue(Math.abs((currentTimer / initialCurrentTimer) * 100 - 100));
  }, [currentTimer]);
  const RADIUS = 54;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  // this value needs to be the changer!!!! duration / start time * 100

  const progress = value / 100;

  const dashoffset = CIRCUMFERENCE * (1 - progress);

  const calculateRingPercentage = () => {};
  /* ring logic end*/

  return (
    <div>
      <ProgressBarStyles
        width="360"
        height="360"
        viewBox="0 0 120 120"
        color={color}
      >
        <CircleStyles
          cx="60"
          cy="60"
          r="54"
          color={color}
          dashoffset={dashoffset}
          circumference={CIRCUMFERENCE}
        />
      </ProgressBarStyles>
    </div>
  );
}

/*
var progressValue = document.querySelector('.progress__value');


var RADIUS = 54;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const value = 75

var progress = value / 100;
var dashoffset = CIRCUMFERENCE * (1 - progress);

progressValue.style.strokeDashoffset = dashoffset;
progressValue.style.strokeDasharray = CIRCUMFERENCE;

// based on the time left from the start time the percentage of time is the value

*/
