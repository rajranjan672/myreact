import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Home, Person, Search } from '@mui/icons-material';
import { Grid, Paper, Slider } from '@mui/material';
import Formikmui from '../Login/Formikmui';
import BottomNavigation from './BottomNavigate';
import BottomNav from './BottomNavigate';
import MyProfile from './MyProfile';
import Offcanvas from './Offcanvas';


export default function SearchResult() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <Box sx={{ width: '100%', typography: 'body1',  zIndex: 7  
 }}>
      <TabContext value={value} sx={{ width: '100%',  zIndex: 7    }}>
        <Box sx={{ width: '100%',  zIndex: '7 !important'   }}>
          <TabList textColor="primary" indicatorColor="primary" onChange={handleChange} variant="fullWidth">
            <Tab icon={<Home />} label="Employees" value="1" />
            <Tab icon={<Search />} label="Item Two" value="2" />
            <Tab icon={<Person />} label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        {/* <Slider color='secondary' defaultValue={50} aria-label="Default" valueLabelDisplay="on" /> */}
        <MyProfile />
        </TabPanel>
        <TabPanel value="2"><Offcanvas /></TabPanel>
        <TabPanel value="3">
          <Paper elevation={4}>
          <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            hello
          </Grid>
          </Grid>
          
            hi
          </Paper>
        </TabPanel>
      </TabContext>
    </Box>
  );
}