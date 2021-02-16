import styled from "styled-components";
import { useSelector } from "react-redux";

const ProgressBarStyles = styled.svg`
  transform: rotate(-90deg);
  circle {
    fill: none;
    stroke-linecap: round;
  }
`;

export default function ProgressBar() {
  const color = useSelector((state) => state.theme.color);
  return (
    <div>
      <ProgressBarStyles
        width="360"
        height="360"
        viewBox="0 0 120 120"
        color={color}
      >
        <circle cx="60" cy="60" r="54" stroke-width="4" stroke={color} />
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
