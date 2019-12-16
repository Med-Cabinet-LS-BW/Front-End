// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Treatment from "./Treatment";
// import EditTreatment from "./EditTreatment";
// import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";
// import { green } from "@material-ui/core/colors";
// import CardContent from "@material-ui/core/CardContent";
// import IconButton from "@material-ui/core/IconButton";
// import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
// import SimpleMenu from "./AddTreatButton";

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: green[600] }, // Purple and green play nicely together.
//     secondary: { main: green[900] } // This is just green.A700 as hex.
//   },
//   typography: {
//     fontFamily: "quicksand"
//   }
// });

// class TreatmentPlans extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h4>You have no Treatment Plans yet.</h4>
//         <p>Add a Treatment plan by clicking on the icon above.</p>

//         <button className="PrimaryBtn">Start a treatment</button>
//         {this.props.treatments.map(treatment => (
//           <CardContent className="TreatmentCard" key={treatment.id}>
//             {treatment.editing ? (
//               <EditTreatment treatment={treatment} key={treatment.id} />
//             ) : (
//               <Treatment treatment={treatment} key={treatment.id} />
//             )}
//             <IconButton></IconButton>
//           </CardContent>
//         ))}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     treatments: state
//   };
// };
// export default connect(mapStateToProps)(TreatmentPlans);
