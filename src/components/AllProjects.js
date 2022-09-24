import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
/*import Typography from '@mui/material/Typography';*/
import Box from '@mui/material/Box';
import Projects from './personal-projects/Projects'; 
import Experiences from './experiences/Experiences'; 
import MayaModels from './modeling/Modeling'; 
import './AllProjects.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
          <div>{children}</div>
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
    <div id = "projects">
       <div className="subject-title">
            <div className='square'></div>
            <h1>Porfolio Selection</h1>
        </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{  borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" centered>
            <Tab label="Personal Projects" {...a11yProps(0)} />
            <Tab label="Experiences" {...a11yProps(1)} />
            <Tab label="3D Modeling" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Projects>PROJECTS</Projects>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Experiences>PROJECTS</Experiences>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MayaModels>PROJECTS</MayaModels>
        </TabPanel>
      </Box>
    </div>
  );
}
