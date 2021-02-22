import { useState } from "react";
import ReactModal from "react-modal";
import styled, { css } from "styled-components";
import {
  FONT_MAP,
  KUMBH_SANS,
  SET_TIME_SETTINGS,
  SET_COLOR,
  SET_FONT,
} from "../constants.js";
import { useDispatch, useSelector } from "react-redux";

import SelectionButton from "./SelectionButton";
import CustomNumberInput from "./CustomNumberInput";
import SVGIcon from "../svg/SVGIcon";

// styles for modal ugh
import "../styles/modal.css";

const ModalHeader = styled.h1`
  font-family: ${FONT_MAP[KUMBH_SANS]};
  font-size: 20px;
`;

const ContentWrapperStyles = styled.div`
  position: relative;
`;

const ApplyButtonContainer = styled.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
`;
const ApplyButton = styled.button`
  font-size: 14px;
  display: block;
  padding: 1rem 2.5rem;
  border-radius: 25px;
  background-color: var(--app-red);
  color: var(--app-primary-white);
  font-family: ${FONT_MAP[KUMBH_SANS]};
`;

const Heading = styled.h2`
  font-family: ${FONT_MAP[KUMBH_SANS]};
  font-size: 11px;
  text-align: center;
  margin: 1rem;
  letter-spacing: 4.23px;

  @media (min-width: 768px) {
    margin: 0;
    text-align: left;

    ${({ type }) =>
      type === "time" &&
      css`
        margin: 1rem 0;
      `};
  }
`;

const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem;
  border-bottom: 1px solid #979797;

  @media (min-width: 375px) {
    padding: 2rem;
  }
`;

const SelectorWrapperBase = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  @media (min-width: 375px) {
    padding: 2rem 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;
  }
`;

const CustomNumberInputWrapper = styled.div``;

const TimeSelectorsWrapper = styled(SelectorWrapperBase)`
  padding: 0.5rem 0;

  @media (min-width: 768px) {
    flex-direction: column;

    ${CustomNumberInputWrapper} {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const FontSelectorsWrapper = styled(SelectorWrapperBase)`
  padding: 0.5rem 0;
  border-top: 1px solid #979797;
  align-items: center;

  @media (min-width: 375px) {
    padding: 2rem 0;
  }
  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }
`;
const ColorSelectorsWrapper = styled(SelectorWrapperBase)`
  padding: 0.5rem 0;
  border-top: 1px solid #979797;
  align-items: center;

  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }
`;

const Section = styled.div`
  margin-bottom: 1rem;
`;

export default function Modal(props) {
  const { isOpen, toggleModal } = props;
  const [pomodoroState, setPomodoroState] = useState(25);
  const [shortBreakState, setShortBreakState] = useState(5);
  const [longBreakState, setLongBreakState] = useState(15);
  const [localColorState, setLocalColorState] = useState("");
  const [localFontState, setLocalFontState] = useState("");
  const dispatch = useDispatch();

  const { font: currentFont, color: currentColor } = useSelector((state) => ({
    font: state.app.font,
    color: state.app.color,
  }));

  const applySettingChanges = () => {
    dispatch({
      type: SET_TIME_SETTINGS,
      payload: {
        pomodoro: pomodoroState,
        short_break: shortBreakState,
        long_break: longBreakState,
      },
    });
    dispatch({
      type: SET_COLOR,
      payload: {
        color: localColorState || currentColor,
      },
    });
    dispatch({
      type: SET_FONT,
      payload: {
        font: localFontState || currentFont,
      },
    });
    toggleModal();
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        closeTimeoutMS={0}
        contentLabel={"Settings"}
        portalClassName={"ReactModalPortal"}
        overlayClassName={"ReactModal__Overlay"}
        id={"modal_content"}
        className={"ReactModal__Content"}
        bodyOpenClassName={"ReactModal__Body--open"}
        htmlOpenClassName={"ReactModal__Html--open"}
        ariaHideApp={true}
        shouldFocusAfterRender={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={false}
        role={"dialog"}
        preventScroll={false}
        parentSelector={() => document.querySelector("#root")}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <ContentWrapperStyles>
          <ModalHeaderWrapper>
            <ModalHeader>Settings</ModalHeader>
            <SVGIcon name="close" onclick={toggleModal} />
          </ModalHeaderWrapper>
          <div style={{ padding: "0 2rem" }}>
            <TimeSelectorsWrapper>
              <Heading type="time">TIME (MINUTES)</Heading>
              <CustomNumberInputWrapper>
                <Section>
                  <CustomNumberInput
                    name="pomodoro"
                    text="pomodoro"
                    value={pomodoroState}
                    handleOnChange={setPomodoroState}
                  />
                </Section>
                <Section>
                  <CustomNumberInput
                    name="shortBreak"
                    text="short break"
                    value={shortBreakState}
                    handleOnChange={setShortBreakState}
                  />
                </Section>
                <Section>
                  <CustomNumberInput
                    name="longBreak"
                    text="long break"
                    value={longBreakState}
                    handleOnChange={setLongBreakState}
                  />
                </Section>
              </CustomNumberInputWrapper>
            </TimeSelectorsWrapper>
            <FontSelectorsWrapper>
              <Heading>FONT</Heading>
              <SelectionButton
                type="font"
                handleOnClick={setLocalFontState}
                state={localFontState}
              />
            </FontSelectorsWrapper>
            <ColorSelectorsWrapper>
              <Heading>COLOR</Heading>
              <SelectionButton
                type="color"
                handleOnClick={setLocalColorState}
                state={localColorState}
              />
            </ColorSelectorsWrapper>
          </div>
        </ContentWrapperStyles>
        <ApplyButtonContainer>
          <ApplyButton onClick={applySettingChanges}>Apply</ApplyButton>
        </ApplyButtonContainer>
      </ReactModal>
    </div>
  );
}
