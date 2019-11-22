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
import { green } from '@material-ui/core/colors';
import  FavoriteIcon  from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import axiosWithAuth from '../Auth/AxiosWithAuth';


const useStyles = makeStyles(theme => ({
    card: {
      width: 320,
      height: 300,
      margin: 20
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
      backgroundColor: green[500],
    },
  }));



  const Strain = props =>  {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


 const handleSubmit = (e) => {
    e.preventDefault();
     const title = this.getTitle.value;
     const message = this.getMessage.value;
     const data = {
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

   

return (

<Card className={classes.card}>
      {console.log(props)}
      <CardHeader
        action={
          <IconButton aria-label="add to favorites"  onClick={()=> {
              axiosWithAuth().post('https://medizen-api.herokuapp.com/api/favorites/strains', {
                strain_id: props.strain_id
              })
              .then(response => {
                console.log(response);
              })
              .catch(err => {console.log(err)})
            }}>
          <FavoriteIcon />
        </IconButton>
        }
        title={props.name}
      
      />
     
      
      <CardContent>
        <Typography paragraph>Type: {props.type}</Typography>
        <Typography paragraph>Effects: {props.effects.map(element => {
          return `${element} `
        })}</Typography>
      </CardContent>
      <CardActions disableSpacing>
          <Avatar aria-label="strain">
            <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
          </Avatar>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Flavor: {
          props.flavor.map(element => {
            return `${element} `
          })
        }</Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
)
  }

  export default connect()(Strain);



