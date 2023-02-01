import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(() => ({
  menubutton: {
    "&:click": {
      "&:before": {
        borderBottom: `2px solid var(--border)`,
      },
      "&:after": {
        borderBottom: `2px solid var(--border)`,
        transition: "none",
      },
      "&:hover:not($disabled):not($focused):not($error):before": {
        borderBottom: `2px solid var(--border)`,
      },
    },
    "&:hover": {
      color: "black",
      transition: "none",
    },
  },
  menuitem: {
    fontSize: "16px",
    background: "none",
    "&:hover": {
      background: "#f5f5f5",
      color: "#16306D",
    },
  },
}));
export default function MenuDropdown({ title, options }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  return options ? (
    <>
      <Button
        style={{
          float: "left",
          flexGrow: "1",
          textTransform: "none",
          fontSize: "20px",
        }}
        className={classes.menubutton}
        ref={anchorRef}
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : "false"}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {title}{" "}
        <FontAwesomeIcon
          icon={open ? faAngleUp : faAngleDown}
          style={{ marginLeft: "7px" }}
          size="2xs"
        />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
              width: "auto !important",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  style={{ fontSize: "20px", padding: 0 }}
                  aria-labelledby="composition-button"
                >
                  {options?.map((val) => (
                    <Link
                      to={"/" + val.link}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem
                        className={classes.menuitem}
                        onClick={handleClose}
                      >
                        {val.name}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  ) : (
    <Button style={{ flexGrow: 0.5, textTransform: "none" }}>{title}</Button>
  );
}
