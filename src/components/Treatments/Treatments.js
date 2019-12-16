import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Strain from "../Strain/Strain";
import axios from "axios";
import EditStrain from "../Actions/EditStrain";
import CustomizedExpansionPanels from "../Filter/ExpansionPanel";
import { Button } from "@material-ui/core";
import Treatment from "./Treatment";
import Card from "@material-ui/core/card";
import SimpleMenu from "./AddTreatButton";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
};

const useStyles = makeStyles(theme => ({
  card: {
    width: 450,
    margin: 20
  }
}));

class Treatments extends React.Component {
  state = {
    treatments: [
      {
        id: "",
        user_id: "",
        strain: "",
        method: "",
        dosage: "",
        schedule: "",
        symptoms: ""
      }
    ]
  };

  componentDidMount() {
    this.getData();
    if (!localStorage.getItem("token")) {
    } else {
    }
  }

  getData = () => {
    axiosWithAuth()
      .get("https://medizen-api.herokuapp.com/api/treatments")
      .then(response => {
        console.log(response);
        this.setState({ treatments: response.data });
      });
  };
  render() {
    return (
      <>
        <div className="Row">
          <h1>Treatment Plans</h1>
          <SimpleMenu />
        </div>
        <div>
          <div className="Row">
            <Card className="Form">
              {this.state.treatments.map(treatment => (
                <Treatment
                  key={treatment.id}
                  id={treatment.id}
                  strain={treatment.strain}
                  method={treatment.method}
                  dosage={treatment.dosage}
                  schedule={treatment.schedule}
                  symptoms={treatment.symptoms}
                ></Treatment>
              ))}
            </Card>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    strains: state
  };
};
export default connect(mapStateToProps)(Treatments);
