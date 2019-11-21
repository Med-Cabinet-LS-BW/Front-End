import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, CardHeader,  } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { red } from '@material-ui/core/colors';
import {FavoriteBorder, Favorite } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    card: {
      width: 345,
      margin: 50
    },
    media: {
      height: 0,
      paddingTop: '.05%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

class Strain extends React.Component  {

  handleSubmit = (e) => {
    e.preventDefault();
     const title = this.getTitle.value;
     const message = this.getMessage.value;
     const data = {
       // TODO --- the object returned should say favorite: true
      id: new Date(),
      title,
      message,
      editing: false
     }
     this.props.dispatch({
     type: 'ADD_STRAIN',
     data
     })
     this.getTitle.value = '';
     this.getMessage.value = '';
    }

  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };


  render () {
  return (
    
    <Card>
      <h1 title={this.props.strain}/>
      <CardHeader
        
        action={
          <form>
          <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
          label="Custom icon"
          onSubmit={this.handleSubmit}
        /></form>
        }
        
      
      />
      <CardMedia
        // className={classes.media}
        title={this.props.description}
      />
      
      <CardContent>
        <Typography paragraph>Type:</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.props.type}
        </Typography>
        <Typography paragraph>Effects:</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.props.effects}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <Avatar aria-label="strain">
            <IconButton
          // className={clsx(classes.expand, {
          //   [classes.expandOpen]: expanded,
          // })}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
          </Avatar>
      </CardActions>
      <Collapse 
      // in={expanded} 
      timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Flavor:</Typography>
          <Typography paragraph>
            {this.props.flavors}
          </Typography>
          <Typography paragraph>
            {this.props.description}
          </Typography>
          <Typography>
            {/* Review this strand. */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}}
export default Strain;

   // {
    //   id: number,
    //   strain_id: number,
    //   strain: string,
    //   type: string,
    //   rating: float,
    //   description: string,
    //   effects: array,
    //   flavors: array
    // }
