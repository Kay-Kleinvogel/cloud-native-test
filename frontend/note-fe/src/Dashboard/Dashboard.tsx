import { AppBar, Button, Fab, Toolbar, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import React from "react";
import Overview from "./overview/Overview";

const Dashboard = () => {
  return (
    <div className='Dashboard'>
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
      <Fab
        color='primary'
        aria-label='add'
        variant='extended'
        component={Button}
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
    </div>
  );
};

export default Dashboard;
