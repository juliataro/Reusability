import React from "react";
import Button from "@mui/material/Button";

function Btn(props) {
  const { children, style, onClick } = props;
  return (
    <div>
      <Button
        variant="outlined"
        style={style ? style : { background: "red", color: "#fff", marginLeft:"5px", marginRight:"5px" }}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}

export default Btn;
