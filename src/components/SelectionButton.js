import styled from "styled-components";
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

  &:hover {
    box-shadow: 0 0 2px #888;
    border: 3px solid var(--app-secondary-white);
  }
`;

export default function SelectionButton(props) {
  const { type } = props;

  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      {type === "font"
        ? [KUMBH_SANS, ROBOTO_SLAB, SPACE_MONO].map((font, i) => (
            <SelectionButtonStyles
              style={{
                backgroundColor: `var(--app-grey)`,
              }}
              selection={font}
              key={i}
              font={font}
              // onClick={() => dispatch({ type: SET_FONT, payload: { font } })}
            >
              <span style={{ fontFamily: FONT_MAP[font] }}>Aa</span>
            </SelectionButtonStyles>
          ))
        : [APP_RED, APP_TEAL, APP_PURPLE].map((color, i) => (
            <SelectionButtonStyles
              style={{ backgroundColor: color }}
              selection={color}
              key={i}
              // onClick={() => dispatch({ type: SET_COLOR, payload: { color } })}
            ></SelectionButtonStyles>
          ))}
    </div>
  );
}

SelectionButton.propTypes = {
  type: PropTypes.oneOf(["color", "font"]).isRequired,
};
