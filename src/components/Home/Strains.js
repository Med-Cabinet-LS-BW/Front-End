import StrainCard from './StrainCard';
import React from 'react';
import axios from 'axios';



const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorizations: localStorage.getItem("token")
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
        axiosWithAuth().get("https://medizen-api.herokuapp.com/api/auth/strains", {
          headers: { authorization: localStorage.getItem("token") }
        })
         
          .then(response => {
            this.setState({ strains: response.data });
          });
      }
    
    
    
      render() {
   
        return (
            <div class='wrap' >
                {this.state.strains.map(strain => <StrainCard
        key={strain.id}
        name={strain.name}
        type={strain.type}
        effects={strain.effects}
        flavor={strain.flavor}
        description={strain.description}/>    
                )}
            </div>
        )}
    }

    // {
    //   id: number,
    //   strain_id: number,
    //   strain: string,
    //   type: string,
    //   rating: float,
    //   description: string,
    //   effects: array,
    //   flavors: array
    // }





    export default Strains;



// 








 