import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Tab, Box } from "@mui/material";
import Overview from "../components/DeviceDetailsTabs/Overview";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import buildDeviceName from "../utils/BuildDeviceName";

function DeviceDetails() {
  const { deviceId } = useParams();
  const [device, setDevice] = useState(null);
  const [tabValue, setTabValue] = useState("1");

  useEffect(() => {
    fetch(
      `https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/${deviceId}`
    )
      .then((res) => res.json())
      .then((device) => setDevice(device));
  }, [deviceId]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!device) {
    return <div>Loading...</div>;
  }

  const deviceName = buildDeviceName(device.name);

  return (
    <Container maxWidth="lg">
      <h1>{deviceName}</h1>

      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="History" value="2" />
            <Tab label="Reports & Audit" value="3" />
            <Tab label="Settings" value="4" />
            <Tab label="Technical Information" value="5" />
            <Tab label="Subscriptions" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Overview deviceName={deviceName} device={device} />
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
        <TabPanel value="4"></TabPanel>
        <TabPanel value="5"></TabPanel>
        <TabPanel value="6"></TabPanel>
      </TabContext>
    </Container>
  );
}

export default DeviceDetails;
