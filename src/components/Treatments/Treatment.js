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
    <Card className="TreatmentCard">
      <div>
      <CardActionArea>
        <CardContent>
          // TODO --- MAKE THIS MORE ICON REVEAL TWO MORE ICONS
          <MoreHorizIcon />
          <Typography gutterBottom variant="h5" component="h2">
          Treatment: {this.props.treatment.treatment}
          </Typography>
          <Typography>
          Intake Method: {this.props.treatment.intake}
          </Typography>
          <Typography>
          Dosage: {this.props.treatment.dosage}
          </Typography>
          <Typography>
          Schedule: {this.props.treatment.schedule}
          </Typography>
          <Typography>
          Ailments: {this.props.treatment.ailments}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        // TODO --- CHANGE THESE BUTTONS TO A TRASH AND A PENCIL ICON THAT UNFOLDS FROM 'MORE' ABOVE
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