import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Link } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DevicesIcon from "@mui/icons-material/Devices";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <DevicesIcon />
          <Typography variant="h6" component="div" sx={{ ml: 2, flexGrow: 1 }}>
            Devices
          </Typography>
          <Link href="/">Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
