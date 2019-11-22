// import React, { useEffect, useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import axios from 'axios';
// import StrainCard from "../HomePage/StrainCard";

// const useStyles = makeStyles(theme => ({
//     card: {
//       maxWidth: 300,
//       height: '1%',
//       margin: '10%',
//     },
//     media: {
//       height: 0,
//       paddingTop: '8%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.longest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       color: green,
//     },
//   }));

// const Favorites = (props) => {

//   const axiosWithAuth = () => {
//     return axios.create({
//         headers: {
//             authorization: localStorage.getItem("token")
//         }
//     });
// };

//     const [strains, setStrains] = useState([])

//     useEffect(() => {
//       axiosWithAuth().get('https://medizen-api.herokuapp.com/api/favorites/strains')
//       .then(response => {
//         //console.log(response);
//         setStrains(response.data);
//       })
//       .catch(err => {console.log('no data returned', err)});
//     }, [])

//     return (
//         <div className="strain-cards">
//             {strains.map(strain =>
//             <StrainCard
//               key={strain.strain_id}
//               name={strain.strain}
//               type={strain.type}
//               effects={strain.effects}
//               flavor={strain.flavors}
//               description={strain.description}
//               />)}
//         </div>
//     )
// }

// export default Favorites;