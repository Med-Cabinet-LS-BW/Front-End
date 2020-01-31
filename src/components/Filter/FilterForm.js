
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

{/* <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Outlined"
          margin="normal"
          variant="outlined"
        /> */}

const theme = createMuiTheme({
  palette: {
    primary: { main: green[600] }, // Purple and green play nicely together.
    secondary: { main: green[900] }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: 'quicksand'
  },
});

class Filter extends Component {
  handleSubmit = (e) => {
  e.preventDefault();
  const treatment = this.getTreatment.value;
  const intake = this.getIntake.value;
  const dosage = this.getDosage.value;
  const schedule = this.getSchedule.value;
  const ailments = this.getAilments.value;
  const data = {
   id: new Date(),
   treatment,
   intake,
   dosage,
   schedule,
   ailments,
   editing: false
  }
  this.props.dispatch({
   type: 'ADD_TREATMENT',
   data
   })
   this.getTreatment.value = '';
   this.getIntake.value = '';
   this.getDosage.value = '';
   this.getSchedule.value = '';
   this.getAilments.value = '';
  }

  render() {
    return (
    <div className="treat-container">
      <h2 className="treat_heading">Treatment Plan</h2>
      <form className="TreatForm" onSubmit={this.handleSubmit} >
        <h3>Ailment</h3>
       <TextField required type="text" ref={(input) => this.getTreatment = input}
       placeholder="" /><br /><br />
       <h3>Intake Schedule</h3>
        <input required type="text" ref={(input) => this.getIntake = input}
       placeholder="" /><br /><br />
       <h3>Dosage</h3>
        <input required type="text" ref={(input) => this.getDosage = input}
       placeholder="" /><br /><br />
       <h3>Shcedule</h3>
        <input required type="text" ref={(input) => this.getSchedule = input}
       placeholder="" /><br /><br />
       <h3>Ailment Description</h3>
       <textarea required rows="5" ref={(input) => this.getAilments = input}
       cols="28" placeholder="Ailment Description" /><br /><br />
       <button color="primary">Add Treatment</button>
      </form>
    </div>
    );
    }
    }
export default connect()(Filter);

























// import React, { Component } from 'react';
// import { connect } from 'react-redux';


// // TODO --- For effects and flavors, you'll have to pull in all of them and remove the duplicates in order to make a list of checkboxes for them ---- 

// class StrainForm extends Component {
// handleSubmit = (e) => {
// e.preventDefault();
//  const title = this.getTitle.value;
//  const message = this.getMessage.value;
//  const data = {
// // TODO -- This data object will contain an array of selected flavor values and an array of selected effects values as well as a selected type value
//   id: new Date(),
//   title,
//   message,
//   editing: false
//  }
//  this.props.dispatch({
//  type: 'ADD_STRAIN',
//  data
//  })
//  this.getTitle.value = '';
//  this.getMessage.value = '';
// }
// render() {
// return (
// <div className="wrap">
//   <h1 className="post_heading">Favorite Strain</h1>
//   <form className="form" onSubmit={this.handleSubmit} >
//    <input required type="text" ref={(input) => this.getTitle = input}
//    placeholder="Enter Post Title" /><br /><br />
//    <textarea required rows="5" ref={(input) => this.getMessage = input}
//    cols="28" placeholder="Enter Post" /><br /><br />
//    <button>Favorite</button>
//   </form>
// </div>
// );
// }
// }
// export default connect()(StrainForm);