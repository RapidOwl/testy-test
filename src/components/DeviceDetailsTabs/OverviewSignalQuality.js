import { Typography, Chip } from "@mui/material";

function OverviewSIMDetails({ lowSignal }) {
  const SignalStrength = lowSignal ? (
    <Chip label="Low" color="warning" />
  ) : (
    <Chip label="Good" color="success" />
  );

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Signal Quality
      </Typography>
      {SignalStrength}
    </>
  );
}

export default OverviewSIMDetails;
