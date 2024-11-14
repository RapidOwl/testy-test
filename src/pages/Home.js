import DeviceList from "../components/DeviceList";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        {/* Nav header goes here */}
        <DeviceList />
      </Container>
    </>
  );
}

export default App;

// DONE
// I've tried to put things into sensible folders
//

// TODO

// Change the email on the commits :joy:
// Back link from device details to device list
// The auth'd URLs would presumably need a bearer token
// useSWR for caching and revalidation
// Labels are only available on the secondary request? So would need doing for every row...
// Tests (Jest, React Testing Library, MSW, Playwright)
// Tooltips for next report time
// DataGrid for large amounts of data???
// Filtering etc
// Make it responsive
// Skeleton for the table to prevent CLS during data load
// Error logging
// Use Next or Remix for server side rendering
// Sort and group imports for tidiness
// TypeScript
// Lay out the header better
// Linting!
// Light/dark mode toggle
// I deliberately left out some of the links from the device details screen
// Better loading state for the DeviceDetails
// Storage property was missing from API response
// Better loading animation for pages. Maybe a spinner?
// The SIM info wasn't on the endpoint so I created a signal strength indicator instead
// I wasn't going to demonstrate anything new by adding more information so I moved onto tests
// I didn't have time to add Storybook
// Better naming for the GitHub action steps
