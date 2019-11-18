import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      height: '1%',
      margin: '10%',
    },
    media: {
      height: 0,
      paddingTop: '8%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.longest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      color: green,
    },
  }));

const Favorites = (props) => {



    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default Favorites;