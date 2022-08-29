import { useState } from "react";
import NumberFormat from "react-number-format";

const InputNamberFormat = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <label htmlFor="">
      <NumberFormat
        thousandSeparator=" "
        decimalSeparator="."
        decimalScale={2}
        fixedDecimalScale={true}
        type="text"
        placeholder="00.00"
        value={value}
        onChange={handleChange}
        required
        minLength={1}
        maxLength={1000000000}
      />
    </label>
  );
};

export default InputNamberFormat;


