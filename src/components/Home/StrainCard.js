import React from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    card: {
      width: 300,
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

const StrainCard = props =>  {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      {/* {console.log(props)} */}
      <CardHeader
        action={
          <IconButton aria-label="add to favorites"  onClick={()=> {
              axiosWithAuth().post('https://medizen-api.herokuapp.com/api/favorites/strains', {
                strain_id: props.strain_id
              })
              .then(response => {
                //console.log(response);
              })
              .catch(err => {console.log(err)})
            }}>
          <FavoriteIcon />
        </IconButton>
        }
        title={props.name}
      
      />      
      <CardContent>
        <Typography paragraph>Type: {props.type[0].toUpperCase() + props.type.slice(1)}</Typography>

        <Typography paragraph>{`Effects: ${props.effects.join(', ')}`}</Typography>
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
          <Typography paragraph>{`Flavor: ${props.flavor.join(', ')}`} </Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default StrainCard;