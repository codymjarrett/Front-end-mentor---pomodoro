import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import {
  SPACE_MONO,
  KUMBH_SANS,
  ROBOTO_SLAB,
  APP_RED,
  APP_PURPLE,
  APP_TEAL,
  FONT_MAP,
  SET_COLOR,
  SET_FONT,
} from "../constants";

const SelectionButtonStyles = styled.button`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  font-size: 15px;
  margin-right: 1rem;

  ${({ localFontState, buttonFontType }) => css`
    background-color: ${localFontState === buttonFontType
      ? "black"
      : "#eff1fa"};
    color: ${localFontState === buttonFontType
      ? "var(--app-primary-white)"
      : "var(--app-primary-bk)"};
  `}
  ${({ type }) =>
    type === "font" &&
    css`
      span {
        font-weight: ${({ font }) => {
          if (font === ROBOTO_SLAB) {
            return "400";
          } else if (font === SPACE_MONO) {
            return "700";
          } else if (font === KUMBH_SANS) {
            return "700";
          }
        }};
      }
    `}

  ${({ type, buttonColor, localColorState }) =>
    type === "color" &&
    buttonColor === localColorState &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        content: "";
        height: 5px;
        width: 14px;
        transform: rotate(-45deg);
        border-bottom: 2px solid black;
        border-left: 2px solid black;
      }
    `}

    &:hover {
    box-shadow: 0 0 2px #888;
    border: 3px solid var(--app-secondary-white);
  }
`;

export default function SelectionButton(props) {
  const { type, handleOnClick, state } = props;

  const dispatch = useDispatch();
  // const { font: currentAppFont, selection, color } = useSelector((state) => ({
  //   font: state.theme.font,
  //   selection: state.theme.selection,
  //   color: state.theme.color,
  // }));

  return (
    <div style={{ display: "flex" }}>
      {type === "font"
        ? [KUMBH_SANS, ROBOTO_SLAB, SPACE_MONO].map((buttonFontType, i) => (
            <SelectionButtonStyles
              localFontState={state}
              type="font"
              key={i}
              buttonFontType={buttonFontType}
              onClick={() => handleOnClick(buttonFontType)}
            >
              <span style={{ fontFamily: FONT_MAP[buttonFontType] }}>Aa</span>
            </SelectionButtonStyles>
          ))
        : [APP_RED, APP_TEAL, APP_PURPLE].map((color, i) => (
            <SelectionButtonStyles
              style={{ backgroundColor: color }}
              buttonColor={color}
              localColorState={state}
              type="color"
              key={i}
              onClick={() => handleOnClick(color)}
            ></SelectionButtonStyles>
          ))}
    </div>
  );
}

SelectionButton.propTypes = {
  type: PropTypes.oneOf(["color", "font"]).isRequired,
  handleOnClick: PropTypes.func,
};
