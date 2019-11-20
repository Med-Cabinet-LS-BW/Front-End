import React, { Component } from 'react';
import { connect } from 'react-redux';


// TODO --- For effects and flavors, you'll have to pull in all of them and remove the duplicates in order to make a list of checkboxes for them ---- 

class StrainForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const title = this.getTitle.value;
 const message = this.getMessage.value;
 const data = {
// TODO -- This data object will contain an array of selected flavor values and an array of selected effects values as well as a selected type value
  id: new Date(),
  title,
  message,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_STRAIN',
 data
 })
 this.getTitle.value = '';
 this.getMessage.value = '';
}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Favorite Strain</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getTitle = input}
   placeholder="Enter Post Title" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage = input}
   cols="28" placeholder="Enter Post" /><br /><br />
   <button>Favorite</button>
  </form>
</div>
);
}
}
export default connect()(StrainForm);