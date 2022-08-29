import { useRef, useState } from "react";
import s from "./InputPassword.module.scss";

const InputPassword = () => {
  let [pass, setPass] = useState("");
  let [isHidden, setIsHidden] = useState(true);

  const mask = useRef("*");

  let updatePass = (e) => {
    let newValue = e.target.value;
    let newLength = newValue.length / mask.current.length;
    let oldLength = pass.length * mask.current.length;

    pass.length < newLength && setPass(pass + newValue.slice(oldLength));
    pass.length < newLength && setPass(pass + newValue.slice(oldLength));
  };

  const toggleHiddenPassword = () => setIsHidden((prev) => !prev);

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        value={isHidden ? mask.current.repeat(pass.length) : pass}
        onChange={updatePass}
      />
      <button className={s.button} type="button" onClick={toggleHiddenPassword}>
        Toggle
      </button>
    </div>
  );
};

export default InputPassword;
