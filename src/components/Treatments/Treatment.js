import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreIcon from "./MoreIcon";
import LongMenu from "./MoreIcon";
import { FormControlLabel, CardHeader } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import axiosWithAuth from "../Auth/AxiosWithAuth";

const useStyles = makeStyles(theme => ({
  card: {
    width: 450,
    margin: 20
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
  }
}));

// class Treatment extends React.Component {

const Treatment = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div>
        <Card className="Form">
          <CardHeader
            action={
              <CardActions>
                {/* <LongMenu /> */}
                <DeleteIcon
                  className="delete"
                  size="small"
                  color="primary"
                  onClick={() => {
                    axiosWithAuth()
                      .delete(
                        `https://medizen-api.herokuapp.com/api/treatments/${props.id}`,
                        {
                          id: !props.id
                        }
                      )
                      .then(response => {
                        console.log(response);
                      })
                      .catch(err => {
                        console.log(err);
                      });
                  }}
                ></DeleteIcon>
              </CardActions>
            }
            title={props.strain}
            subheader={
              <CardContent>
                <Typography>Method: {props.method}</Typography>
                <Typography> Dosage: {props.dosage}</Typography>
                <Typography> Schedule: {props.schedule}</Typography>
                <Typography> Symptoms: {props.symptoms}</Typography>
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
              <Typography paragraph>Flavor: {}</Typography>
              <Typography paragraph></Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
};
export default connect()(Treatment);
