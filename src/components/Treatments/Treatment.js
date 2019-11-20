import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';







//   </div>
// </div>
// );
// }
// }
// export default connect()(Treatment);




const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


class Treatment extends React.Component {
    

  render () {
  return (
    <Card className="card">
      <div className="post">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {this.props.treatment.title}
          </Typography>
          <MoreHorizIcon />
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.treatment.message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="edit" size="small" color="primary"
        onClick={() => this.props.dispatch({ type: 'EDIT_TREATMENT', id: this.props.treatment.id })}
        >
          Update
        </Button>
        <Button className = "delete" size="small" color="primary"
        onClick={() => this.props.dispatch({ type: 'DELETE_TREATMENT', id: this.props.treatment.id })}
        >
          Delete
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}
}

export default connect()(Treatment);