import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, CardHeader } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { green, orange } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axiosWithAuth from "../Auth/AxiosWithAuth";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
    margin: 20,
    height: ""
  },
  content: {
    display: "flexbox",
    justifyContent: "center",
    marginTop: 10
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.longest
    })
  },
  expandOpen: {
    // transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green[500]
  },
  text: {
    color: orange[50]
  }
}));

const HeartCheckbox = withStyles({
  root: {
    color: "#3d8f6d",
    "&$checked": {
      color: "#3d8f6d"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const FavoriteStrain = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    checkedH: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      {props.strain_id}
      <CardHeader
        action={
          <FormControlLabel
            control={
              <HeartCheckbox
                onClick={favorite_id => {
                  axiosWithAuth()
                    .delete(
                      `https://medizen-api.herokuapp.com/api/favorites/strains/${props.favorite_id}`,
                      {
                        favorite_id: !favorite_id
                      }
                    )
                    .then(response => {
                      console.log(response);
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }}
                icon={
                  <Favorite
                    checked={state.checkedH}
                    onChange={handleChange("checkedH")}
                  />
                }
                checkedIcon={<FavoriteBorder />}
              />
            }
          ></FormControlLabel>
        }
        title={props.title}
        subheader={
          <CardContent>
            <Typography>Type: {props.type}</Typography>
            <Typography>
              {" "}
              Effects:{" "}
              {props.effects.map(element => {
                return `${element} `;
              })}
            </Typography>
          </CardContent>
        }
      />
      <CardActions disableSpacing>
        <Typography
          color="primary"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          View Details
        </Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Flavor:{" "}
            {props.flavor.map(element => {
              return `${element} `;
            })}
          </Typography>
          <Typography paragraph>{props.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default connect()(FavoriteStrain);
