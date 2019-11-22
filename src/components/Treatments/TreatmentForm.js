import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import axios from 'axios';


const theme = createMuiTheme({
  palette: {
    primary: { main: green[600] }, // Purple and green play nicely together.
    secondary: { main: green[900] }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: 'quicksand'
  },
});

class TreatmentForm extends Component {
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
  const ADD_TREATMENT = 'ADD_TREATMENT';
  axios
    .post('https://medizen-api.herokuapp.com/api/treatments')
    .then(res =>
    this.props.dispatch({
    type: ADD_TREATMENT,
    data
   }))
   this.getTreatment.value = '';
   this.getIntake.value = '';
   this.getDosage.value = '';
   this.getSchedule.value = '';
   this.getAilments.value = '';

  


  }

  render() {
    return (
    <div>
      <h2 className="Heading">Treatment Plan</h2>
      <form className="Form" onSubmit={this.handleSubmit} 
      >
        <h3>Ailment</h3>
       <input required type="text" ref={(input) => this.getTreatment = input}
       placeholder="" /><br /><br />
       <h3>Intake Schedule</h3>
        <input className="Input" required type="text" ref={(input) => this.getIntake = input}
       placeholder="" /><br /><br />
       <h3>Dosage</h3>
        <input className="Input" required type="text" ref={(input) => this.getDosage = input}
       placeholder="" /><br /><br />
       <h3>Shcedule</h3>
        <input className="Input" required type="text" ref={(input) => this.getSchedule = input}
       placeholder="" /><br /><br />
       <h3>Ailment Description</h3>
       <textarea className="Input" required rows="5" ref={(input) => this.getAilments = input}
       cols="28" placeholder="Ailment Description" /><br /><br />
       <button className="PrimaryBtn">Add Treatment</button>
      </form>
    </div>
    );
    }
    }
export default connect()(TreatmentForm);