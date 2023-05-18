import { useState } from "react";
import Button from "@mui/material/Button";
import { useToggle } from "../Hook/useToggle";

const Editable = (state) => {
  const [inputValue, setInputValue] = useState("");

  const { status: editable, toggleStatus: toggleEditable } = useToggle();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  console.log(editable);

  return (
    <div>
      {editable ? (
        <label>
          Title
          <input type="text" value={inputValue} onChange={handleInputValue} />
        </label>
      ) : (
        <>Title {inputValue}</>
      )}
      <br />
      <Button onClick={toggleEditable} variant="contained">
        Edit Title
      </Button>
    </div>
  );
};

export default Editable;
