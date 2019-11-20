import React, { Component } from 'react';
import { connect } from 'react-redux';


class TreatmentForm extends Component {
  handleSubmit = (e) => {
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
   type: 'ADD_TREATMENT',
   data
   })
   this.getTitle.value = '';
   this.getMessage.value = '';
  }


render() {
return (
<div 
key={this.props.treatment.id} 
className="TreatForm">
<h1>Add a treatment plan</h1>
  <form className="form" onSubmit={this.handleSubmit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.treatment.title} placeholder="Strain" /><br /><br />
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.treatment.title} placeholder="Intake Method" /><br /><br />
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.treatment.title} placeholder="Dosage" /><br /><br />
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.treatment.title} placeholder="Schedule" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.treatment.message} cols="28" placeholder="Ailments" /><br /><br />
    <button>Continue</button>
  </form>
</div>
);
}
}
export default connect()(TreatmentForm);