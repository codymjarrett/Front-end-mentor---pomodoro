import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

const ProgressBarStyles = styled.svg`
  width: 267px;
  height: 267px;
  transform: rotate(-90deg);

  @media (min-width: 768px) {
    width: 366px;
    height: 366px;
  }

  circle {
    fill: none;
    stroke-linecap: round;
  }
`;

const CircleStyles = styled.circle`
  transition: all 500ms linear;
  ${({ dashoffset, color, circumference }) => css`
    stroke-dashoffset: ${dashoffset};
    stroke-width: 4;
    stroke: ${color};
    stroke-dasharray: ${circumference};
  `}
`;

export default function ProgressBar() {
  const { color, currentTimer, currentTimerInit } = useSelector((state) => ({
    color: state.app.color,
    currentTimer: state.app.currentTimer,
    currentTimerInit: state.app.currentTimerInit,
  }));

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
      <ProgressBarStyles viewBox="0 0 120 120" color={color}>
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
