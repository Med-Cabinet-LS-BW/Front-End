import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import axiosWithAuth from "../Auth/AxiosWithAuth";
import Treatment from "./Treatment";
import CardContent from "@material-ui/core/CardContent";
import EditTreatment from "./EditTreatment";
import TreatmentPlans from "./TreatmentPlans";
import Treatments from "../Treatments/Treatments";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import SimpleMenu from "./AddTreatButton";

const theme = createMuiTheme({
  typography: {
    fontFamily: "quicksand"
  }
});

class TreatmentForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const strain = this.getStrain.value;
    const method = this.getMethod.value;
    const dosage = this.getDosage.value;
    const schedule = this.getSchedule.value;
    const symptoms = this.getSymptoms.value;
    const data = {
      id: new Date(),
      strain,
      method,
      dosage,
      schedule,
      symptoms,
      editing: false
    };
    this.props.dispatch({ type: "ADD_TREATMENT", data });

    this.getStrain.value = "";
    this.getMethod.value = "";
    this.getDosage.value = "";
    this.getSchedule.value = "";
    this.getSymptoms.value = "";
  };

  render() {
    return (
      <>
        <div>
          <div className="container">
            <div>
              <p className="Form">
                Add a Treatment plan by completing the form.
              </p>

              <form className="Form" onSubmit={this.handleSubmit}>
                <h3>Symptoms</h3>
                <input
                  className="Input"
                  required
                  type="text"
                  ref={input => (this.getSymptoms = input)}
                  cols="28"
                />
                <br />
                <br />
                <h3>Strain</h3>
                <input
                  className="Input"
                  required
                  type="text"
                  ref={input => (this.getStrain = input)}
                  placeholder=""
                />
                <br />
                <br />
                <h3>Intake Method</h3>
                <input
                  className="Input"
                  required
                  type="text"
                  ref={input => (this.getMethod = input)}
                  placeholder=""
                />
                <br />
                <br />
                <h3>Dosage</h3>
                <input
                  className="Input"
                  required
                  type="text"
                  ref={input => (this.getDosage = input)}
                  placeholder=""
                />
                <br />
                <br />
                <h3>Schedule</h3>
                <input
                  className="Input"
                  required
                  type="text"
                  ref={input => (this.getSchedule = input)}
                  placeholder=""
                />
                <br />
                <br />
                <button
                  className="PrimaryBtn"
                  onClick={() => {
                    axiosWithAuth()
                      .post(
                        "https://medizen-api.herokuapp.com/api/treatments",
                        {
                          strain: this.getStrain.value,
                          method: this.getMethod.value,
                          dosage: this.getDosage.value,
                          schedule: this.getSchedule.value,
                          symptoms: this.getSymptoms.value
                        }
                      )
                      .then(response => {
                        console.log(response);
                      })
                      .catch(err => {
                        console.log(err);
                      });
                  }}
                >
                  Add Treatment
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(TreatmentForm);
