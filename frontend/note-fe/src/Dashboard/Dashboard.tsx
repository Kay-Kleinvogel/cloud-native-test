import { AppBar, Button, Fab, Toolbar, Typography } from "@mui/material";

import React from "react";
import Overview from "./overview/Overview";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateNote from "../CreateNote/CreateNote";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='Dashboard'>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            Your Notes
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/create' element={<CreateNote />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
