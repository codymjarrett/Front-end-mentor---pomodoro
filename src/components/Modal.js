import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { FONT_MAP, KUMBH_SANS, SET_TIME_SETTINGS } from "../constants.js";
import { useDispatch } from "react-redux";

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
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 4.23px;
`;

export default function Modal(props) {
  const { isOpen, toggleModal } = props;
  const [pomodoroState, setPomodoroState] = useState(25);
  const [shortBreakState, setShortBreakState] = useState(5);
  const [longBreakState, setLongBreakState] = useState(15);
  const dispatch = useDispatch();

  const applySettingChanges = () => {
    dispatch({
      type: SET_TIME_SETTINGS,
      payload: {
        pomodoro: pomodoroState,
        short_break: shortBreakState,
        long_break: longBreakState,
      },
    });
    toggleModal();
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        closeTimeoutMS={0}
        contentLabel={"Example Modal"}
        portalClassName={"ReactModalPortal"}
        overlayClassName={
          "ReactModal__Overlay"
          /* String className to be applied to the overlay.
         See the `Styles` section for more details. */
        }
        id={
          "modal_content"
          /* String id to be applied to the content div. */
        }
        className={
          "ReactModal__Content"
          /* String className to be applied to the modal content.
         See the `Styles` section for more details. */
        }
        bodyOpenClassName={
          "ReactModal__Body--open"
          /* String className to be applied to the document.body
         (must be a constant string).
         This attribute when set as `null` doesn't add any class
         to document.body.
         See the `Styles` section for more details. */
        }
        htmlOpenClassName={
          "ReactModal__Html--open"
          /* String className to be applied to the document.html
         (must be a constant string).
         This attribute is `null` by default.
         See the `Styles` section for more details. */
        }
        ariaHideApp={
          true
          /* Boolean indicating if the appElement should be hidden */
        }
        shouldFocusAfterRender={
          true
          /* Boolean indicating if the modal should be focused after render. */
        }
        shouldCloseOnOverlayClick={
          true
          /* Boolean indicating if the overlay should close the modal */
        }
        shouldCloseOnEsc={
          true
          /* Boolean indicating if pressing the esc key should close the modal
         Note: By disabling the esc key from closing the modal
         you may introduce an accessibility issue. */
        }
        shouldReturnFocusAfterClose={
          true
          /* Boolean indicating if the modal should restore focus to the element
         that had focus prior to its display. */
        }
        role={
          "dialog"
          /* String indicating the role of the modal, allowing the 'dialog' role
         to be applied if desired.
         This attribute is `dialog` by default. */
        }
        preventScroll={
          false
          /* Boolean indicating if the modal should use the preventScroll flag when
         restoring focus to the element that had focus prior to its display. */
        }
        parentSelector={() => document.querySelector("#root")}
        aria={
          {
            labelledby: "heading",
            describedby: "full_description",
          }
          /* Additional aria attributes (optional). */
        }
        data={
          { background: "green" }
          /* Additional data attributes (optional). */
        }
      >
        <ContentWrapperStyles>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2rem",
              borderBottom: "1px solid black",
            }}
          >
            <ModalHeader>Settings</ModalHeader>
            <SVGIcon name="close" onclick={toggleModal} />
          </div>
          <div style={{ padding: "2rem" }}>
            <Heading>TIME (MINUTES)</Heading>
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <CustomNumberInput
                  name="pomodoro"
                  text="pomodoro"
                  value={pomodoroState}
                  handleOnChange={setPomodoroState}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <CustomNumberInput
                  name="shortBreak"
                  text="short break"
                  value={shortBreakState}
                  handleOnChange={setShortBreakState}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <CustomNumberInput
                  name="longBreak"
                  text="long break"
                  value={longBreakState}
                  handleOnChange={setLongBreakState}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Heading>FONT</Heading>
            <SelectionButton type="font" />
          </div>
          <div
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Heading>COLOR </Heading>
            <SelectionButton type="color" />
          </div>
        </ContentWrapperStyles>
        <ApplyButtonContainer>
          <ApplyButton onClick={applySettingChanges}>Apply</ApplyButton>
        </ApplyButtonContainer>
      </ReactModal>
    </div>
  );
}
