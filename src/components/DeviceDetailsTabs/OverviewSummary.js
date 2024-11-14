import { Typography } from "@mui/material";

function OverviewSummary({ deviceName, device }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Summary
      </Typography>
      <Typography variant="h6">Device ID</Typography>
      <Typography variant="body1">{device.id}</Typography>
      <Typography variant="h6">Name</Typography>
      <Typography variant="body1">{deviceName}</Typography>
      <Typography variant="h6">Model</Typography>
      <Typography variant="body1">{device.model.name}</Typography>
      <Typography variant="h6">Owner</Typography>
      <Typography variant="body1">{device.owner.name}</Typography>
      {/* <Typography variant="h6">Storage</Typography>
          <p>{device.storage}</p> */}
      <Typography variant="h6">Firmware</Typography>
      <Typography variant="body1">{device.firmware.current}</Typography>
    </>
  );
}

export default OverviewSummary;
