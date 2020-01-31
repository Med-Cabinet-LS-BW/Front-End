import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteStrain from './Favorite';
import axios from 'axios';
import EditStrain from '../Actions/EditStrain';
import CustomizedExpansionPanels from '../Filter/ExpansionPanel';
import { Button } from "@material-ui/core";



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
      }
    
    
    componentDidMount() {
        this.getData();
        if (!localStorage.getItem("token")) {
          console.error("Please Login!!!");
        } else {
          console.info("We are logged in");
        }
      }

    getData = () => {
        axiosWithAuth().get("https://medizen-api.herokuapp.com/api/favorites/strains")
          .then(response => {
            this.setState({ strains: response.data });
            console.log(response);
          });
      }
      render() {
   
        return (
        <>
        <div className="Row">
        <h1 className="Heading">Favorites</h1>
    
        </div>
        <CustomizedExpansionPanels/>
            <div className='wrap' >
              
                {this.state.strains.map(strain => 
        <FavoriteStrain
        favorite_id={strain.favorite_id}
        key={strain.strain_id}
        title={strain.strain}
        type={strain.type}
        effects={strain.effects}
        flavor={strain.flavors}
        description={strain.description}
        is_favorite= {true}> 
           </FavoriteStrain> )} 
            </div>
            </>
        )
      }
    }

const mapStateToProps = (state) => {
  return {
  strains: state
  }
  }
  export default connect(mapStateToProps)(Strains);










 