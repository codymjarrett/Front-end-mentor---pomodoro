import styled from "styled-components";
import PropTypes from "prop-types";

const ArrowDownIconButton = styled.button`
  display: block;
`;
export default function ArrowDownIcon(props) {
  const { onclick } = props;
  return (
    <ArrowDownIconButton onClick={onclick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
        <path
          fill="none"
          stroke="#1E213F"
          stroke-opacity=".25"
          stroke-width="2"
          d="M1 1l6 4 6-4"
        />
      </svg>
    </ArrowDownIconButton>
  );
}

ArrowDownIcon.propTypes = {
  onclick: PropTypes.func.isRequired,
};
