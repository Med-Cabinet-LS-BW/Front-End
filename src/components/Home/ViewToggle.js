import React from "react";
import Button from "@material-ui/core/Button";
import Strains from "../Strain/Strains";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { grey } from "@material-ui/core/colors";
import Effects from "../Filter/Effects";
import TreatmentPlans from "../Treatments/TreatmentPlans";
import Treatments from "../Treatments/Treatments";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";
import Filter from "../Filter/FilterForm";
import Favorites from "../Strain/Favorites";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3d8f6d" },
    secondary: { main: grey[50] }
  },
  typography: {
    fontFamily: "quicksand"
  }
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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey,
    margin: "0, auto",
    width: "100%"
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightHeavy
  }
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
        <AppBar className="AppBar" position="static" color="secondary">
          <Tabs
            className="Tabs"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <LinkTab label="Discover" {...a11yProps(0)} />
            <LinkTab label="Favorites" {...a11yProps(1)} />
            <LinkTab label="Treatments" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <ViewToggle value={value} index={0}>
          <Strains />
        </ViewToggle>
        <ViewToggle value={value} index={1}>
          <Favorites />
        </ViewToggle>
        <ViewToggle value={value} index={2}>
          <Treatments />
        </ViewToggle>
      </ThemeProvider>
    </div>
  );
}
