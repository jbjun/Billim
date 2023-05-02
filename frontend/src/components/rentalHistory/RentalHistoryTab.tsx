// 외부모듈
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

interface IRentalHistoryTabProps {
  tabs: { component: ReactNode; label: string }[];
}

const RentalHistoryTab = ({ tabs }: IRentalHistoryTabProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        "& .Mui-selected": {
          fontWeight: "700",
        },
      }}
    >
      <Tabs value={value} onChange={handleChange}>
        {tabs.map(({ label }) => (
          <Tab
            key={label}
            label={label}
            sx={{
              minWidth: 0,
              p: 0,
              mr: "12px",
              fontSize: "16px",
            }}
          />
        ))}
      </Tabs>
      {tabs.map(({ label, component }, i) => (
        <TabPanel value={value} index={i} key={label}>
          {component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default RentalHistoryTab;
