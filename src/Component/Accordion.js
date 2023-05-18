import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useToggle } from "../Hook/useToggle";

// Accordion function
const Accordion = (props) => {
  const { title, content } = props;
  // Reusable Hook
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  return (
    <div>
      <AccordionHeader
        title={title}
        toggleExpand={toggleExpand}
        expand={expand}
      />
      <AccordionContent expand={expand} content={content} />
    </div>
  );
};

// Accordion header
const AccordionHeader = (props) => {
  const { title, toggleExpand, expand } = props;

  return (
    <Button onClick={toggleExpand}>
      {title}
      <span>{expand ? "+" : "-"}</span>
    </Button>
  );
};

// Content

const AccordionContent = (props) => {
  const { content, expand } = props;

  return <>{expand && <Typography>{content}</Typography>}</>;
};
export default Accordion;
