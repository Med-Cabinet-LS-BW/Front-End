import React, { Component } from 'react';
import { connect } from 'react-redux';
import Treatment from './Treatment';
import EditTreatment from './EditTreatment';





class TreatmentPlans extends React.Component {
  render () {
    return (
      <div>
    {this.props.treatment.map((treatment) => (
        <div key={treatment.id}>
          {treatment.editing ? <EditTreatment treatment={treatment} key={treatment.id} /> : <Treatment treatment={treatment}
          key={treatment.id} />}
        </div>
    ))}
   </div> )
  }
}


const mapStateToProps = (state) => {
return {
treatments: state
}
}
export default connect(mapStateToProps)(TreatmentPlans);