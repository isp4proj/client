import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../util/Provider";
import icon from "../assets/images/icon.png";
import logo from "../assets/images/logo.png";
import sidelogo from "../assets/images/side-logo.png";


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import ComputerIcon from '@mui/icons-material/Computer';

export default function Bar(props) {
  const { currentUser } = useContext(Context);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        backgroundColor: '#000',
        color: '#fff',
        height: '100vh',
        paddingTop: '100px',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About Us', 'How it works'].map((text, index) => (
          <ListItem key={text} disablePadding className="drawer-item">
            <ListItemButton>
              <ListItemIcon style={{ paddingLeft: '10px' }}>
                {index % 2 === 0 ? <InfoIcon style={{ color: "white" }} /> : <ComputerIcon style={{ color: "white" }} />}
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: '20px' }} />
            </ListItemButton>
          </ListItem>
        ))}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={sidelogo} alt="logo"
            style={{
              // height: '40px',
              width: '80%',
              marginTop: '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            // sx={{
            //   backgroundColor: '#000',
            //   color: '#fff'
            // }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer('left', true)} />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ paddingLeft: '335px' }}>
            {/* <b>DockSec V1.0</b> */}
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <img src={logo} alt="logo" style={{ height: '40px' }} />
            </Link>
          </Typography>

          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "12px",
            }}
            className="nav-link-hover"
          >
            <Button color="inherit">Scans</Button>
          </NavLink>

          {currentUser ? (
            <div className="nav-link-hover" style={{ padding: '6px' }}>
              <Button
                onClick={() => {
                  localStorage.removeItem("jwt-token");
                  window.location.reload();
                }}
                color="inherit"
                style={{ padding: "0 20px" }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
              className="nav-link-hover"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}

          <NavLink
            to="/register"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "12px",
            }}
            className="nav-link-hover"
          >
            <Button color="inherit">Register</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
