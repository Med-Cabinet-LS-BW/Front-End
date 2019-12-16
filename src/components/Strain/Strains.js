import React, { Component } from "react";
import { connect } from "react-redux";
import Strain from "./Strain";
import axios from "axios";
import EditStrain from "../Actions/EditStrain";
import CustomizedExpansionPanels from "../Filter/ExpansionPanel";
import { Button } from "@material-ui/core";
import FilterButton from "./FilterButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
};

class Strains extends React.Component {
  state = {
    strains: []
  };

  componentDidMount() {
    this.getData();
    if (!localStorage.getItem("token")) {
      console.error("Please Login!!!");
    } else {
      console.info("We are logged in");
    }
  }

  getData = () => {
    axiosWithAuth()
      .get("https://medizen-api.herokuapp.com/api/strains")
      .then(response => {
        this.setState({ strains: response.data });
      });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="TitleBar">
            <h1 className="Heading">Strains</h1>
            <div>
              <div className="Row">
                <FilterButton color="primary">Filter</FilterButton>
              </div>
            </div>
          </div>

          <div className="wrap">
            {this.state.strains.map(strain => (
              <Strain
                key={strain.strain_id}
                strain_id={strain.strain_id}
                title={strain.strain}
                type={strain.type}
                effects={strain.effects}
                flavor={strain.flavors}
                description={strain.description}
              >
                {strain.editing ? (
                  // Change this Element below to <EditStrain>
                  <EditStrain strain={strain} key={strain.id} />
                ) : (
                  <Strain strain={strain} key={strain.id} />
                )}
              </Strain>
            ))}
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
export default connect(mapStateToProps)(Strains);
