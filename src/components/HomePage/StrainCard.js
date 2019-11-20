import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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

const StrainCard = props =>  {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        
        action={
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        }
        title={props.name}
      
      />
      <CardMedia
        className={classes.media}
        title={props.name}
      />
      
      <CardContent>
        <Typography paragraph>Type:</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.type}
        </Typography>
        <Typography paragraph>Effects:</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.effects}
        </Typography>
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
          <Typography paragraph>Flavor:</Typography>
          <Typography paragraph>
            {props.flavor}
          </Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
          <Typography>
            Review this strand.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default StrainCard;

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
