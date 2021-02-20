import PropTypes from "prop-types";
import { SVG_MAP } from "./SVGMap";
import { IconButton } from "./IconStyles";

export default function SVGIcon(props) {
  const { name, onclick } = props;

  return <IconButton onClick={onclick}>{SVG_MAP[name]} </IconButton>;
}

SVGIcon.propTypes = {
  onclick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
