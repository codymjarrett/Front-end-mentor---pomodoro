import PropTypes from "prop-types";
import styled from "styled-components";
import { FONT_MAP, KUMBH_SANS, SET_TIME_SETTINGS } from "../constants.js";

import SVGIcon from "../svg/SVGIcon";

const CustomInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
  }
`;
const CustomInputStyles = styled.input`
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  background-color: #eff1fa;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-family: ${FONT_MAP[KUMBH_SANS]};
  text-indent: 20px;
`;

const CustomInputWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 40px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  svg {
    cursor: pointer;
  }
`;

const LabelStyles = styled.label`
  font-family: ${FONT_MAP[KUMBH_SANS]};
  font-size: 12px;
  font-weight: 700;
  color: #1e213f;
  opacity: 0.4;

  @media (min-width: 768px) {
    margin: 0.5rem 0;
    display: block;
  }
`;
export default function CustomNumberInput(props) {
  const { name, text, min = 5, max = 100, handleOnChange, value } = props;
  const handleStepUp = () => {
    const el = document.getElementById(`input-${name}`);
    el.stepUp();
    handleOnChange(el.value);
  };
  const handleStepDown = () => {
    const el = document.getElementById(`input-${name}`);
    el.stepDown();
    handleOnChange(el.value);
  };
  return (
    <CustomInputContainer>
      <LabelStyles htmlFor={`input-${name}`}>{text}</LabelStyles>
      <CustomInputWrapper>
        <CustomInputStyles
          type="number"
          min={min}
          max={max}
          step="5"
          value={value}
          id={`input-${name}`}
          name={name}
        />
        <ArrowContainer>
          <SVGIcon onclick={handleStepUp} name="arrowUp" />
          <SVGIcon onclick={handleStepDown} name="arrowDown" />
        </ArrowContainer>
      </CustomInputWrapper>
    </CustomInputContainer>
  );
}

CustomNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
