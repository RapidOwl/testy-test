import { ErrorBoundary } from "react-error-boundary";
import Grid from "@mui/material/Grid2";
import { Typography, Divider, Alert } from "@mui/material";
import OverviewSummary from "./OverviewSummary";
import OverviewSignalQuality from "./OverviewSignalQuality";

function Overview({ deviceName, device }) {
  return (
    <ErrorBoundary
      fallback={<Alert severity="error">Error loading device data</Alert>}
    >
      <Grid container spacing={2}>
        <Grid size={3}>
          <OverviewSummary deviceName={deviceName} device={device} />
          <Divider sx={{ my: 2 }} />
          <OverviewSignalQuality
            lowSignal={device.statusIndicators.lowSignal}
          />
        </Grid>
        <Grid size={3}>
          <Typography variant="h5">Status</Typography>
        </Grid>
        <Grid size={3}>
          <Typography variant="h5">Position</Typography>
        </Grid>
        <Grid size={3}>
          <Typography variant="h5">Sensor Data</Typography>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
}

export default Overview;
