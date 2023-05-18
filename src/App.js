import React from "react";
import Typography from "@mui/material/Typography";
import "./style.css";

import Accordion from "./Component/Accordion";
import Editable from "./Component/Editable";
import Btn from "./Component/Btn";

const App = () => {
  return (
    <div>
      <Typography variant="h4">
        Reusable 'useToggle' hook, that consists of the useState and function
      </Typography>
      <Accordion title="Toggle header" content="This is toggle content" />
      <br />
      <Editable />
      <br />
      <br />
      {/* Reusable component*/}

      <Typography variant="h4">
        Reusable button with children, style and
      </Typography>
      <div style={{display: 'flex'}}>
          <Btn>Default Button</Btn>
          
          <Btn style={{ backgroundColor: "#1ec9c9", color: "#fff" }} >
             <h5>Styled Button</h5>
          </Btn>
          <Btn>Default Button</Btn>
          <Btn onClick={() => {alert("Button clicked")}}>Click me</Btn>
       </div>
      
    </div>
  );
};

export default App;
