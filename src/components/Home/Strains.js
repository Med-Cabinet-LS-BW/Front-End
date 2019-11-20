import React, { Component } from 'react';
import { Connect } from 'react-redux';
import Strain from './Strain';
import axios from 'axios';
import EditStrain from './EditStrain';

// TODO    ---- RENAME STRAINCARD FILE TO STRAIN ------
// TODO    ---- Fix EditStrain element below ------
// TODO    ---- Uncomment EditStrain import and fix the address ------




// class AllStrains extends Component {
// render() {
// return (
// <div>
//   <h1 className="post_heading">Strains</h1>
//   {this.props.strains.map((strain) => (
//   <div key={strain.id}>
//     {strain.editing ? <EditComponent strain={strain} key={strain.id} /> : <Strain strain={strain}
//     key={strain.id} />}
//   </div>
// ))}
// </div>
// );
// }
// }

// const mapStateToProps = (state) => {
// return {
// strains: state
// }
// }
// export default connect(mapStateToProps)(AllStrains);


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
        axiosWithAuth().get("https://medizen-api.herokuapp.com/api/strains")
         
          .then(response => {
            this.setState({ strains: response.data });
          });
      }
    
    
      render() {
   
        return (
            <div class='wrap' >
              <h1>Strains</h1>
                {this.state.strains.map(strain => 
        <Strain
        key={strain.strain_id}
        title={strain.strain}
        type={strain.type}
        effects={strain.effects}
        flavor={strain.flavors}
        description={strain.description}> 
        {strain.editing ? 
        // Change this Element below to <EditStrain>
        <EditStrain strain={strain} key={strain.id}/> 
        : <Strain strain={strain} key={strain.id} />}   
           </Strain> )} 
            </div>
        )
      }
    }

    
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








 