import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axiosWithAuth from "../Auth/AxiosWithAuth";

// const options = [
//   <EditIcon
//     className="edit"
//     size="small"
//     color="primary"
//     onClick={() =>
//       this.props.dispatch({
//         type: "EDIT_TREATMENT",
//         id: this.props.treatment.id
//       })
//     }
//   ></EditIcon>,
//   <DeleteIcon
//     className="delete"
//     size="small"
//     color="primary"
//     onClick={() =>
//       this.props.dispatch({ type: "DELETE_TREATMENT", id: this.props.id })
//     }
//   ></DeleteIcon>
// ];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon color="primary" />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <EditIcon
          className="edit"
          size="small"
          color="primary"
          onClick={() =>
            props.dispatch({
              type: "EDIT_TREATMENT",
              id: this.props.id
            })
          }
        ></EditIcon>
        <DeleteIcon
          className="delete"
          size="small"
          color="primary"
          onClick={id => {
            axiosWithAuth()
              .delete(
                `https://medizen-api.herokuapp.com/api/treatments/${id}`,
                {
                  id: !id
                }
              )
              .then(response => {
                console.log(response);
              })
              .catch(err => {
                console.log(err);
              });
          }}
        ></DeleteIcon>
      </Menu>
    </div>
  );
}
