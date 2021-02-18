import PropTypes from "prop-types";

export default function CustomNumberInput(props) {
  const { name, text, min = 5, max = 100, handleOnChange, value } = props;
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        type="number"
        min={min}
        max={max}
        step="5"
        value={value}
        id={name}
        name={name}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </>
  );
}

CustomNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
