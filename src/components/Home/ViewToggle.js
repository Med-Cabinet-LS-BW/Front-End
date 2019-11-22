import React from 'react';
import Button from '@material-ui/core/Button';
import Strains from '../Strain/Strains';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { grey } from '@material-ui/core/colors';
import Effects from '../Filter/Effects';
import TreatmentPlans from '../Treatments/TreatmentPlans';
import TreatmentForm from '../Treatments/TreatmentForm';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import FilterForm from '../Filter/FilterForm';


const theme = createMuiTheme({
  palette: {
    primary: { main: green[600] }, // Purple and green play nicely together.
    secondary: { main: grey[50] }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: 'quicksand'
  },
});

function ViewToggle(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

ViewToggle.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey,
    margin: '0, auto',
    width: '100%',
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
 
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (

    
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
     
   
      <AppBar className="AppBar" position="static" color="secondary" >
        <Tabs
          className="Tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Discover" {...a11yProps(0)} />
          <Tab label="Favorites" {...a11yProps(1)} />
          <Tab label="Treatments" {...a11yProps(2)} />
          <Tab label="Filter Strains" {...a11yProps(3)} />
        </Tabs>
      </AppBar>


      <SwipeableViews
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > 
      
        <ViewToggle className= "ViewToggle" value={value} index={0} dir={theme.direction}>
            <Strains /> 
        </ViewToggle>
        <ViewToggle className= "ViewToggle" value={value} index={1} dir={theme.direction}>
          Favorites
        </ViewToggle>
       <ViewToggle className= "ViewToggle" value={value} index={2} dir={theme.direction}>
          Treatments 
          <TreatmentForm className= "TreatForm"/>
          <TreatmentPlans/>
        </ViewToggle>
        <ViewToggle className= "ViewToggle" value={value} index={3} dir={theme.direction}>
            {/* <Effects />  */}
        </ViewToggle>
      </SwipeableViews>
      </ThemeProvider>
    </div>
  )
  }