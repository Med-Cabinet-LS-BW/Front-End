import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import TreatmentCards from './Treatment';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div class="wrapper">
        <h1>Treatment Plans</h1>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Start a treatment
      </Button>
      <TreatmentCards/>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Start a Treatment Plan
        </DialogTitle>
        <DialogContent>
        <div>
        <form  noValidate autoComplete="off">
        <ListItemText primary="Strain"/>
        <TextField
          id="strain"
          className=''
          label="Strain"
          margin="normal"
          variant="outlined"
        />
         <div>
         <ListItemText primary="Intake Method"/>
        <TextField
          id="intake-method"
          className=''
          label="Intake Method"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
      <ListItemText primary="Dosage"/>
        <TextField
          id="dosage"
          className=''
          label="Dosage"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
      <ListItemText primary="Schedule"/>
        <TextField
          id="schedule"
          className=''
          label="Schedule"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
      <ListItemText primary="Ailments"/>
      <TextField
          id="ailments"
          label="Ailments"
          multiline
          rows="4"
          defaultValue=""
          className=''
          margin="normal"
          variant="outlined"
        />
      </div>
      </form>
      </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Continue 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}