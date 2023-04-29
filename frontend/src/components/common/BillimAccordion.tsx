import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderBottom: `1px solid black`,
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  // "&:before": {
  //   display: "none",
  // },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1.3rem", color: "black" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: "rgba(0, 0, 0, .03)",
  // flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#F3F7FA",
}));

export interface IAccordionProps {
  title: string; // 제목
  time: string; // 년 월 일
  content: string; // 내용
}

interface IBillimAccordionProps {
  accordions: IAccordionProps[];
}
export default function BillimAccordion({ accordions }: IBillimAccordionProps) {
  const [expanded, setExpanded] = React.useState<number | null>(null);

  const handleChange =
    (panelIndex: number) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panelIndex : null);
    };

  return (
    <div>
      {accordions.map(({ title, time, content }, index) => {
        return (
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary>
              <Stack>
                <Typography variant="h5">{title}</Typography>
                <Typography sx={{ mt: 1, color: "grey" }}>{time}</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
