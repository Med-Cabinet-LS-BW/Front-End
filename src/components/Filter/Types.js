import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axiosWithAuth from "../Auth/AxiosWithAuth";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { TextareaAutosize } from "@material-ui/core";
import Strain from "../Strain/Strain";

const Filters = {
  types: ["hybrid", "sativa", "indica"]
};

const GreenCheckbox = withStyles({
  root: {
    color: "grey",
    "&$checked": {
      color: "#3d8f6d"
    }
  },
  checked: {}
})(props => <Checkbox {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    width: "96%",
    margin: "0 auto",
    minWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const Types = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [state, setState] = React.useState({
    checkedG: true
  });
  const [requests, setRequests] = React.useState([]);
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newChecked = [...checked];
    console.log(newChecked);
    axiosWithAuth()
      .post("https://medizen-api.herokuapp.com/api/strains/recommendations", {
        filters: [newChecked]
      })
      .then(response => {
        console.log(response);
        setRequests(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="column">
        <div className="column">
          <p>
            Please select no more than 2 filters at a time and use the heart
            icon to save your preferred strands.
          </p>
          <form className="wrapChecks">
            <List className={classes.root}>
              <div className="Row">
                {Filters.types.map(value => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem
                      key={value}
                      role={undefined}
                      dense
                      button
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <FormControlLabel
                          control={
                            <GreenCheckbox
                              edge="start"
                              checked={state.checkedG}
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              onChange={handleChange("checkedG")}
                              value="checkedG"
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          }
                          label={value}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} />
                    </ListItem>
                  );
                })}
              </div>
            </List>
          </form>
          <div className="container">
            <Button
              onClick={handleSubmit}
              className="FilterBtn"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="wrap">
          {requests.map(strain => (
            <Strain
              key={strain.strain_id}
              strain_id={strain.strain_id}
              title={strain.strain}
              type={strain.type}
              effects={strain.effects}
              flavor={strain.flavors}
              description={strain.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default connect()(Types);
