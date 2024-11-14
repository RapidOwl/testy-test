import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Tab, Box } from "@mui/material";
import Overview from "../components/DeviceDetailsTabs/Overview";
import buildDeviceName from "../utils/BuildDeviceName";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function DeviceDetails() {
  const { deviceId, currentTab } = useParams();
  const [device, setDevice] = useState(null);

  const baseRouteForTabs = `/device/${deviceId}`;

  useEffect(() => {
    fetch(
      `https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/${deviceId}`
    )
      .then((res) => res.json())
      .then((device) => setDevice(device));
  }, [deviceId]);

  if (!device) {
    return <div>Loading...</div>;
  }

  const deviceName = buildDeviceName(device.name);

  return (
    <Container maxWidth="xl">
      <h1>{deviceName}</h1>

      <TabContext value={currentTab ? currentTab : "overview"}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="lab API tabs example">
            <Tab
              label="Overview"
              value="overview"
              component={Link}
              to={`${baseRouteForTabs}/overview`}
            />
            <Tab
              label="History"
              value="history"
              component={Link}
              to={`${baseRouteForTabs}/history`}
            />
            <Tab
              label="Reports & Audit"
              value="reports"
              component={Link}
              to={`${baseRouteForTabs}/reports`}
            />
            <Tab
              label="Settings"
              value="settings"
              component={Link}
              to={`${baseRouteForTabs}/settings`}
            />
            <Tab
              label="Technical Information"
              value="technical"
              component={Link}
              to={`${baseRouteForTabs}/technical`}
            />
            <Tab
              label="Subscriptions"
              value="subs"
              component={Link}
              to={`${baseRouteForTabs}/subs`}
            />
          </TabList>
        </Box>
        <TabPanel value="overview">
          <Overview deviceName={deviceName} device={device} />
        </TabPanel>
        <TabPanel value="history"></TabPanel>
        <TabPanel value="reports"></TabPanel>
        <TabPanel value="settings"></TabPanel>
        <TabPanel value="technical"></TabPanel>
        <TabPanel value="subs"></TabPanel>
      </TabContext>
    </Container>
  );
}

export default DeviceDetails;
