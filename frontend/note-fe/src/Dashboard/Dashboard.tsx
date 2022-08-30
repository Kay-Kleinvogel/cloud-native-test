import {
  AppBar,
  Box,
  Button,
  Container,
  Fab,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Overview from "./overview/Overview";
import CreateNoteModal from "./CreateNoteModal/CreateNoteModal";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Your Notes
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='content'>
        <Overview />
      </div>
      <CreateNoteModal open={open} onClose={() => setOpen(false)} />

      <Fab
        color='primary'
        aria-label='add'
        variant='extended'
        component={Button}
        onClick={() => setOpen(true)}
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <AddIcon sx={{ mr: 1 }} />
        Add Task
      </Fab>
    </>
  );
};

export default Dashboard;
