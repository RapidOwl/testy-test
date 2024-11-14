import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import {
  Link,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";

function DeviceList() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch(
      "https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices"
    )
      .then((res) => res.json())
      .then((data) => {
        setDevices(data.results);
      });
  }, []);

  return (
    <>
      <h2>Device List</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Name</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Model</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Last Report</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Next Report</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id} sx={{ cursor: "pointer" }}>
                <TableCell>
                  {device.name ? device.name : "Unnamed device"}
                </TableCell>
                <TableCell>{device.model.name}</TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(device.lastReportTime), {
                    addSuffix: true,
                  })}
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(device.nextReportTime))}
                </TableCell>
                <TableCell>
                  <Typography color="primary">
                    <Link href={"/device/" + device.id}>Details</Link>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DeviceList;
