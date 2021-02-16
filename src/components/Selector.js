import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  LONG_BREAK,
  POMODORO,
  SHORT_BREAK,
  SET_SELECTION,
  FONT_MAP,
} from "../constants";

const SelectorContainer = styled.div`
  background-color: var(--app-secondary-bk);
  border-radius: 100px;
  display: flex;
  justify-content: space-around;
  height: 50px;
  padding: 0.5rem;
`;

const TextStyles = styled.button`
  color: var(--app-grey);
  font-family: ${({ font }) => font};
  font-size: 14px;
  display: block;
  padding: 0 2rem;
  transition: ease-in 200ms all;
  background-color: ${({ color, selection, text }) => {
    if (selection === text) {
      return color;
    }
    return "transparent";
  }};
  border-radius: 25px;

  &:hover {
    color: var(--app-primary-white);
  }
`;

export default function Selector(props) {
  const { font, selection, color } = useSelector((state) => ({
    font: state.theme.font,
    selection: state.theme.selection,
    color: state.theme.color,
  }));

  const dispatch = useDispatch();

  return (
    <SelectorContainer>
      {[POMODORO, SHORT_BREAK, LONG_BREAK].map((selectionText, index) => (
        <TextStyles
          font={FONT_MAP[font]}
          selection={selection}
          color={color}
          key={index}
          text={selectionText}
          onClick={() =>
            dispatch({
              type: SET_SELECTION,
              payload: { selection: selectionText },
            })
          }
        >
          {selectionText}
        </TextStyles>
      ))}
    </SelectorContainer>
  );
}
