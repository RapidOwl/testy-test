import { Box, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import styled from "@emotion/styled";
import { formatDistanceToNow, formatISO9075 } from "date-fns";

export function DistanceToNowWithTooltip({ reportTime }) {
  const VerticallyCentredBox = styled(Box)`
    display: flex;
    align-items: center;
  `;

  const reportTimeAsDate = new Date(reportTime);

  console.log(reportTime);
  console.log(reportTimeAsDate);

  return (
    <VerticallyCentredBox>
      {formatDistanceToNow(reportTimeAsDate, {
        addSuffix: true,
      })}
      <Tooltip title={formatISO9075(reportTimeAsDate)}>
        <InfoIcon sx={{ ml: 1 }}></InfoIcon>
      </Tooltip>
    </VerticallyCentredBox>
  );
}
