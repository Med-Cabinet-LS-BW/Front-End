import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CustomizedExpansionPanels from "../Filter/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function FilterButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="FilterBtn"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
      >
        <ExpandMoreIcon />
        Filter
      </Button>

      <Menu
        className="Filters"
        id="simple-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomizedExpansionPanels onClick={handleClose} />
      </Menu>
    </div>
  );
}
