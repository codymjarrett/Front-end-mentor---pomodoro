import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  LONG_BREAK,
  POMODORO,
  SHORT_BREAK,
  SET_SELECTION,
  FONT_MAP,
  SELECTION_MAP,
} from "../constants";

const SelectorContainer = styled.div`
  width: 90%;
  background-color: var(--app-secondary-bk);
  border-radius: 100px;
  display: flex;
  justify-content: space-around;
  height: 50px;
  padding: 0.5rem;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const TextStyles = styled.button`
  color: var(--app-grey);
  font-family: ${({ font }) => font};
  font-size: 13px;
  display: block;
  padding: 0 1.3rem;
  transition: ease-in 200ms all;

  ${({ color, selection, text }) => css`
    background-color: ${selection === text ? color : "transparent"};
    color: ${selection === text ? `var(--app-primary-bk)` : `var(--app-grey)`};
  `}

  border-radius: 25px;

  &:hover {
    color: var(--app-primary-white);
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export default function Selector() {
  const { font, selection, color } = useSelector((state) => ({
    font: state.app.font,
    selection: state.app.selection,
    color: state.app.color,
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
          {SELECTION_MAP[selectionText]}
        </TextStyles>
      ))}
    </SelectorContainer>
  );
}
