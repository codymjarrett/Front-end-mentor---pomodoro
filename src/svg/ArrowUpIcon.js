import styled from "styled-components";
import PropTypes from "prop-types";

const ArrowUpIconButton = styled.button`
  display: block;
`;
export default function ArrowUpIcon(props) {
  const { onclick } = props;
  return (
    <ArrowUpIconButton onClick={onclick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
        <path
          fill="none"
          stroke="#1E213F"
          stroke-opacity=".25"
          stroke-width="2"
          d="M1 6l6-4 6 4"
        />
      </svg>
    </ArrowUpIconButton>
  );
}

ArrowUpIcon.propTypes = {
  onclick: PropTypes.func.isRequired,
};
