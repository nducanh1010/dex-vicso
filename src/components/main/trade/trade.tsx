"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Swap from './component/swap';
import { styled } from '@mui/material/styles';
import '../trade/trade.css'


interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 20,
    width: '100%',
    backgroundColor: '#000',
  },
});
interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontSize: theme.typography.pxToRem(12),
  marginRight: theme.spacing(-5),
  color: '#000',
  '&.Mui-selected': {
    color: '#000',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#000',
  },
}));




interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className ='ahsd' sx={{ width: '100%' , display: 'block'}}>
      <Box sx={{bgcolor:'#fff', width:'100%', marginTop: 2}}>
      <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Traker ?" />
          <StyledTab label="Swap" />
        </StyledTabs>
      <CustomTabPanel value={value} index={0}>
        maker
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Swap/>
      </CustomTabPanel>
      </Box>
    </Box>
  );
}


