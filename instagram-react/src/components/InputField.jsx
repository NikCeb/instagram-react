import props from "prop-types";

const InputField = ({ type, id, value, onChange, label }) => (
  <div className="w-[70%] flex items-center justify-center relative text-center">
    <input
      type={type}
      id={id}
      value={value}
      required
      onChange={onChange}
      placeholder={label}
      className="w-full peer text-align-left  border
        border-gray-400 outline-gray-500 rounded inherit  bg-[#fafafa]
        px-2 py-2 bg-ig-secondary-background mb-2.5 inline-block md:text-xs sm:text-xs xs:text-xs"
    />
    {value && (
      <label
        htmlFor={id}
        style={{ pointerEvents: "none", userSelect: "none" }}
        className={` absolute text-gray-500 transition-all xs:text-[8px] sm:text-[10px]  ${
          value !== "" ? "xs:top-0 text-xs left-2" : "top-2 left-0"
        } peer-focus:top-0 peer-focus:left-2 peer-focus:text-8px peer-focus:text-gray-300`}
      >
        {label}
      </label>
    )}
  </div>
);

InputField.propTypes = {
  type: props.string.isRequired,
  id: props.string.isRequired,
  value: props.string.isRequired,
  onChange: props.func.isRequired,
  label: props.string.isRequired,
};

export default InputField;
