import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return {
    value,
    onChange: handleChange
};
}


export default useInput

////Code provided by https://designcode.io/react-hooks-handbook-useinput-hook