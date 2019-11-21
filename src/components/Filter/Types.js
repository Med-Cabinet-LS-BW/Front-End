import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Filters = {
  
 effects : ['Creative', 'Energetic', 'Tingly', 'Euphoric', 'Relaxed', 'Aroused', 'Happy', 'Uplifted', 'Hungry', 'Talkative', 'None', 'Giggly', 'Focused', 'Sleepy', 'Dry', 'Mouth'],

    flavors : ['Earthy', 'Sweet', 'Citrus', 'Flowery', 'Violet', 'Diesel', 'Spicy/Herbal', 'Sage', 'Woody', 'Apricot', 'Grapefruit', 'Orange', 'None', 'Pungent', 'Grape', 'Pine', 'Skunk', 'Berry', 'Pepper', 'Menthol', 'Blue', 'Cheese', 'Chemical', 'Mango', 'Lemon', 'Peach', 'Vanilla', 'Nutty', 'Chestnut', 'Tea', 'Tobacco', 'Tropical', 'Strawberry', 'Blueberry', 'Mint', 'Apple', 'Honey', 'Lavender', 'Lime', 'Coffee', 'Ammonia', 'Minty', 'Tree', 'Fruit', 'Butter', 'Pineapple', 'Tar', 'Rose', 'Plum', 'Pear'],
    types: ['hybrid', 'sativa', 'indica']
 }



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid grey', 
  }
}));


export default function Types() {

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [state, setState] = React.useState({
    checkedG: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {Filters.types.map(value => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
            <FormGroup row>
            <FormControlLabel
              control={
                <GreenCheckbox
                  edge="start"
                  checked={state.checkedG}
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  onChange={handleChange('checkedG')}
                  value="checkedG"
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              }
              label=""
            />
            </FormGroup>
            </ListItemIcon>
            <ListItemText id={labelId} primary={{value}} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}