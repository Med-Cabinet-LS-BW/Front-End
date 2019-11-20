import React, { useEffect, useState } from 'react';
// import ViewToggle from './ViewToggle';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// //import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// //import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// //import { green } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios";
import StrainCard from "./StrainCard";


const axiosWithAuth = () => {
  return axios.create({
      headers: {
          authorization: localStorage.getItem("token")
      }
  });
};

class StrainList extends React.Component {
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
      axiosWithAuth().get("https://medizen-api.herokuapp.com/api/strains", {
        headers: { authorization: localStorage.getItem("token") }
      })
       
        .then(response => {
          this.setState({ strains: response.data });
        });
    }
  
  
  
    render() {
 
      return (
          <div className='wrap' >
              {this.state.strains.map(strain => <StrainCard
                key={strain.strain_id}
                strain_id={strain.strain_id}
                name={strain.strain}
                type={strain.type}
                effects={strain.effects}
                flavor={strain.flavors}
                description={strain.description}/>    
              )}
          </div>
      )}
  }

  export default StrainList;


// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//     height: '1%',
//     margin: '10%',
//   },
//   media: {
//     height: 0,
//     paddingTop: '8%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.longest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     color: 'green',
//   },
// }));

// export default function StrainList() {

//   console.log(localStorage.getItem('token'));

//   const axiosWithAuth = () => {
//     return axios.create({
//         headers: {
//             authorization: localStorage.getItem("token")
//         }
//     });
//   };

//   const [strains, setStrains] = useState()

//   useEffect(() => {
//     axiosWithAuth().get('https://medizen-api.herokuapp.com/api/strains')
//     .then(response => {
//       console.log(response);
//       setStrains(response.data);
//   })
// }, [])

//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div>
//     <Card className={classes.card}>
//       <CardHeader
//         avatar={
//           <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//         }
//         action={
//           <IconButton aria-label="add to favorites"  onClick={()=> {
//             axiosWithAuth().post('https://medizen-api.herokuapp.com/api/favorites/strains', {
//               strain_id: strains.strain_id
//             })
//             .then(response => {
//               console.log(response);
//             })
//             .catch(err => {console.log(err)})
//           }}>
//           <FavoriteIcon/>
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image="/static/images/cards/paella.jpg"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. 
//         </Typography>
//       </CardContent>
      
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//     </div>
//   );
// }