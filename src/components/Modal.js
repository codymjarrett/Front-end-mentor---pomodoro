import ReactModal from "react-modal";
import styled from "styled-components";
import { FONT_MAP, KUMBH_SANS } from "../constants.js";
import { generateNIncrements } from "../utils";

import SelectionButton from "./SelectionButton";

// styles for modal ugh
import "../styles/modal.css";

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

export default function Modal(props) {
  const { isOpen, toggleModal } = props;
  return (
    <div>
      <ReactModal
        isOpen={
          isOpen
          /* Boolean describing if the modal should be shown or not. */
        }
        //   onAfterOpen={
        //     handleAfterOpenFunc
        //     /* Function that will be run after the modal has opened. */
        //   }
        //   onAfterClose={
        //     handleAfterCloseFunc
        //     /* Function that will be run after the modal has closed. */
        //   }
        //   onRequestClose={
        //     handleRequestCloseFunc
        //     /* Function that will be run when the modal is requested
        //      to be closed (either by clicking on overlay or pressing ESC).
        //      Note: It is not called if isOpen is changed by other means. */
        //   }
        closeTimeoutMS={
          0
          /* Number indicating the milliseconds to wait before closing
         the modal. */
        }
        //   style={
        //     { overlay: {}, content: {} }
        //     /* Object indicating styles to be used for the modal.
        //      It has two keys, `overlay` and `content`.
        //      See the `Styles` section for more details. */
        //   }
        contentLabel={
          "Example Modal"
          /* String indicating how the content container should be announced
         to screenreaders */
        }
        portalClassName={
          "ReactModalPortal"
          /* String className to be applied to the portal.
         See the `Styles` section for more details. */
        }
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
            <h1>Settings</h1>
            <button onClick={toggleModal}>X</button>
          </div>
          <div>
            <h2>TIME (MINUTES)</h2>
            <div>
              <div>
                <label htmlFor="pomodoro">pomodoro</label>
                <select name="pomodoro" id="pomodoro">
                  {generateNIncrements(100).map((num) => (
                    <option value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="shortBreak">short break</label>
                <select name="shortBreak" id="shortBreak">
                  {generateNIncrements(50).map((num) => (
                    <option value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="longBreak">long break</label>
                <select name="longBreak" id="longBreak">
                  {generateNIncrements(50).map((num) => (
                    <option value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "2rem",
            }}
          >
            <h2>FONT </h2>
            <SelectionButton type="font" />
          </div>
          <div
            style={{
              padding: "2rem",
            }}
          >
            <h2>COLOR </h2>
            <SelectionButton type="color" />
          </div>
        </ContentWrapperStyles>
        <ApplyButtonContainer>
          <ApplyButton>Apply</ApplyButton>
        </ApplyButtonContainer>
      </ReactModal>
    </div>
  );
}
