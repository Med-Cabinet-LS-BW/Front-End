import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditTreatment extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTreatment = this.getTreatment.value;
  const newIntake = this.getIntake.value;
  const newDosage = this.getDosage.value;
  const newSchedule = this.getSchedule.value;
  const newAilments = this.getAilments.value;
  const data = {
    newTreatment,
    newIntake,
    newDosage,
    newSchedule,
    newAilments
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.treatment.id, data: data })
}
render() {
return (
<div key={this.props.treatment.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTreatment = input}
    defaultValue={this.props.treatment.treatment} placeholder="Enter Treatment Title" /><br /><br />
    <input required type="text" ref={(input) => this.getIntake = input}
    defaultValue={this.props.treatment.intake} placeholder="Enter Treatment Title" /><br /><br />
    <input required type="text" ref={(input) => this.getDosage = input}
    defaultValue={this.props.treatment.dosage} placeholder="Enter Treatment Title" /><br /><br />
    <input required type="text" ref={(input) => this.getSchedule = input}
    defaultValue={this.props.treatment.schedule} placeholder="Enter Treatment Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getAilments = input}
    defaultValue={this.props.treatment.ailments} cols="28" placeholder="Enter Treatment" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditTreatment);